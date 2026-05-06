/**
 * Sweet Rain — game.js
 * Click / tap sweets to eat them and earn coins!
 */

'use strict';

// ── Sweet definitions ──────────────────────────────────────────────────────
const SWEETS = {
  lolly:    { emoji: '🍭', baseSize: 32, points: 1 },
  candy:    { emoji: '🍬', baseSize: 28, points: 1 },
  choc:     { emoji: '🍫', baseSize: 30, points: 2 },
  icecream: { emoji: '🍦', baseSize: 34, points: 3 },
  donut:    { emoji: '🍩', baseSize: 32, points: 2 },
  cake:     { emoji: '🎂', baseSize: 38, points: 5 },
};

// ── State ──────────────────────────────────────────────────────────────────
const canvas  = document.getElementById('gameCanvas');
const ctx     = canvas.getContext('2d');
const scoreEl = document.getElementById('scoreVal');
const comboEl = document.getElementById('combo');
const msgEl   = document.getElementById('msg');

let W, H;
let drops          = [];
let particles      = [];
let floatingTexts  = [];
let raining        = false;
let spawnInterval  = null;
let score          = 0;
let combo          = 0;
let comboTimeout   = null;
let mouseX         = -300;
let mouseY         = -300;
let mouthOpen      = 0;   // 0–1 animation value
let activeSweets   = new Set(Object.keys(SWEETS));

// Starfield
const stars = Array.from({ length: 100 }, () => ({
  x: Math.random(),
  y: Math.random(),
  r: rand(0.5, 2.2),
  phase: rand(0, Math.PI * 2),
}));

// ── Helpers ───────────────────────────────────────────────────────────────
function rand(a, b) { return a + Math.random() * (b - a); }

function resize() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

// ── Drop factory ─────────────────────────────────────────────────────────
function spawnDrop() {
  const keys = [...activeSweets];
  if (!keys.length) return;
  const key = keys[Math.floor(Math.random() * keys.length)];
  const s   = SWEETS[key];
  drops.push({
    key,
    emoji:  s.emoji,
    size:   s.baseSize * rand(0.75, 1.5),
    points: s.points,
    x:      rand(20, W - 20),
    y:      -60,
    vx:     rand(-0.8, 0.8),
    vy:     rand(1.2, 3.2),
    rot:    rand(0, Math.PI * 2),
    rotV:   rand(-0.05, 0.05),
    eaten:  false,
    opacity: 1,
  });
}

// ── Eat action ────────────────────────────────────────────────────────────
function eatAt(cx, cy) {
  let ateAny = false;

  drops.forEach(d => {
    if (d.eaten) return;
    if (Math.hypot(d.x - cx, d.y - cy) > d.size * 0.9 + 30) return;

    d.eaten = true;
    ateAny  = true;
    combo++;
    clearTimeout(comboTimeout);
    comboTimeout = setTimeout(() => { combo = 0; }, 1600);

    const multiplier = combo >= 10 ? 4 : combo >= 5 ? 3 : combo >= 3 ? 2 : 1;
    const pts = d.points * multiplier;
    score += pts;
    scoreEl.textContent = score;

    spawnParticles(d.x, d.y, d.emoji);

    const label = multiplier > 1
      ? `+${pts} ×${combo}${combo >= 10 ? '🔥' : '⚡'}`
      : `+${pts}`;
    const colour = multiplier >= 4 ? '#ff4' : multiplier >= 3 ? '#f90' : multiplier >= 2 ? '#6f6' : '#fff';
    addFloatingText(d.x, d.y - 20, label, colour);

    mouthOpen = 1;
  });

  if (combo >= 3) showCombo();
  return ateAny;
}

function showCombo() {
  comboEl.textContent =
    combo >= 10 ? `🔥 MEGA x${combo}!!` :
    combo >= 5  ? `⚡ COMBO x${combo}!`  :
                  `x${combo}!`;
  comboEl.style.opacity = 1;
  clearTimeout(comboEl._t);
  comboEl._t = setTimeout(() => { comboEl.style.opacity = 0; }, 900);
}

// ── Particles ─────────────────────────────────────────────────────────────
function spawnParticles(x, y, emoji) {
  for (let i = 0; i < 10; i++) {
    const angle = (Math.PI * 2 / 10) * i + rand(-0.25, 0.25);
    const speed = rand(2.5, 7);
    particles.push({
      x, y, emoji,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
      size: rand(14, 24),
    });
  }
}

function addFloatingText(x, y, text, color) {
  floatingTexts.push({ x, y, text, color, life: 1, vy: -2.2 });
}

// ── Draw helpers ──────────────────────────────────────────────────────────
function drawBackground() {
  ctx.fillStyle = '#0e0022';
  ctx.fillRect(0, 0, W, H);
  stars.forEach(s => {
    s.phase += 0.018;
    const alpha = 0.3 + 0.6 * (0.5 + 0.5 * Math.sin(s.phase));
    ctx.beginPath();
    ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(2)})`;
    ctx.fill();
  });
}

function drawMouth(x, y, openAmt) {
  const r  = 30;
  const op = Math.min(1, Math.max(0, openAmt));

  ctx.save();
  ctx.translate(x, y);

  // Face circle
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fillStyle = '#ffe0b2';
  ctx.fill();
  ctx.strokeStyle = '#d4842a';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Eyes
  [[-11, -9], [11, -9]].forEach(([ex, ey]) => {
    ctx.beginPath();
    ctx.arc(ex, ey, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#2a1a00';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(ex + 1.2, ey - 1.2, 1.4, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
  });

  // Cheeks
  [[-17, 2], [17, 2]].forEach(([cx2, cy2]) => {
    ctx.beginPath();
    ctx.arc(cx2, cy2, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,140,100,0.4)';
    ctx.fill();
  });

  // Open mouth
  const mouthH = op * 14;
  ctx.beginPath();
  ctx.ellipse(0, 12, 16, Math.max(2, mouthH), 0, 0, Math.PI * 2);
  ctx.fillStyle = op > 0.1 ? '#8b0020' : '#d4842a';
  ctx.fill();

  // Teeth when open
  if (op > 0.25) {
    ctx.fillStyle = '#fff';
    const tw = 9, th = Math.min(mouthH * 0.55, 7);
    [-12, -3, 6].forEach(tx => {
      ctx.fillRect(tx, 10, tw, th);
    });
  }

  ctx.restore();
}

// ── Main game loop ────────────────────────────────────────────────────────
function loop() {
  requestAnimationFrame(loop);
  drawBackground();

  // --- Drops ---
  drops = drops.filter(d => d.y < H + 100 && d.opacity > 0.02);
  drops.forEach(d => {
    if (d.eaten) {
      d.opacity -= 0.1;
      d.vy      -= 0.6;
    } else {
      d.y   += d.vy;
      d.x   += d.vx;
      d.rot += d.rotV;
      d.vy  += 0.035; // gravity
    }
    ctx.save();
    ctx.globalAlpha = d.opacity;
    ctx.translate(d.x, d.y);
    ctx.rotate(d.rot);
    ctx.font = `${Math.round(d.size)}px serif`;
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(d.emoji, 0, 0);
    ctx.restore();
  });

  // --- Particles ---
  particles = particles.filter(p => p.life > 0);
  particles.forEach(p => {
    p.x    += p.vx;
    p.y    += p.vy;
    p.vy   += 0.3;
    p.life -= 0.04;
    ctx.save();
    ctx.globalAlpha  = p.life;
    ctx.font         = `${Math.round(p.size)}px serif`;
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(p.emoji, p.x, p.y);
    ctx.restore();
  });

  // --- Floating score texts ---
  floatingTexts = floatingTexts.filter(f => f.life > 0);
  floatingTexts.forEach(f => {
    f.y    += f.vy;
    f.life -= 0.022;
    ctx.save();
    ctx.globalAlpha = f.life;
    ctx.font        = 'bold 18px Segoe UI, sans-serif';
    ctx.textAlign   = 'center';
    ctx.fillStyle   = f.color;
    ctx.shadowColor = 'rgba(0,0,0,0.6)';
    ctx.shadowBlur  = 4;
    ctx.fillText(f.text, f.x, f.y);
    ctx.restore();
  });

  // --- Mouth cursor ---
  if (mouthOpen > 0) mouthOpen = Math.max(0, mouthOpen - 0.07);
  drawMouth(mouseX, mouseY, mouthOpen);
}

// ── Input ─────────────────────────────────────────────────────────────────
canvas.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

canvas.addEventListener('click', e => {
  eatAt(e.clientX, e.clientY);
});

canvas.addEventListener('touchstart', e => {
  e.preventDefault();
  for (const t of e.touches) {
    mouseX = t.clientX;
    mouseY = t.clientY;
    eatAt(t.clientX, t.clientY);
  }
}, { passive: false });

canvas.addEventListener('touchmove', e => {
  if (e.touches.length) {
    mouseX = e.touches[0].clientX;
    mouseY = e.touches[0].clientY;
  }
}, { passive: true });

// ── Controls ──────────────────────────────────────────────────────────────
document.getElementById('btnRain').addEventListener('click', startRain);
document.getElementById('btnStop').addEventListener('click', stopRain);

function startRain() {
  if (raining) return;
  raining = true;
  document.getElementById('btnStop').disabled = false;
  spawnInterval = setInterval(() => {
    for (let i = 0; i < 3; i++) spawnDrop();
  }, 280);
}

function stopRain() {
  raining = false;
  clearInterval(spawnInterval);
  spawnInterval = null;
  document.getElementById('btnStop').disabled = true;
}

// Sweet filter toggles
document.querySelectorAll('.sweet-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const k = btn.dataset.sweet;
    if (activeSweets.has(k)) {
      if (activeSweets.size === 1) return; // keep at least one
      activeSweets.delete(k);
      btn.classList.remove('active');
    } else {
      activeSweets.add(k);
      btn.classList.add('active');
    }
  });
});

// ── Instructions overlay ──────────────────────────────────────────────────
document.getElementById('btnStart').addEventListener('click', () => {
  document.getElementById('instructions').style.display = 'none';
});

// ── Kick off ──────────────────────────────────────────────────────────────
loop();
