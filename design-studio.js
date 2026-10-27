/* ============================================================
   HAZELNART DESIGN STUDIO: page script (moved out of the HTML
   so the site can run under a strict Content-Security-Policy)
   ============================================================ */
/* ============================================================
   HAZELNART DESIGN STUDIO: Canvas Drawing Engine
   ============================================================ */

// ── Config ─────────────────────────────────────────────────
const HAZELNART_PHONE = '233266575930';

// ── DOM refs ────────────────────────────────────────────────
const canvas     = document.getElementById('sketchCanvas');
const ctx        = canvas.getContext('2d');
const previewCvs = document.getElementById('previewCanvas');
const previewCtx = previewCvs.getContext('2d');
const brushPrevCvs = document.getElementById('brushPreview');
const brushPrevCtx = brushPrevCvs.getContext('2d');

// ── State ───────────────────────────────────────────────────
let dpr = window.devicePixelRatio || 1;
let logW = 0, logH = 0;

const S = {
  tool:      'pencil',
  color:     '#000000',
  size:      4,
  opacity:   1.0,
  shapeMode: 'stroke',
  drawing:   false,
  startX:    0, startY: 0,
  lastX:     0, lastY:  0,
  snapshot:  null,
  textX:     0, textY:  0,
  canvasBg:  'white',
  template:  'blank',
  hasReference: false,
  dirty:     false,
};

let brandColors = [];

const undoStack = [];
const redoStack = [];
const MAX_UNDO  = 25;

// ── Canvas BG colours/patterns ──────────────────────────────
const BG = {
  white: '#ffffff',
  cream: '#fdf8f0',
  dark:  '#1a1a1a',
};

// ── Product Templates (guide outlines drawn in "units", fitted to the canvas) ──
function roundRectPath(c, x, y, w, h, r) {
  c.beginPath();
  c.moveTo(x + r, y);
  c.arcTo(x + w, y, x + w, y + h, r);
  c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r);
  c.arcTo(x, y, x + w, y, r);
  c.closePath();
}

const TEMPLATES = {
  tshirt: {
    name: 'T-Shirt', caption: 'T-SHIRT · FRONT', w: 100, h: 100,
    draw(c, u) {
      u.solid();
      c.beginPath();
      c.moveTo(36, 6); c.quadraticCurveTo(50, 20, 64, 6);
      c.lineTo(84, 13); c.lineTo(99, 35); c.lineTo(83, 44); c.lineTo(78, 37);
      c.lineTo(78, 97); c.lineTo(22, 97); c.lineTo(22, 37);
      c.lineTo(17, 44); c.lineTo(1, 35); c.lineTo(16, 13);
      c.closePath(); c.stroke();
      u.dashed(); c.strokeRect(34, 28, 32, 38); u.label('PRINT AREA', 50, 47);
    },
  },
  mug: {
    name: 'Mug', caption: 'MUG · WRAP-AROUND PRINT', w: 122, h: 100,
    draw(c, u) {
      u.solid();
      c.beginPath(); c.ellipse(52, 12, 42, 6, 0, 0, Math.PI * 2); c.stroke();
      c.beginPath();
      c.moveTo(10, 12); c.lineTo(10, 88); c.quadraticCurveTo(10, 97, 52, 97);
      c.quadraticCurveTo(94, 97, 94, 88); c.lineTo(94, 12);
      c.moveTo(94, 30); c.bezierCurveTo(126, 28, 126, 74, 94, 72);
      c.moveTo(94, 40); c.bezierCurveTo(112, 40, 112, 62, 94, 62);
      c.stroke();
      u.dashed(); c.strokeRect(22, 30, 60, 48); u.label('PRINT AREA', 52, 54);
    },
  },
  tote: {
    name: 'Tote Bag', caption: 'TOTE BAG', w: 100, h: 112,
    draw(c, u) {
      u.solid();
      c.strokeRect(10, 38, 80, 72);
      c.beginPath();
      c.moveTo(26, 38); c.bezierCurveTo(26, 4, 44, 4, 44, 38);
      c.moveTo(56, 38); c.bezierCurveTo(56, 4, 74, 4, 74, 38);
      c.stroke();
      u.dashed(); c.strokeRect(24, 52, 52, 46); u.label('PRINT AREA', 50, 75);
    },
  },
  card: {
    name: 'Business Card', caption: 'BUSINESS CARD · 85 × 55 mm', w: 155, h: 100,
    draw(c, u) {
      u.solid(); roundRectPath(c, 0, 0, 155, 100, 5); c.stroke();
      u.dashed(); c.strokeRect(8, 8, 139, 84); u.label('SAFE AREA', 77.5, 50);
    },
  },
  flyer: {
    name: 'A5 Flyer', caption: 'A5 FLYER · 148 × 210 mm', w: 100, h: 141,
    draw(c, u) {
      u.solid(); c.strokeRect(0, 0, 100, 141);
      u.dashed(); c.strokeRect(7, 7, 86, 127);
      c.strokeRect(14, 14, 72, 24); u.label('HEADLINE', 50, 26);
      c.strokeRect(14, 46, 72, 56); u.label('IMAGE', 50, 74);
      u.label('DETAILS · CONTACT', 50, 118);
    },
  },
  rollup: {
    name: 'Roll-up Banner', caption: 'ROLL-UP BANNER · 85 × 200 cm', w: 50, h: 118,
    draw(c, u) {
      u.solid(); c.strokeRect(4, 0, 42, 106);
      roundRectPath(c, 0, 106, 50, 8, 2); c.stroke();
      c.beginPath(); c.moveTo(6, 114); c.lineTo(4, 118); c.moveTo(44, 114); c.lineTo(46, 118); c.stroke();
      u.dashed(); c.strokeRect(10, 6, 30, 20); u.label('LOGO', 25, 16);
      c.strokeRect(10, 32, 30, 46); u.label('MESSAGE', 25, 55);
      u.label('CONTACT', 25, 92);
    },
  },
  vehicle: {
    name: 'Vehicle', caption: 'VEHICLE · SIDE VIEW', w: 200, h: 72,
    draw(c, u) {
      u.solid();
      c.beginPath();
      c.moveTo(6, 55); c.lineTo(6, 42); c.quadraticCurveTo(8, 36, 20, 34);
      c.lineTo(52, 31); c.lineTo(72, 12); c.lineTo(136, 12); c.lineTo(160, 31);
      c.lineTo(186, 34); c.quadraticCurveTo(196, 36, 196, 46); c.lineTo(196, 55);
      c.lineTo(171, 55); c.arc(156, 55, 15, 0, Math.PI, true);
      c.lineTo(65, 55); c.arc(50, 55, 15, 0, Math.PI, true);
      c.closePath(); c.stroke();
      c.beginPath(); c.arc(50, 57, 11, 0, Math.PI * 2); c.stroke();
      c.beginPath(); c.arc(156, 57, 11, 0, Math.PI * 2); c.stroke();
      c.beginPath();
      c.moveTo(78, 16); c.lineTo(102, 16); c.lineTo(102, 29); c.lineTo(62, 29); c.closePath();
      c.moveTo(108, 16); c.lineTo(133, 16); c.lineTo(152, 29); c.lineTo(108, 29); c.closePath();
      c.stroke();
      u.dashed(); c.strokeRect(24, 34, 152, 14); u.label('BRANDING AREA', 100, 41);
    },
  },
  sign: {
    name: 'Signboard', caption: 'SIGNBOARD / SHOP FRONT', w: 200, h: 90,
    draw(c, u) {
      u.solid(); c.strokeRect(4, 4, 192, 58);
      c.beginPath();
      c.moveTo(40, 62); c.lineTo(40, 88); c.moveTo(160, 62); c.lineTo(160, 88);
      c.moveTo(20, 88); c.lineTo(180, 88);
      c.stroke();
      u.dashed(); c.strokeRect(12, 12, 176, 42); u.label('YOUR SIGN', 100, 33);
    },
  },
  logo: {
    name: 'Logo / Badge', caption: 'LOGO / BADGE', w: 100, h: 100,
    draw(c, u) {
      u.solid(); c.beginPath(); c.arc(50, 50, 48, 0, Math.PI * 2); c.stroke();
      u.dashed(); c.beginPath(); c.arc(50, 50, 36, 0, Math.PI * 2); c.stroke();
      u.label('LOGO', 50, 50);
    },
  },
};

function drawTemplate(key) {
  const t = TEMPLATES[key];
  if (!t) return;
  const pad = 32, captionSpace = 28;
  const availW = logW - pad * 2, availH = logH - pad * 2 - captionSpace;
  const s  = Math.min(availW / t.w, availH / t.h);
  const ox = (logW - t.w * s) / 2;
  const oy = pad + (availH - t.h * s) / 2;
  const ink = S.canvasBg === 'dark' ? 'rgba(212,212,212,0.6)' : '#a1a1aa';
  const font = '600 {px}px "Space Grotesk", system-ui, sans-serif';

  ctx.save();
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = 'source-over';
  ctx.translate(ox, oy);
  ctx.scale(s, s);
  ctx.strokeStyle = ink; ctx.fillStyle = ink;
  ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  const px = v => v / s;   // screen px → template units
  t.draw(ctx, {
    solid:  () => { ctx.setLineDash([]); ctx.lineWidth = px(2); },
    dashed: () => { ctx.setLineDash([px(7), px(6)]); ctx.lineWidth = px(1.5); },
    label:  (text, x, y) => {
      ctx.font = font.replace('{px}', px(11));
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(text, x, y);
    },
  });
  ctx.restore();

  ctx.save();
  ctx.fillStyle = ink;
  ctx.font = font.replace('{px}', 12);
  ctx.textAlign = 'center';
  ctx.fillText(t.caption, logW / 2, oy + t.h * s + 22);
  ctx.restore();
}

function setTemplateChip(key) {
  document.querySelectorAll('.tpl-chip[data-template]').forEach(b =>
    b.classList.toggle('active', b.dataset.template === key));
}

function applyTemplate(key) {
  saveSnapshot();
  fillBg();
  drawTemplate(key);
  S.template = key;
  setTemplateChip(key);
  updatePreview();
  if (TEMPLATES[key]) showToast(`${TEMPLATES[key].name} template ready. Sketch on top, or press Ctrl+Z to undo.`);
}

// ── Init Canvas ─────────────────────────────────────────────
function initCanvas() {
  const outer = document.getElementById('canvasOuter');
  const W = Math.max(outer.clientWidth  - 64, 300);
  const H = Math.max(outer.clientHeight - 32, 300);

  logW = W; logH = H;
  canvas.style.width  = W + 'px';
  canvas.style.height = H + 'px';
  canvas.width  = W * dpr;
  canvas.height = H * dpr;
  ctx.scale(dpr, dpr);

  fillBg();
  document.getElementById('statusSize').textContent = `Canvas: ${W} × ${H} px`;
}

// The drawing lives on a transparent layer; the "paper" is painted behind it
// with CSS, and only merged in when exporting. That keeps the eraser and the
// background switcher working on an existing sketch.
function fillBg() {
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
  paintPaper();
}

function paintPaper() {
  const st = canvas.style;
  st.backgroundColor = BG[S.canvasBg] || '#ffffff';
  if (S.canvasBg === 'grid') {
    st.backgroundImage = 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)';
    st.backgroundSize  = '20px 20px';
  } else if (S.canvasBg === 'dots') {
    st.backgroundImage = 'radial-gradient(circle, #d1d5db 1.5px, transparent 1.7px)';
    st.backgroundSize  = '20px 20px';
  } else {
    st.backgroundImage = 'none';
  }
}

// Paint the paper onto an export canvas (unit = physical px per CSS px)
function drawPaper(c, W, H, unit) {
  c.fillStyle = BG[S.canvasBg] || '#ffffff';
  c.fillRect(0, 0, W, H);
  const step = 20 * unit;
  if (S.canvasBg === 'grid') {
    c.fillStyle = '#e5e7eb';
    for (let x = 0; x < W; x += step) c.fillRect(x, 0, Math.max(1, unit), H);
    for (let y = 0; y < H; y += step) c.fillRect(0, y, W, Math.max(1, unit));
  } else if (S.canvasBg === 'dots') {
    c.fillStyle = '#d1d5db';
    for (let x = step / 2; x < W; x += step)
      for (let y = step / 2; y < H; y += step) { c.beginPath(); c.arc(x, y, 1.5 * unit, 0, Math.PI * 2); c.fill(); }
  }
}

// Sketch + paper flattened into one canvas
function flattenSketch() {
  const flat = document.createElement('canvas');
  flat.width  = canvas.width;
  flat.height = canvas.height;
  const fCtx = flat.getContext('2d');
  drawPaper(fCtx, flat.width, flat.height, dpr);
  fCtx.drawImage(canvas, 0, 0);
  return flat;
}

// ── Undo / Redo ─────────────────────────────────────────────
function saveSnapshot() {
  undoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
  if (undoStack.length > MAX_UNDO) undoStack.shift();
  redoStack.length = 0;
  S.dirty = true;
}

function undo() {
  if (!undoStack.length) return;
  redoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
  ctx.putImageData(undoStack.pop(), 0, 0);
  updatePreview();
}

function redo() {
  if (!redoStack.length) return;
  undoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
  ctx.putImageData(redoStack.pop(), 0, 0);
  updatePreview();
}

function clearCanvas() {
  if (!confirm('Clear the canvas? This cannot be undone.')) return;
  saveSnapshot();
  fillBg();
  S.template = 'blank';
  S.hasReference = false;
  setTemplateChip('blank');
  updatePreview();
}

// ── Coordinates ─────────────────────────────────────────────
function getPos(e) {
  const rect = canvas.getBoundingClientRect();
  let cx, cy;
  if (e.touches && e.touches.length > 0) {
    cx = e.touches[0].clientX; cy = e.touches[0].clientY;
  } else if (e.changedTouches && e.changedTouches.length > 0) {
    cx = e.changedTouches[0].clientX; cy = e.changedTouches[0].clientY;
  } else {
    cx = e.clientX; cy = e.clientY;
  }
  return {
    x: (cx - rect.left) * (logW / rect.width),
    y: (cy - rect.top)  * (logH / rect.height),
  };
}

// ── Draw Setup ───────────────────────────────────────────────
function applyDrawStyle() {
  ctx.globalAlpha     = S.opacity;
  ctx.strokeStyle     = S.color;
  ctx.fillStyle       = S.color;
  ctx.lineWidth       = S.size;
  ctx.lineCap         = 'round';
  ctx.lineJoin        = 'round';
  ctx.globalCompositeOperation = 'source-over';
}

// ── Freehand Drawing ─────────────────────────────────────────
function drawFreehand(pos) {
  applyDrawStyle();

  if (S.tool === 'brush') {
    ctx.lineWidth = S.size * 3;
    ctx.globalAlpha = S.opacity * 0.55;
  } else if (S.tool === 'marker') {
    ctx.lineWidth = S.size * 2.5;
    ctx.lineCap   = 'square';
  }

  ctx.beginPath();
  ctx.moveTo(S.lastX, S.lastY);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();

  S.lastX = pos.x; S.lastY = pos.y;
  ctx.globalAlpha = 1;
}

// ── Eraser ───────────────────────────────────────────────────
function drawEraser(pos) {
  ctx.save();
  ctx.globalCompositeOperation = 'destination-out';
  ctx.globalAlpha = 1;
  ctx.lineWidth   = S.size * 3;
  ctx.lineCap     = 'round';
  ctx.beginPath();
  ctx.moveTo(S.lastX, S.lastY);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
  ctx.restore();
  S.lastX = pos.x; S.lastY = pos.y;
}

// ── Shape Preview (restore snapshot then draw) ───────────────
function previewShape(pos) {
  if (S.snapshot) ctx.putImageData(S.snapshot, 0, 0);
  applyDrawStyle();

  const dx = pos.x - S.startX;
  const dy = pos.y - S.startY;

  if (S.tool === 'line') {
    ctx.beginPath();
    ctx.moveTo(S.startX, S.startY);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();

  } else if (S.tool === 'arrow') {
    drawArrow(S.startX, S.startY, pos.x, pos.y);

  } else if (S.tool === 'rect') {
    if (S.shapeMode === 'fill') {
      ctx.fillRect(S.startX, S.startY, dx, dy);
    } else {
      ctx.strokeRect(S.startX, S.startY, dx, dy);
    }

  } else if (S.tool === 'circle') {
    const rx = Math.abs(dx) / 2;
    const ry = Math.abs(dy) / 2;
    const cx = S.startX + dx / 2;
    const cy = S.startY + dy / 2;
    ctx.beginPath();
    ctx.ellipse(cx, cy, rx || 1, ry || 1, 0, 0, Math.PI * 2);
    if (S.shapeMode === 'fill') ctx.fill();
    else ctx.stroke();
  }

  ctx.globalAlpha = 1;
}

function drawArrow(x1, y1, x2, y2) {
  const headLen = Math.max(10, S.size * 3);
  const angle   = Math.atan2(y2 - y1, x2 - x1);
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - headLen * Math.cos(angle - Math.PI / 6), y2 - headLen * Math.sin(angle - Math.PI / 6));
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - headLen * Math.cos(angle + Math.PI / 6), y2 - headLen * Math.sin(angle + Math.PI / 6));
  ctx.stroke();
}

// ── Flood Fill ───────────────────────────────────────────────
function floodFill(logX, logY, fillHex) {
  const physX = Math.round(logX * dpr);
  const physY = Math.round(logY * dpr);
  const W = canvas.width;
  const H = canvas.height;
  const imageData = ctx.getImageData(0, 0, W, H);
  const data = imageData.data;

  const r = parseInt(fillHex.slice(1,3), 16);
  const g = parseInt(fillHex.slice(3,5), 16);
  const b = parseInt(fillHex.slice(5,7), 16);
  const a = Math.round(S.opacity * 255);

  const baseIdx = (physY * W + physX) * 4;
  const tR = data[baseIdx], tG = data[baseIdx+1], tB = data[baseIdx+2], tA = data[baseIdx+3];

  if (tR === r && tG === g && tB === b && tA === a) return;

  const tolerance = 30;
  function matchTarget(idx) {
    return Math.abs(data[idx]-tR) <= tolerance &&
           Math.abs(data[idx+1]-tG) <= tolerance &&
           Math.abs(data[idx+2]-tB) <= tolerance &&
           Math.abs(data[idx+3]-tA) <= tolerance;
  }

  const visited = new Uint8Array(W * H);
  const stack   = [physX + physY * W];

  while (stack.length) {
    const p = stack.pop();
    if (visited[p]) continue;
    const px = p % W, py = Math.floor(p / W);
    if (px < 0 || px >= W || py < 0 || py >= H) continue;
    const idx = p * 4;
    if (!matchTarget(idx)) continue;

    visited[p] = 1;
    data[idx] = r; data[idx+1] = g; data[idx+2] = b; data[idx+3] = a;

    if (px + 1 < W) stack.push(p + 1);
    if (px - 1 >= 0) stack.push(p - 1);
    if (py + 1 < H) stack.push(p + W);
    if (py - 1 >= 0) stack.push(p - W);
  }

  ctx.putImageData(imageData, 0, 0);
}

// ── Text Tool ────────────────────────────────────────────────
function openTextModal(x, y) {
  S.textX = x; S.textY = y;
  document.getElementById('textModal').style.display = 'flex';
  document.getElementById('textInput').value = '';
  setTimeout(() => document.getElementById('textInput').focus(), 50);
}

function placeText(text) {
  if (!text.trim()) return;
  applyDrawStyle();
  ctx.font = `${Math.max(S.size * 4, 12)}px ${S.color === '#ffffff' ? 'monospace' : 'Inter, sans-serif'}`;
  ctx.fillText(text, S.textX, S.textY);
  ctx.globalAlpha = 1;
  updatePreview();
}

// ── Events ───────────────────────────────────────────────────
function onStart(e) {
  e.preventDefault();
  if (e.type === 'mousedown' && e.button !== 0) return;
  const pos = getPos(e);
  S.drawing = true;
  S.startX  = pos.x; S.startY = pos.y;
  S.lastX   = pos.x; S.lastY  = pos.y;

  if (S.tool === 'fill') {
    saveSnapshot();
    floodFill(pos.x, pos.y, S.color);
    S.drawing = false;
    updatePreview();
    return;
  }
  if (S.tool === 'text') {
    saveSnapshot();
    openTextModal(pos.x, pos.y);
    S.drawing = false;
    return;
  }

  saveSnapshot();
  S.snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);

  if (['pencil', 'brush', 'marker', 'eraser'].includes(S.tool)) {
    applyDrawStyle();
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, (S.tool === 'eraser' ? S.size*1.5 : S.size/2), 0, Math.PI*2);
    if (S.tool === 'eraser') {
      ctx.save();
      ctx.globalCompositeOperation = 'destination-out';
      ctx.globalAlpha = 1;
      ctx.fill();
      ctx.restore();
    } else {
      ctx.fill();
    }
  }
}

function onMove(e) {
  e.preventDefault();
  const pos = getPos(e);

  document.getElementById('statusCoords').textContent = `X: ${Math.round(pos.x)}  Y: ${Math.round(pos.y)}`;

  if (!S.drawing) return;

  if (S.tool === 'pencil' || S.tool === 'brush' || S.tool === 'marker') {
    drawFreehand(pos);
  } else if (S.tool === 'eraser') {
    drawEraser(pos);
  } else if (['line','arrow','rect','circle'].includes(S.tool)) {
    previewShape(pos);
  }
}

function onEnd(e) {
  if (!S.drawing) return;
  S.drawing  = false;
  S.snapshot = null;
  ctx.globalAlpha = 1;
  updatePreview();
}

canvas.addEventListener('mousedown', onStart);
canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mouseup',   onEnd);
canvas.addEventListener('mouseleave', onEnd);
canvas.addEventListener('touchstart', onStart, { passive: false });
canvas.addEventListener('touchmove',  onMove,  { passive: false });
canvas.addEventListener('touchend',   onEnd,   { passive: false });

// ── Keyboard Shortcuts ───────────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;

  const key = e.key.toLowerCase();
  const toolMap = { p:'pencil', b:'brush', m:'marker', x:'eraser', l:'line', r:'rect', e:'circle', t:'text', f:'fill' };

  if (toolMap[key]) { setTool(toolMap[key]); return; }

  if ((e.ctrlKey || e.metaKey) && key === 'z') { e.preventDefault(); if (e.shiftKey) redo(); else undo(); }
  if ((e.ctrlKey || e.metaKey) && key === 'y') { e.preventDefault(); redo(); }
});

// ── Tool Selection ───────────────────────────────────────────
const shapeTools = new Set(['line','arrow','rect','circle']);
const toolNames  = { pencil:'Pencil', brush:'Soft Brush', marker:'Marker', eraser:'Eraser', line:'Line', arrow:'Arrow', rect:'Rectangle', circle:'Ellipse', text:'Text', fill:'Fill' };

function setTool(name) {
  S.tool = name;
  document.querySelectorAll('.tool-btn').forEach(b => b.classList.toggle('active', b.dataset.tool === name));
  document.getElementById('statusTool').textContent = `Tool: ${toolNames[name] || name}`;
  const showShape = shapeTools.has(name) && name !== 'line' && name !== 'arrow';
  document.getElementById('shapeModeGroup').style.display = showShape ? 'flex' : 'none';
  document.getElementById('shapeModeSeperator').style.display = showShape ? 'block' : 'none';
  canvas.style.cursor = name === 'eraser' ? 'cell' : name === 'text' ? 'text' : name === 'fill' ? 'crosshair' : 'crosshair';
  updateBrushPreview();
}

document.querySelectorAll('.tool-btn').forEach(btn => {
  btn.addEventListener('click', () => setTool(btn.dataset.tool));
});

// ── Shape Mode ───────────────────────────────────────────────
document.querySelectorAll('.opt-mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    S.shapeMode = btn.dataset.mode;
    document.querySelectorAll('.opt-mode-btn').forEach(b => b.classList.toggle('active', b === btn));
  });
});

// ── Color ────────────────────────────────────────────────────
function setColor(hex) {
  S.color = hex;
  document.getElementById('toolColorInput').value     = hex;
  document.getElementById('toolFgSwatch').style.background  = hex;
  document.getElementById('panelColorPicker').value   = hex;
  document.getElementById('panelColorPreview').style.background = hex;
  document.querySelectorAll('.panel-swatch').forEach(s => s.classList.toggle('selected', s.dataset.color === hex));
  updateBrushPreview();
}

// Clicking a colour swatch opens the matching picker
document.getElementById('toolFgSwatch').addEventListener('click', () => document.getElementById('toolColorInput').click());
document.getElementById('panelColorPreview').addEventListener('click', () => document.getElementById('panelColorPicker').click());

['toolColorInput', 'panelColorPicker'].forEach(id => {
  document.getElementById(id).addEventListener('input', e => setColor(e.target.value));
});

document.querySelectorAll('.panel-swatch').forEach(sw => {
  sw.addEventListener('click', () => setColor(sw.dataset.color));
});

// ── Brush Size & Opacity ─────────────────────────────────────
function setSize(v) {
  S.size = parseInt(v);
  document.getElementById('optBrushSize').value       = v;
  document.getElementById('optBrushSizeVal').textContent = v + 'px';
  document.getElementById('panelBrushSize').value     = v;
  document.getElementById('panelBrushSizeVal').textContent = v;
  updateBrushPreview();
}

function setOpacity(v) {
  S.opacity = parseInt(v) / 100;
  document.getElementById('optOpacity').value         = v;
  document.getElementById('optOpacityVal').textContent = v + '%';
  document.getElementById('panelOpacity').value       = v;
  document.getElementById('panelOpacityVal').textContent = v + '%';
  updateBrushPreview();
}

document.getElementById('optBrushSize').addEventListener('input', e => setSize(e.target.value));
document.getElementById('panelBrushSize').addEventListener('input', e => setSize(e.target.value));
document.getElementById('optOpacity').addEventListener('input', e => setOpacity(e.target.value));
document.getElementById('panelOpacity').addEventListener('input', e => setOpacity(e.target.value));

// ── Brush Preview ────────────────────────────────────────────
function updateBrushPreview() {
  const bCtx = brushPrevCtx;
  const W = brushPrevCvs.width, H = brushPrevCvs.height;
  bCtx.clearRect(0, 0, W, H);
  bCtx.fillStyle = '#1f1f1f';
  bCtx.fillRect(0, 0, W, H);

  bCtx.globalAlpha  = S.opacity;
  bCtx.strokeStyle  = S.color || '#ffffff';
  bCtx.fillStyle    = S.color || '#ffffff';
  bCtx.lineCap      = 'round';

  let size = S.size;
  if (S.tool === 'brush')  size = S.size * 3;
  if (S.tool === 'marker') size = S.size * 2.5;
  if (S.tool === 'eraser') size = S.size * 3;

  size = Math.min(size, H * 0.8);
  bCtx.lineWidth = size;
  bCtx.beginPath();
  bCtx.moveTo(10, H / 2);
  bCtx.lineTo(W - 10, H / 2);
  bCtx.stroke();
  bCtx.globalAlpha = 1;
}

// ── Canvas Background ─────────────────────────────────────────
document.getElementById('optCanvasBg').addEventListener('change', (e) => {
  S.canvasBg = e.target.value;
  paintPaper();
  updatePreview();
});

// ── Undo / Redo / Clear buttons ───────────────────────────────
['optUndo','panelUndo'].forEach(id => document.getElementById(id)?.addEventListener('click', undo));
['optRedo','panelRedo'].forEach(id => document.getElementById(id)?.addEventListener('click', redo));
['optClear','panelClear'].forEach(id => document.getElementById(id)?.addEventListener('click', clearCanvas));

// ── Text Modal ────────────────────────────────────────────────
document.getElementById('textConfirmBtn').addEventListener('click', () => {
  placeText(document.getElementById('textInput').value);
  document.getElementById('textModal').style.display = 'none';
});
document.getElementById('textCancelBtn').addEventListener('click', () => {
  document.getElementById('textModal').style.display = 'none';
});
document.getElementById('textInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') document.getElementById('textConfirmBtn').click();
  if (e.key === 'Escape') document.getElementById('textCancelBtn').click();
});

// ── Sketch Preview Thumbnail ──────────────────────────────────
let previewTimeout;
function updatePreview() {
  clearTimeout(previewTimeout);
  previewTimeout = setTimeout(() => {
    const pW = previewCvs.width, pH = previewCvs.height;
    previewCtx.clearRect(0, 0, pW, pH);
    previewCtx.drawImage(flattenSketch(), 0, 0, pW, pH);
    scheduleSave();
  }, 200);
}

// ── Reference Photo ──────────────────────────────────────────
const refInput = document.getElementById('refPhotoInput');
document.getElementById('refPhotoBtn').addEventListener('click', () => refInput.click());
refInput.addEventListener('change', () => {
  const file = refInput.files && refInput.files[0];
  refInput.value = '';
  if (!file || !file.type.startsWith('image/')) return;
  const url = URL.createObjectURL(file);
  const img = new Image();
  img.onload = () => {
    saveSnapshot();
    const pad = 24;
    const s = Math.min((logW - pad * 2) / img.width, (logH - pad * 2) / img.height);
    const w = img.width * s, h = img.height * s;
    ctx.save();
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
    ctx.drawImage(img, (logW - w) / 2, (logH - h) / 2, w, h);
    ctx.restore();
    URL.revokeObjectURL(url);
    S.hasReference = true;
    updatePreview();
    showToast('Reference photo added. Draw or write on top of it.');
  };
  img.onerror = () => { URL.revokeObjectURL(url); showToast('Sorry, that image could not be opened.', true); };
  img.src = url;
});

// ── Templates ────────────────────────────────────────────────
document.querySelectorAll('.tpl-chip[data-template]').forEach(btn => {
  btn.addEventListener('click', () => applyTemplate(btn.dataset.template));
});

// ── Brand Colours ────────────────────────────────────────────
const brandWrap  = document.getElementById('brandColors');
const brandAdd   = document.getElementById('brandColorAdd');
const brandInput = document.getElementById('brandColorInput');
const MAX_BRAND_COLORS = 5;

function renderBrandColors() {
  brandWrap.querySelectorAll('.brand-chip').forEach(n => n.remove());
  brandColors.forEach((hex, i) => {
    const chip = document.createElement('span');
    chip.className = 'brand-chip';
    chip.innerHTML = `
      <button type="button" class="brand-chip__swatch" style="background:${hex}" title="Draw with ${hex.toUpperCase()}"></button>
      <span class="brand-chip__hex">${hex.toUpperCase()}</span>
      <button type="button" class="brand-chip__remove" aria-label="Remove ${hex.toUpperCase()}">×</button>`;
    chip.querySelector('.brand-chip__swatch').addEventListener('click', () => {
      setColor(hex);
      showToast(`Drawing with ${hex.toUpperCase()}`);
    });
    chip.querySelector('.brand-chip__remove').addEventListener('click', () => {
      brandColors.splice(i, 1);
      renderBrandColors();
      scheduleSave();
    });
    brandWrap.insertBefore(chip, brandAdd);
  });
  brandAdd.hidden = brandColors.length >= MAX_BRAND_COLORS;
}

brandAdd.addEventListener('click', () => {
  brandInput.value = S.color;
  brandInput.click();
});
brandInput.addEventListener('change', () => {
  const hex = brandInput.value.toLowerCase();
  if (!brandColors.includes(hex) && brandColors.length < MAX_BRAND_COLORS) {
    brandColors.push(hex);
    renderBrandColors();
    scheduleSave();
  }
});

// ── Brief Card (sketch + details band) ───────────────────────
function readForm() {
  const v = id => document.getElementById(id).value.trim();
  return { name: v('sName'), phone: v('sPhone'), email: v('sEmail'), service: v('sService'), desc: v('sDesc') };
}

function fitText(c, text, maxW) {
  if (c.measureText(text).width <= maxW) return text;
  while (text.length > 1 && c.measureText(text + '…').width > maxW) text = text.slice(0, -1);
  return text + '…';
}

function buildBriefCanvas(d) {
  const sketch = flattenSketch();
  const W = sketch.width, H = sketch.height;
  const k = Math.max(W / 1100, 0.6);
  const band = Math.round(150 * k);

  const out = document.createElement('canvas');
  out.width = W; out.height = H + band;
  const c = out.getContext('2d');
  c.drawImage(sketch, 0, 0);
  c.fillStyle = '#222222';
  c.fillRect(0, H, W, band);
  c.fillStyle = '#222222';
  c.fillRect(0, H, W, Math.max(3 * k, 2));

  const x = 36 * k;
  const swatchStep = 74 * k;
  const swatchArea = brandColors.length ? brandColors.length * swatchStep + 16 * k : 0;
  const maxText = W - x * 2 - swatchArea;
  const template = TEMPLATES[S.template];

  c.textAlign = 'left'; c.textBaseline = 'alphabetic';
  let y = H + 40 * k;
  c.fillStyle = '#d4d4d4';
  c.font = `700 ${13 * k}px "Space Grotesk", system-ui, sans-serif`;
  c.fillText('HAZELNART  ·  DESIGN BRIEF', x, y);

  y += 38 * k;
  c.fillStyle = '#ffffff';
  c.font = `700 ${28 * k}px "Inter Tight", Inter, system-ui, sans-serif`;
  c.fillText(fitText(c, d.name || 'My design idea', maxText), x, y);

  y += 28 * k;
  c.fillStyle = 'rgba(255,255,255,0.78)';
  c.font = `500 ${15 * k}px Inter, system-ui, sans-serif`;
  const line2 = [d.service, template && `${template.name} template`, S.hasReference && 'with reference photo'].filter(Boolean).join('  ·  ');
  c.fillText(fitText(c, line2 || 'Sketched in the Hazelnart Design Studio', maxText), x, y);

  y += 24 * k;
  c.fillStyle = 'rgba(255,255,255,0.5)';
  c.font = `500 ${13 * k}px Inter, system-ui, sans-serif`;
  const date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  c.fillText(fitText(c, [d.phone, d.email, date].filter(Boolean).join('  ·  '), maxText), x, y);

  if (brandColors.length) {
    const r = 19 * k;
    const cy = H + band / 2 - 6 * k;
    c.textAlign = 'center';
    c.font = `600 ${11 * k}px "Space Grotesk", system-ui, sans-serif`;
    brandColors.forEach((hex, i) => {
      const cx = W - x - swatchStep * (brandColors.length - 1 - i) - swatchStep / 2;
      c.beginPath(); c.arc(cx, cy, r, 0, Math.PI * 2);
      c.fillStyle = hex; c.fill();
      c.lineWidth = Math.max(2 * k, 1); c.strokeStyle = 'rgba(255,255,255,0.35)'; c.stroke();
      c.fillStyle = 'rgba(255,255,255,0.7)';
      c.fillText(hex.toUpperCase(), cx, cy + r + 18 * k);
    });
  }
  return out;
}

const canvasToBlob = cvs => new Promise(res => cvs.toBlob(res, 'image/png'));

function briefFileName(d) {
  const slug = (d.name || 'idea').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return `hazelnart-brief-${slug || 'idea'}.png`;
}

function downloadCanvas(cvs, filename) {
  const link = document.createElement('a');
  link.download = filename;
  link.href = cvs.toDataURL('image/png');
  link.click();
}

function downloadSketch() {
  const d = readForm();
  downloadCanvas(buildBriefCanvas(d), briefFileName(d));
}

document.getElementById('downloadBtn').addEventListener('click', downloadSketch);

// Copy the image so it can be pasted straight into WhatsApp Web / Desktop or an email.
// Called straight from the click, before anything else takes focus.
async function copyImage(blobPromise) {
  try {
    if (!navigator.clipboard || !navigator.clipboard.write || !window.ClipboardItem) return false;
    await navigator.clipboard.write([new ClipboardItem({ 'image/png': blobPromise })]);
    return true;
  } catch (e) {
    return false;
  }
}

// ── Form Validation ──────────────────────────────────────────
function validateForm() {
  const d = readForm();
  if (!d.name)    { showToast('Please enter your name.', true); document.getElementById('sName').focus(); return null; }
  if (!d.phone)   { showToast('Please enter your WhatsApp number.', true); document.getElementById('sPhone').focus(); return null; }
  if (!d.service) { showToast('Please select a service.', true); document.getElementById('sService').focus(); return null; }
  if (!d.desc)    { showToast('Please describe your idea.', true); document.getElementById('sDesc').focus(); return null; }
  return d;
}

function buildMessage(d, channel) {
  const b = label => channel === 'whatsapp' ? `*${label}:*` : `${label}:`;
  const template = TEMPLATES[S.template];
  return [
    channel === 'whatsapp'
      ? `Hi Hazelnart! 👋 I've sketched my design idea and I'd love a quote.`
      : `Hi Hazelnart,\n\nI've sketched my design idea and would love to discuss it with you.`,
    ``,
    `${b('Name')} ${d.name}`,
    `${b('Phone / WhatsApp')} ${d.phone}`,
    d.email ? `${b('Email')} ${d.email}` : null,
    `${b('Service')} ${d.service}`,
    template ? `${b('Template')} ${template.name}` : null,
    brandColors.length ? `${b('Brand colours')} ${brandColors.map(c => c.toUpperCase()).join(', ')}` : null,
    ``,
    b('My idea'),
    d.desc,
    ``,
    `(My sketch is attached as an image: ${briefFileName(d)})`,
    channel === 'email' ? `\nLooking forward to hearing from you!\n${d.name}` : null,
  ].filter(l => l !== null).join('\n');
}

// ── Send Modal ───────────────────────────────────────────────
const sendModal = document.getElementById('sendModal');
const isTouch   = window.matchMedia('(pointer: coarse)').matches;

function openSendModal({ title, sub, preview, steps, actions }) {
  document.getElementById('sendModalTitle').textContent = title;
  document.getElementById('sendModalSub').textContent   = sub || '';
  document.getElementById('sendModalPreview').src       = preview;
  document.getElementById('sendModalSteps').innerHTML   = steps.map(s => `<li>${s}</li>`).join('');
  const actWrap = document.getElementById('sendModalActions');
  actWrap.innerHTML = '';
  actions.forEach(a => {
    const el = document.createElement(a.href ? 'a' : 'button');
    el.className = `btn ${a.cls || 'btn--ghost'}`;
    el.innerHTML = a.label;
    if (a.href) {
      el.href = a.href;
      if (a.newTab) { el.target = '_blank'; el.rel = 'noopener'; }
    } else {
      el.type = 'button';
    }
    if (a.onClick) el.addEventListener('click', a.onClick);
    actWrap.appendChild(el);
  });
  sendModal.hidden = false;
  document.body.style.overflow = 'hidden';
  document.getElementById('sendModalClose').focus();
}

function closeSendModal() {
  sendModal.hidden = true;
  document.body.style.overflow = '';
}

document.getElementById('sendModalClose').addEventListener('click', closeSendModal);
sendModal.addEventListener('click', e => { if (e.target === sendModal) closeSendModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !sendModal.hidden) closeSendModal(); });

const KEY_PASTE = /Mac|iPhone|iPad/.test(navigator.platform || '')
  ? '<kbd>⌘</kbd> + <kbd>V</kbd>' : '<kbd>Ctrl</kbd> + <kbd>V</kbd>';

async function sendBrief() {
  const d = validateForm(); if (!d) return;

  const brief    = buildBriefCanvas(d);
  const blobP    = canvasToBlob(brief);
  const fileName = briefFileName(d);
  const preview  = brief.toDataURL('image/jpeg', 0.85);
  const waUrl    = `https://wa.me/${HAZELNART_PHONE}?text=${encodeURIComponent(buildMessage(d, 'whatsapp'))}`;

  // Phones: two taps: start the chat with the details, then share the image into it
  if (isTouch && navigator.canShare) {
    const file = new File([await blobP], fileName, { type: 'image/png' });
    if (navigator.canShare({ files: [file] })) {
      openSendModal({
        title: 'Your brief is ready',
        sub: "Two quick taps and it's with our team.",
        preview,
        steps: [
          'Tap <b>Open chat</b> and send the message with your details.',
          'Come back here, tap <b>Share sketch</b> and choose WhatsApp, then the Hazelnart chat.',
        ],
        actions: [
          { label: 'Open chat', href: waUrl, newTab: true, cls: 'btn--whatsapp' },
          { label: 'Share sketch', cls: 'btn--gold', onClick: async () => {
              try { await navigator.share({ files: [file], title: 'My design brief for Hazelnart' }); showToast('Sketch shared ✓'); }
              catch (err) { if (err.name !== 'AbortError') { downloadCanvas(brief, fileName); showToast('Sketch downloaded. Attach it in the chat.'); } }
            } },
        ],
      });
      return;
    }
  }

  // Desktop: copy the image so it can be pasted into the chat
  const copied = await copyImage(blobP);
  if (!copied) downloadCanvas(brief, fileName);

  openSendModal({
    title: copied ? 'Sketch copied, almost there!' : 'Your brief is ready',
    sub: 'Your details are already typed into the message.',
    preview,
    steps: [
      'Click <b>Open WhatsApp</b> (WhatsApp Web or the desktop app).',
      copied
        ? `In the chat, press ${KEY_PASTE} to paste your sketch. It's already copied.`
        : `Attach <b>${fileName}</b> from your Downloads using the 📎 button.`,
      "Hit send and we'll reply with ideas and a free quote.",
    ],
    actions: [
      { label: 'Open WhatsApp', href: waUrl, newTab: true, cls: 'btn--whatsapp' },
      { label: 'Download image', onClick: () => downloadCanvas(brief, fileName) },
    ],
  });
}

// Straight to the company inbox in the background,
// no email app, no visible address
const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

async function sendBriefToInbox() {
  const d = validateForm(); if (!d) return;
  if (!window.HazelnartForms) { showToast('Sending is unavailable right now. Please use WhatsApp.', true); return; }

  const btn = document.getElementById('sendEmailBtn');
  const label = btn.querySelector('span');
  btn.disabled = true;
  label.textContent = 'Sending…';

  const brief    = buildBriefCanvas(d);
  const fileName = briefFileName(d);
  const blob     = await canvasToBlob(brief);
  const template = TEMPLATES[S.template];

  const res = await window.HazelnartForms.submit({
    'WhatsApp / Phone': d.phone,
    'Name': d.name,
    'Service': d.service,
    'Email': d.email,
    'Template': template ? template.name : '',
    'Brand colours': brandColors.map(c => c.toUpperCase()).join(', '),
    'Idea': d.desc,
    'Sent from': 'Website design studio',
  }, {
    subject: `Design brief: ${d.service} from ${d.name}`,
    replyTo: d.email,
    honeypot: document.getElementById('sWebsite')?.value,
    files: [{ blob, name: fileName }],
  });

  btn.disabled = false;
  label.textContent = 'Email It To Us';
  if (res.ok) {
    showSentModal({ phone: d.phone, attached: res.attached });
    ['sName', 'sPhone', 'sEmail', 'sDesc'].forEach(id => { document.getElementById(id).value = ''; });
    saveSession();
    return;
  }

  showToast(res.message, true);
  if (res.reason === 'failed') sendBrief();   // fall back to the WhatsApp flow
}

function showSentModal({ phone, attached } = {}) {
  openSendModal({
    title: 'Sent! Your brief is with our team',
    sub: attached ? 'Your sketch and details arrived in our inbox.' : 'Your details arrived in our inbox.',
    preview: buildBriefCanvas(readForm()).toDataURL('image/jpeg', 0.85),
    steps: [
      'Our designers review your sketch and brief.',
      `We reach out on WhatsApp${phone ? ` at <b>${escapeHtml(phone)}</b>` : ''} with ideas and a free quote.`,
    ],
    actions: [
      { label: 'Keep sketching', cls: 'btn--gold', onClick: closeSendModal },
    ],
  });
}

document.getElementById('sendWhatsappBtn').addEventListener('click', () => sendBrief());
document.getElementById('sendEmailBtn').addEventListener('click', sendBriefToInbox);

// ── Autosave (this device only) ──────────────────────────────
const SAVE_KEY = 'hazelnart-studio-v1';
const FORM_IDS = ['sName', 'sPhone', 'sEmail', 'sService', 'sDesc'];
const PAPERS   = ['white', 'cream', 'dark', 'grid', 'dots'];
let saveTimer;
let restoring = false;

function scheduleSave() {
  if (restoring) return;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveSession, 700);
}

function saveSession() {
  const state = {
    bg: S.canvasBg, template: S.template, hasReference: S.hasReference,
    brandColors, form: readForm(), img: null,
  };
  try {
    if (S.dirty) state.img = canvas.toDataURL('image/png');
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  } catch (e) {
    // Too big for storage: fall back to a flattened JPEG
    try {
      state.img = flattenSketch().toDataURL('image/jpeg', 0.8);
      localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    } catch (e2) { /* storage unavailable: nothing to do */ }
  }
}

function restoreSession() {
  let st = null;
  try { st = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null'); } catch (e) { return; }
  if (!st) return;
  restoring = true;

  if (st.form) {
    document.getElementById('sName').value    = st.form.name    || '';
    document.getElementById('sPhone').value   = st.form.phone   || '';
    document.getElementById('sEmail').value   = st.form.email   || '';
    document.getElementById('sService').value = st.form.service || '';
    document.getElementById('sDesc').value    = st.form.desc    || '';
  }
  brandColors = Array.isArray(st.brandColors)
    ? st.brandColors.filter(c => /^#[0-9a-f]{6}$/i.test(c)).slice(0, MAX_BRAND_COLORS)
    : [];
  renderBrandColors();

  if (PAPERS.includes(st.bg)) {
    S.canvasBg = st.bg;
    document.getElementById('optCanvasBg').value = st.bg;
    paintPaper();
  }
  S.template     = TEMPLATES[st.template] ? st.template : 'blank';
  S.hasReference = !!st.hasReference;
  setTemplateChip(S.template);

  if (st.img) {
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, logW, logH);
      S.dirty = true;
      restoring = false;
      updatePreview();
      showToast('Welcome back! Your last sketch was restored.');
    };
    img.onerror = () => { restoring = false; };
    img.src = st.img;
  } else {
    restoring = false;
  }
}

FORM_IDS.forEach(id => document.getElementById(id).addEventListener('input', scheduleSave));
document.getElementById('sService').addEventListener('change', scheduleSave);

// ── Toast ─────────────────────────────────────────────────────
function showToast(msg, isError = false) {
  const t = document.getElementById('studioToast');
  t.textContent = msg;
  t.className   = 'studio-toast' + (isError ? ' error' : '');
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ── Top navigation shadow on scroll ──────────────────────────
const topnav = document.getElementById('topnav');
const navShadow = () => topnav?.classList.toggle('is-scrolled', window.scrollY > 8);
window.addEventListener('scroll', navShadow, { passive: true });
navShadow();

// ── Page transition (same curtain as the main site) ──────────
window.addEventListener('pageshow', e => { if (e.persisted) document.body.classList.remove('is-leaving'); });
document.addEventListener('click', e => {
  const a = e.target.closest('a[href]');
  if (!a || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  if ((a.target && a.target !== '_self') || a.hasAttribute('download')) return;
  const url = new URL(a.href, location.href);
  if (url.origin !== location.origin || !/\.html$|\/$/.test(url.pathname) || url.pathname === location.pathname) return;
  e.preventDefault();
  document.body.classList.add('is-leaving');
  setTimeout(() => { location.href = url.href; }, 300);
});

// ── Mobile Nav (same script as main site) ────────────────────
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

function openMenu() { mobileMenu.classList.add('open'); document.body.style.overflow = 'hidden'; hamburger.setAttribute('aria-expanded','true'); }
function closeMenu(){ mobileMenu.classList.remove('open'); document.body.style.overflow = ''; hamburger.setAttribute('aria-expanded','false'); }

hamburger?.addEventListener('click', openMenu);
mobileClose?.addEventListener('click', closeMenu);
mobileMenu?.querySelectorAll('.mobile-menu__link').forEach(l => l.addEventListener('click', closeMenu));

// ── Cursor ───────────────────────────────────────────────────
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
document.addEventListener('mousemove', (e) => {
  cursor.style.left     = e.clientX + 'px';
  cursor.style.top      = e.clientY + 'px';
  cursorRing.style.left = e.clientX + 'px';
  cursorRing.style.top  = e.clientY + 'px';
});

// ── Back to top ───────────────────────────────────────────────
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => backTop.classList.toggle('show', window.scrollY > 400));
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── Scroll reveal ─────────────────────────────────────────────
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('revealed'); revealObs.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ── Year ──────────────────────────────────────────────────────
document.getElementById('yr').textContent = new Date().getFullYear();

// ── Init ──────────────────────────────────────────────────────
window.addEventListener('load', () => {
  initCanvas();
  restoreSession();
  updateBrushPreview();
  updatePreview();
  setColor('#000000');
  setSize(4);
  setOpacity(100);
});

// Debounced resize
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const saved = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const oldW = canvas.width, oldH = canvas.height;

    const outer = document.getElementById('canvasOuter');
    const newLogW = Math.max(outer.clientWidth - 64, 300);
    const newLogH = Math.max(outer.clientHeight - 32, 300);

    if (newLogW === logW && newLogH === logH) return;

    logW = newLogW; logH = newLogH;
    canvas.style.width  = newLogW + 'px';
    canvas.style.height = newLogH + 'px';
    canvas.width  = newLogW * dpr;
    canvas.height = newLogH * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    fillBg();
    const tmp = document.createElement('canvas');
    tmp.width = oldW; tmp.height = oldH;
    tmp.getContext('2d').putImageData(saved, 0, 0);
    ctx.drawImage(tmp, 0, 0, newLogW, newLogH);

    document.getElementById('statusSize').textContent = `Canvas: ${newLogW} × ${newLogH} px`;
    updatePreview();
  }, 200);
});
