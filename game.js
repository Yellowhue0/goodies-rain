/**
 * Sweet Rain — game.js
 * Click / tap sweets to eat them and earn coins!
 */

'use strict';

// ── Sweet definitions ──────────────────────────────────────────────────────
const SWEETS = {
  lolly:        { baseSize: 32, points: 1, draw: drawLolly },
  candy:        { baseSize: 28, points: 1, draw: drawCandy },
  choc:         { baseSize: 30, points: 2, draw: drawChocolate },
  icecream:     { baseSize: 34, points: 3, draw: drawIceCream },
  donut:        { baseSize: 32, points: 2, draw: drawDonut },
  gummy:        { baseSize: 28, points: 2, draw: drawGummyBear },
  licorice:     { baseSize: 36, points: 1, draw: drawLicorice },
  sour:         { baseSize: 26, points: 2, draw: drawSourGummy },
  marshmallow:  { baseSize: 30, points: 2, draw: drawMarshmallow },
  toffee:       { baseSize: 28, points: 3, draw: drawToffee },
  fruitgum:     { baseSize: 24, points: 1, draw: drawFruitGum },
  colabot:      { baseSize: 22, points: 1, draw: drawColaBottle },
  cherrystrip:  { baseSize: 30, points: 1, draw: drawCherryStrip },
  berrygum:     { baseSize: 25, points: 1, draw: drawBerryGum },
  saltcaramel:  { baseSize: 26, points: 3, draw: drawSaltCaramel },
  darkchoc:     { baseSize: 28, points: 2, draw: drawDarkChocolate },
  whitechoc:    { baseSize: 28, points: 2, draw: drawWhiteChocolate },
  peppermint:   { baseSize: 24, points: 1, draw: drawPeppermint },
  haribo:       { baseSize: 26, points: 2, draw: drawHaribo },
  salixtw:      { baseSize: 32, points: 1, draw: drawSalixTwist },
  butterscotch: { baseSize: 26, points: 2, draw: drawButterscotch },
  nougat:       { baseSize: 28, points: 2, draw: drawNougat },
  praline:      { baseSize: 30, points: 3, draw: drawPraline },
  fizzy:        { baseSize: 24, points: 2, draw: drawFizzy },
  strawberry:   { baseSize: 26, points: 1, draw: drawStrawberry },
  raspberry:    { baseSize: 24, points: 1, draw: drawRaspberry },
  lemon:        { baseSize: 24, points: 1, draw: drawLemon },
  orange:       { baseSize: 26, points: 1, draw: drawOrange },
  watermelon:   { baseSize: 28, points: 1, draw: drawWatermelon },
  grape:        { baseSize: 24, points: 1, draw: drawGrape },
  mango:        { baseSize: 25, points: 1, draw: drawMango },
  pineapple:    { baseSize: 26, points: 1, draw: drawPineapple },
  bubblegum:    { baseSize: 28, points: 2, draw: drawBubbleGum },
  softcandy:    { baseSize: 26, points: 1, draw: drawSoftCandy },
  sugarcrystal: { baseSize: 22, points: 1, draw: drawSugarCrystal },
};

// ── Sweet drawing functions ────────────────────────────────────────────────
function drawLolly(ctx, size) {
  const r = size * 0.4;

  // Lolly body with gradient
  const grad = ctx.createRadialGradient(-r * 0.3, -r * 0.3, 0, 0, 0, r);
  grad.addColorStop(0, '#ff5fc4');
  grad.addColorStop(0.7, '#ff1493');
  grad.addColorStop(1, '#c71670');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();

  // Highlight
  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  ctx.beginPath();
  ctx.arc(-r * 0.4, -r * 0.4, r * 0.3, 0, Math.PI * 2);
  ctx.fill();

  // Edge shadow
  ctx.strokeStyle = '#a01050';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Stick
  ctx.fillStyle = '#d4a574';
  ctx.shadowColor = 'rgba(0,0,0,0.5)';
  ctx.shadowBlur = 3;
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;
  ctx.fillRect(-r * 0.15, r, r * 0.3, r * 1.3);
  ctx.shadowColor = 'transparent';
}

function drawCandy(ctx, size) {
  const r = size * 0.35;

  // Candy body with gradient
  const grad = ctx.createLinearGradient(-r, 0, r, 0);
  grad.addColorStop(0, '#ffb6c1');
  grad.addColorStop(0.5, '#ffc0cb');
  grad.addColorStop(1, '#ff99aa');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.ellipse(0, 0, r * 1.2, r * 0.8, Math.PI * 0.15, 0, Math.PI * 2);
  ctx.fill();

  // Shiny highlight
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.beginPath();
  ctx.ellipse(-r * 0.4, -r * 0.2, r * 0.35, r * 0.25, 0, 0, Math.PI * 2);
  ctx.fill();

  // Edge
  ctx.strokeStyle = '#ff6b8f';
  ctx.lineWidth = 1.5;
  ctx.stroke();
}

function drawChocolate(ctx, size) {
  const w = size * 0.5, h = size * 0.6;

  // Main body with gradient
  const grad = ctx.createLinearGradient(-w, -h, w, h);
  grad.addColorStop(0, '#8b5a3c');
  grad.addColorStop(0.5, '#6b4423');
  grad.addColorStop(1, '#4a2511');
  ctx.fillStyle = grad;
  ctx.fillRect(-w, -h, w * 2, h * 2);

  // Edge highlight
  ctx.strokeStyle = '#9b6a4c';
  ctx.lineWidth = 2;
  ctx.strokeRect(-w, -h, w * 2, h * 2);

  // Chocolate squares
  ctx.fillStyle = '#5a3421';
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      const x = -w + 5 + i * 8;
      const y = -h + 3 + j * 10;
      ctx.fillRect(x, y, 4, 5);
      ctx.fillStyle = 'rgba(255,255,255,0.15)';
      ctx.fillRect(x, y, 2, 2);
      ctx.fillStyle = '#5a3421';
    }
  }

  // Top shine
  ctx.fillStyle = 'rgba(255,255,255,0.25)';
  ctx.fillRect(-w + 2, -h + 2, w * 1.5, h * 0.3);
}

function drawIceCream(ctx, size) {
  const coneH = size * 0.7, r = size * 0.35;

  // Cone with pattern
  const grad = ctx.createLinearGradient(-r, 0, r, coneH);
  grad.addColorStop(0, '#d4a85c');
  grad.addColorStop(1, '#a0743d');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.moveTo(-r, 0);
  ctx.lineTo(r, 0);
  ctx.lineTo(0, coneH);
  ctx.fill();

  // Cone crosshatch pattern
  ctx.strokeStyle = '#8b6914';
  ctx.lineWidth = 1;
  for (let i = 0; i < 5; i++) {
    const x = -r + (r * 2 / 5) * i;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x - coneH * 0.3, coneH);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + coneH * 0.3, coneH);
    ctx.stroke();
  }

  // Ice cream scoop with gradient
  const scoopGrad = ctx.createRadialGradient(-r * 0.2, -r * 0.7, r * 0.2, 0, -r * 0.5, r);
  scoopGrad.addColorStop(0, '#fffacd');
  scoopGrad.addColorStop(0.6, '#fff8dc');
  scoopGrad.addColorStop(1, '#f0e68c');
  ctx.fillStyle = scoopGrad;
  ctx.beginPath();
  ctx.arc(0, -r * 0.5, r, 0, Math.PI * 2);
  ctx.fill();

  // Scoop highlight
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  ctx.beginPath();
  ctx.arc(-r * 0.3, -r * 0.8, r * 0.25, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = '#e0d070';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(0, -r * 0.5, r, 0, Math.PI * 2);
  ctx.stroke();
}

function drawDonut(ctx, size) {
  const outer = size * 0.45, inner = size * 0.2;

  // Donut body with gradient
  const grad = ctx.createRadialGradient(-outer * 0.3, -outer * 0.3, 0, 0, 0, outer);
  grad.addColorStop(0, '#e6c200');
  grad.addColorStop(0.7, '#daa520');
  grad.addColorStop(1, '#a87c04');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, outer, 0, Math.PI * 2);
  ctx.fill();

  // Hole
  ctx.fillStyle = '#0e0022';
  ctx.beginPath();
  ctx.arc(0, 0, inner, 0, Math.PI * 2);
  ctx.fill();

  // Top shine on donut
  ctx.fillStyle = 'rgba(255,255,255,0.35)';
  ctx.beginPath();
  ctx.arc(-outer * 0.4, -outer * 0.4, outer * 0.4, 0, Math.PI * 2);
  ctx.fill();

  // Sprinkles
  ctx.shadowColor = 'rgba(0,0,0,0.4)';
  ctx.shadowBlur = 2;
  for (let i = 0; i < 12; i++) {
    const angle = (Math.PI * 2 / 12) * i;
    const x = Math.cos(angle) * (outer + inner) * 0.55;
    const y = Math.sin(angle) * (outer + inner) * 0.55;
    const colors = ['#ff6347', '#ff4500', '#ff8c00', '#ffd700'];
    ctx.fillStyle = colors[i % colors.length];
    ctx.fillRect(x - 2, y - 2, 4, 4);
  }
  ctx.shadowColor = 'transparent';

  // Edge shadow
  ctx.strokeStyle = '#8b5c00';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(0, 0, outer, 0, Math.PI * 2);
  ctx.stroke();
}

function drawGummyBear(ctx, size) {
  const r = size * 0.4;
  const colors = ['#ff1493', '#ffd700', '#00d4ff', '#00ff00', '#ff6347', '#9932cc'];
  const colorIndex = Math.floor(Math.random() * colors.length);
  const color = colors[colorIndex];

  // Get darker shade for edge
  const darker = {
    '#ff1493': '#c70d6f',
    '#ffd700': '#daa500',
    '#00d4ff': '#0099cc',
    '#00ff00': '#00cc00',
    '#ff6347': '#cc3d28',
    '#9932cc': '#7a2a9f'
  };

  // Gummy bear body with radial gradient
  const grad = ctx.createRadialGradient(-r * 0.3, -r * 0.3, 0, 0, 0, r);
  grad.addColorStop(0, color);
  grad.addColorStop(0.7, color);
  grad.addColorStop(1, darker[color]);
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();

  // Glossy highlight
  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  ctx.beginPath();
  ctx.arc(-r * 0.35, -r * 0.35, r * 0.28, 0, Math.PI * 2);
  ctx.fill();

  // Ears (gummy bear characteristic)
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(-r * 0.6, -r * 0.7, r * 0.35, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = darker[color];
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(r * 0.6, -r * 0.7, r * 0.35, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = darker[color];
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Head edge shadow
  ctx.strokeStyle = darker[color];
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.stroke();

  // Eyes (tiny dots)
  ctx.fillStyle = '#1a1a1a';
  ctx.beginPath();
  ctx.arc(-r * 0.25, -r * 0.2, r * 0.1, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(r * 0.25, -r * 0.2, r * 0.1, 0, Math.PI * 2);
  ctx.fill();

  // Eye highlights
  ctx.fillStyle = 'rgba(255,255,255,0.8)';
  ctx.beginPath();
  ctx.arc(-r * 0.2, -r * 0.25, r * 0.04, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(r * 0.3, -r * 0.25, r * 0.04, 0, Math.PI * 2);
  ctx.fill();
}

function drawLicorice(ctx, size) {
  const h = size * 0.7, w = size * 0.25;

  // Licorice string with gradient
  const grad = ctx.createLinearGradient(0, -h, 0, h);
  grad.addColorStop(0, '#2a2a2a');
  grad.addColorStop(0.5, '#1a1a1a');
  grad.addColorStop(1, '#0a0a0a');
  ctx.fillStyle = grad;
  ctx.fillRect(-w, -h, w * 2, h * 2);

  // Shine on licorice
  ctx.fillStyle = 'rgba(100,100,100,0.4)';
  ctx.fillRect(-w + 1, -h + 2, w * 0.8, h * 1.8);

  // Subtle texture
  ctx.strokeStyle = 'rgba(255,255,255,0.1)';
  ctx.lineWidth = 0.5;
  for (let i = -h; i < h; i += 3) {
    ctx.beginPath();
    ctx.moveTo(-w, i);
    ctx.lineTo(w, i);
    ctx.stroke();
  }
}

function drawSourGummy(ctx, size) {
  const r = size * 0.38;
  const colors = ['#ff6b00', '#ffff00', '#ff00ff', '#00ff00', '#00ffff'];
  const colorIndex = Math.floor(Math.random() * colors.length);
  const color = colors[colorIndex];

  // Base shape - kind of blob-like sour candy
  const grad = ctx.createRadialGradient(-r * 0.2, -r * 0.2, 0, 0, 0, r);
  grad.addColorStop(0, color);
  grad.addColorStop(0.8, color);
  grad.addColorStop(1, '#aa7700');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();

  // Sour sugar coating texture
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  for (let i = 0; i < 12; i++) {
    const angle = (Math.PI * 2 / 12) * i;
    const x = Math.cos(angle) * r * 0.7;
    const y = Math.sin(angle) * r * 0.7;
    ctx.beginPath();
    ctx.arc(x, y, r * 0.15, 0, Math.PI * 2);
    ctx.fill();
  }

  // Edge
  ctx.strokeStyle = '#aa6600';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.stroke();
}

function drawMarshmallow(ctx, size) {
  const r = size * 0.42;

  // Marshmallow body with gradient
  const grad = ctx.createRadialGradient(-r * 0.4, -r * 0.4, 0, 0, 0, r);
  grad.addColorStop(0, '#fffef9');
  grad.addColorStop(0.7, '#fef8f0');
  grad.addColorStop(1, '#f0e8d8');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();

  // Marshmallow texture - bumpy surface
  ctx.fillStyle = 'rgba(200,200,200,0.3)';
  for (let i = 0; i < 8; i++) {
    const angle = (Math.PI * 2 / 8) * i;
    const x = Math.cos(angle) * r * 0.6;
    const y = Math.sin(angle) * r * 0.6;
    ctx.beginPath();
    ctx.arc(x, y, r * 0.2, 0, Math.PI * 2);
    ctx.fill();
  }

  // Subtle shadows for texture
  ctx.fillStyle = 'rgba(100,100,100,0.15)';
  ctx.beginPath();
  ctx.arc(0, r * 0.3, r * 0.3, 0, Math.PI * 2);
  ctx.fill();

  // Light highlight
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.beginPath();
  ctx.arc(-r * 0.3, -r * 0.3, r * 0.25, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = '#e0d8c8';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.stroke();
}

function drawToffee(ctx, size) {
  const w = size * 0.38, h = size * 0.45;

  // Toffee body with gradient
  const grad = ctx.createLinearGradient(-w, -h, w, h);
  grad.addColorStop(0, '#d4a574');
  grad.addColorStop(0.5, '#c9915c');
  grad.addColorStop(1, '#8b6914');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.ellipse(0, 0, w, h, Math.PI * 0.1, 0, Math.PI * 2);
  ctx.fill();

  // Toffee wrapper lines
  ctx.strokeStyle = 'rgba(0,0,0,0.2)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(-w * 0.7, -h);
  ctx.quadraticCurveTo(0, -h * 0.3, w * 0.7, -h);
  ctx.stroke();

  // Shiny top surface
  ctx.fillStyle = 'rgba(255,200,100,0.5)';
  ctx.beginPath();
  ctx.ellipse(-w * 0.3, -h * 0.6, w * 0.6, h * 0.4, Math.PI * 0.1, 0, Math.PI * 2);
  ctx.fill();

  // Twisted wrapper detail
  ctx.strokeStyle = 'rgba(139,105,20,0.6)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(-w, -h * 0.2);
  ctx.quadraticCurveTo(0, h * 0.3, w, -h * 0.2);
  ctx.stroke();

  // Edge shadow
  ctx.strokeStyle = '#6b5510';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(0, 0, w, h, Math.PI * 0.1, 0, Math.PI * 2);
  ctx.stroke();
}

function drawFruitGum(ctx, size) {
  const r = size * 0.35;
  const colors = ['#ff4444', '#ff8800', '#ffcc00', '#00cc00', '#0088ff', '#ff00ff'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const grad = ctx.createRadialGradient(-r * 0.3, -r * 0.3, 0, 0, 0, r);
  grad.addColorStop(0, color);
  grad.addColorStop(1, '#aa4400');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  ctx.beginPath();
  ctx.arc(-r * 0.3, -r * 0.3, r * 0.2, 0, Math.PI * 2);
  ctx.fill();
}

function drawColaBottle(ctx, size) {
  const h = size * 0.55, w = size * 0.3;
  ctx.fillStyle = '#8b4513';
  ctx.beginPath();
  ctx.ellipse(0, -h * 0.3, w * 0.8, w, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillRect(-w * 0.6, -h * 0.3, w * 1.2, h * 0.8);
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.fillRect(-w * 0.5, -h * 0.2, w * 0.6, h * 0.6);
}

function drawCherryStrip(ctx, size) {
  const w = size * 0.3, h = size * 0.6;
  ctx.fillStyle = '#c41e3a';
  ctx.fillRect(-w, -h, w * 2, h * 2);
  ctx.fillStyle = 'rgba(255,100,100,0.5)';
  for (let i = 0; i < 5; i++) {
    ctx.fillRect(-w + 5, -h + 5 + i * 15, w * 1.6, 3);
  }
}

function drawBerryGum(ctx, size) {
  const r = size * 0.38;
  const berries = [
    { c: '#6b2f47', name: 'dark' },
    { c: '#8b3a62', name: 'purple' }
  ];
  const berry = berries[Math.floor(Math.random() * berries.length)];
  const grad = ctx.createRadialGradient(-r * 0.2, -r * 0.2, 0, 0, 0, r);
  grad.addColorStop(0, berry.c);
  grad.addColorStop(1, '#4a1f2e');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = 'rgba(200,100,150,0.4)';
  ctx.beginPath();
  ctx.arc(-r * 0.3, -r * 0.3, r * 0.25, 0, Math.PI * 2);
  ctx.fill();
}

function drawSaltCaramel(ctx, size) {
  const r = size * 0.4;
  const grad = ctx.createRadialGradient(-r * 0.3, -r * 0.3, 0, 0, 0, r);
  grad.addColorStop(0, '#e6c200');
  grad.addColorStop(0.6, '#d4a820');
  grad.addColorStop(1, '#8b6914');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  ctx.beginPath();
  ctx.arc(-r * 0.3, -r * 0.3, r * 0.25, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  for (let i = 0; i < 4; i++) ctx.fillRect(-r * 0.3 + i * 5, r * 0.2, 2, 2);
}

function drawDarkChocolate(ctx, size) {
  const w = size * 0.45, h = size * 0.55;
  const grad = ctx.createLinearGradient(-w, -h, w, h);
  grad.addColorStop(0, '#4a3020');
  grad.addColorStop(1, '#2a1810');
  ctx.fillStyle = grad;
  ctx.fillRect(-w, -h, w * 2, h * 2);
  ctx.strokeStyle = '#1a0a00';
  ctx.lineWidth = 2;
  ctx.strokeRect(-w, -h, w * 2, h * 2);
  ctx.fillStyle = 'rgba(100,50,30,0.5)';
  for (let i = 0; i < 6; i++) ctx.fillRect(-w + 3 + i * 6, -h + 3, 4, 3);
}

function drawWhiteChocolate(ctx, size) {
  const w = size * 0.45, h = size * 0.55;
  const grad = ctx.createLinearGradient(-w, -h, w, h);
  grad.addColorStop(0, '#fffef9');
  grad.addColorStop(1, '#f5f0e8');
  ctx.fillStyle = grad;
  ctx.fillRect(-w, -h, w * 2, h * 2);
  ctx.strokeStyle = '#e8e0d0';
  ctx.lineWidth = 2;
  ctx.strokeRect(-w, -h, w * 2, h * 2);
}

function drawPeppermint(ctx, size) {
  const r = size * 0.4;
  const grad = ctx.createRadialGradient(-r * 0.3, -r * 0.3, 0, 0, 0, r);
  grad.addColorStop(0, '#fff');
  grad.addColorStop(0.7, '#f0f0f0');
  grad.addColorStop(1, '#cc0000');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI * 2 / 6) * i;
    ctx.strokeStyle = '#cc0000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(Math.cos(angle) * r * 0.3, Math.sin(angle) * r * 0.3);
    ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
    ctx.stroke();
  }
}

function drawHaribo(ctx, size) {
  const r = size * 0.35;
  const color = ['#ff1493', '#ffd700', '#ff6347'][Math.floor(Math.random() * 3)];
  const grad = ctx.createRadialGradient(-r * 0.25, -r * 0.25, 0, 0, 0, r);
  grad.addColorStop(0, color);
  grad.addColorStop(1, '#8b4513');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  ctx.beginPath();
  ctx.arc(-r * 0.25, -r * 0.25, r * 0.2, 0, Math.PI * 2);
  ctx.fill();
}

function drawSalixTwist(ctx, size) {
  const h = size * 0.7, w = size * 0.25;
  ctx.fillStyle = '#1a1a1a';
  ctx.beginPath();
  ctx.ellipse(0, 0, w, h, Math.PI * 0.15, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ff1493';
  ctx.beginPath();
  ctx.ellipse(0, 0, w * 0.5, h * 0.9, Math.PI * 0.15, 0, Math.PI * 2);
  ctx.fill();
}

function drawButterscotch(ctx, size) {
  const r = size * 0.38;
  const grad = ctx.createRadialGradient(-r * 0.2, -r * 0.2, 0, 0, 0, r);
  grad.addColorStop(0, '#f5a742');
  grad.addColorStop(1, '#c9915c');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = 'rgba(255,200,100,0.6)';
  ctx.beginPath();
  ctx.arc(-r * 0.3, -r * 0.3, r * 0.25, 0, Math.PI * 2);
  ctx.fill();
}

function drawNougat(ctx, size) {
  const w = size * 0.35, h = size * 0.45;
  ctx.fillStyle = '#f5deb3';
  ctx.fillRect(-w, -h, w * 2, h * 2);
  ctx.fillStyle = '#d4a574';
  for (let i = 0; i < 6; i++) {
    ctx.fillRect(-w + 2 + i * 4, -h + 2, 2, h * 1.8);
  }
}

function drawPraline(ctx, size) {
  const r = size * 0.42;
  const grad = ctx.createRadialGradient(-r * 0.3, -r * 0.3, 0, 0, 0, r);
  grad.addColorStop(0, '#8b4513');
  grad.addColorStop(0.6, '#6b3410');
  grad.addColorStop(1, '#4a2208');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#d4a574';
  for (let i = 0; i < 8; i++) {
    const angle = (Math.PI * 2 / 8) * i;
    const x = Math.cos(angle) * r * 0.6;
    const y = Math.sin(angle) * r * 0.6;
    ctx.beginPath();
    ctx.arc(x, y, r * 0.15, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawFizzy(ctx, size) {
  const r = size * 0.36;
  const colors = ['#ff6600', '#ffff00', '#00ffff', '#ff00ff'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const grad = ctx.createRadialGradient(-r * 0.2, -r * 0.2, 0, 0, 0, r);
  grad.addColorStop(0, color);
  grad.addColorStop(1, '#aa5500');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  for (let i = 0; i < 12; i++) {
    const angle = (Math.PI * 2 / 12) * i;
    const x = Math.cos(angle) * r * 0.5;
    const y = Math.sin(angle) * r * 0.5;
    ctx.beginPath();
    ctx.arc(x, y, r * 0.08, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawStrawberry(ctx, size) {
  const r = size * 0.4;
  const grad = ctx.createRadialGradient(-r * 0.2, -r * 0.2, 0, 0, 0, r);
  grad.addColorStop(0, '#ff4444');
  grad.addColorStop(1, '#cc0000');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ffff00';
  for (let i = 0; i < 8; i++) {
    const angle = (Math.PI * 2 / 8) * i;
    ctx.fillRect(Math.cos(angle) * r * 0.5 - 1, Math.sin(angle) * r * 0.5 - 1, 2, 2);
  }
  ctx.fillStyle = '#228822';
  ctx.beginPath();
  ctx.arc(0, -r * 0.6, r * 0.25, 0, Math.PI * 2);
  ctx.fill();
}

function drawRaspberry(ctx, size) {
  const r = size * 0.38;
  const grad = ctx.createRadialGradient(-r * 0.2, -r * 0.2, 0, 0, 0, r);
  grad.addColorStop(0, '#ff69b4');
  grad.addColorStop(1, '#cc0066');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = 'rgba(255,200,200,0.4)';
  for (let i = 0; i < 9; i++) {
    const angle = (Math.PI * 2 / 9) * i;
    const x = Math.cos(angle) * r * 0.6;
    const y = Math.sin(angle) * r * 0.6;
    ctx.beginPath();
    ctx.arc(x, y, r * 0.18, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawLemon(ctx, size) {
  const r = size * 0.38;
  const grad = ctx.createRadialGradient(-r * 0.25, -r * 0.25, 0, 0, 0, r);
  grad.addColorStop(0, '#ffff00');
  grad.addColorStop(1, '#cccc00');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = 'rgba(255,255,100,0.5)';
  ctx.beginPath();
  ctx.arc(-r * 0.2, -r * 0.2, r * 0.25, 0, Math.PI * 2);
  ctx.fill();
}

function drawOrange(ctx, size) {
  const r = size * 0.4;
  const grad = ctx.createRadialGradient(-r * 0.25, -r * 0.25, 0, 0, 0, r);
  grad.addColorStop(0, '#ff9900');
  grad.addColorStop(1, '#cc6600');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = 'rgba(255,150,0,0.3)';
  for (let i = 0; i < 6; i++) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos((Math.PI * 2 / 6) * i) * r, Math.sin((Math.PI * 2 / 6) * i) * r);
    ctx.stroke();
  }
}

function drawWatermelon(ctx, size) {
  const r = size * 0.4;
  const grad = ctx.createRadialGradient(-r * 0.25, -r * 0.25, 0, 0, 0, r);
  grad.addColorStop(0, '#ff3366');
  grad.addColorStop(1, '#cc0033');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#00aa00';
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.7, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#000';
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI * 2 / 6) * i;
    ctx.beginPath();
    ctx.arc(Math.cos(angle) * r * 0.3, Math.sin(angle) * r * 0.3, 2, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawGrape(ctx, size) {
  const r = size * 0.35;
  const grad = ctx.createRadialGradient(-r * 0.25, -r * 0.25, 0, 0, 0, r);
  grad.addColorStop(0, '#9932cc');
  grad.addColorStop(1, '#660099');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = 'rgba(200,100,200,0.4)';
  ctx.beginPath();
  ctx.arc(-r * 0.2, -r * 0.2, r * 0.3, 0, Math.PI * 2);
  ctx.fill();
}

function drawMango(ctx, size) {
  const w = size * 0.35, h = size * 0.42;
  const grad = ctx.createLinearGradient(-w, -h, w, h);
  grad.addColorStop(0, '#ffa500');
  grad.addColorStop(0.5, '#ff8c00');
  grad.addColorStop(1, '#ff6347');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.ellipse(0, 0, w, h, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = 'rgba(255,200,100,0.5)';
  ctx.beginPath();
  ctx.ellipse(-w * 0.3, -h * 0.3, w * 0.4, h * 0.3, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawPineapple(ctx, size) {
  const r = size * 0.38;
  const grad = ctx.createRadialGradient(-r * 0.2, -r * 0.2, 0, 0, 0, r);
  grad.addColorStop(0, '#ffcc00');
  grad.addColorStop(1, '#ff9900');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ffff99';
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 5; j++) {
      ctx.fillRect(-r + 5 + i * 5, -r + 4 + j * 6, 3, 3);
    }
  }
  ctx.fillStyle = '#228822';
  ctx.beginPath();
  ctx.ellipse(0, -r * 0.7, r * 0.2, r * 0.4, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawBubbleGum(ctx, size) {
  const r = size * 0.42;
  const grad = ctx.createRadialGradient(-r * 0.3, -r * 0.3, 0, 0, 0, r);
  grad.addColorStop(0, '#ff69b4');
  grad.addColorStop(0.7, '#ff1493');
  grad.addColorStop(1, '#cc0a70');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = 'rgba(255,200,220,0.5)';
  ctx.beginPath();
  ctx.arc(-r * 0.3, -r * 0.3, r * 0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#aa0a50';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.stroke();
}

function drawSoftCandy(ctx, size) {
  const r = size * 0.38;
  const colors = ['#ff4466', '#ffaa44', '#44ff88', '#4488ff', '#ff44ff'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const grad = ctx.createRadialGradient(-r * 0.25, -r * 0.25, 0, 0, 0, r);
  grad.addColorStop(0, color);
  grad.addColorStop(1, '#884422');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = 'rgba(255,255,200,0.4)';
  ctx.beginPath();
  ctx.arc(-r * 0.3, -r * 0.3, r * 0.25, 0, Math.PI * 2);
  ctx.fill();
}

function drawSugarCrystal(ctx, size) {
  const r = size * 0.32;
  const grad = ctx.createRadialGradient(-r * 0.3, -r * 0.3, 0, 0, 0, r);
  grad.addColorStop(0, '#fff');
  grad.addColorStop(1, '#ddd');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.moveTo(0, -r);
  ctx.lineTo(r * 0.7, -r * 0.3);
  ctx.lineTo(r * 0.7, r * 0.7);
  ctx.lineTo(0, r);
  ctx.lineTo(-r * 0.7, r * 0.7);
  ctx.lineTo(-r * 0.7, -r * 0.3);
  ctx.fill();
  ctx.strokeStyle = '#aaa';
  ctx.lineWidth = 1;
  ctx.stroke();
}

// ── State ──────────────────────────────────────────────────────────────────
const canvas  = document.getElementById('gameCanvas');
const ctx     = canvas.getContext('2d');
const scoreEl = document.getElementById('scoreVal');
const comboEl = document.getElementById('combo');
const msgEl   = document.getElementById('msg');
const levelEl = document.getElementById('levelVal');
const levelupEl = document.getElementById('levelup');

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
let level          = 1;
let lastLevel      = 1;
let roundTimer     = null;
let roundTimeLeft  = 20;
let roundActive    = false;
let roundScore     = 0;

// Starfield
const stars = Array.from({ length: 60 }, () => ({
  x: Math.random(),
  y: Math.random(),
  r: rand(0.5, 2.2),
  phase: rand(0, Math.PI * 2),
}));

// ── Helpers ───────────────────────────────────────────────────────────────
function rand(a, b) { return a + Math.random() * (b - a); }

function calculateLevel(pts) {
  if (pts < 100) return 1;
  if (pts < 250) return 2;
  if (pts < 500) return 3;
  if (pts < 800) return 4;
  return 5;
}

function getSpawnConfig(lvl) {
  const configs = {
    1: { interval: 320, count: 2 },
    2: { interval: 280, count: 2 },
    3: { interval: 240, count: 3 },
    4: { interval: 200, count: 3 },
    5: { interval: 160, count: 4 },
  };
  return configs[lvl] || configs[5];
}

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
    if (roundActive) roundScore += pts;
    scoreEl.textContent = score;

    const newLevel = calculateLevel(score);
    if (newLevel > level) {
      level = newLevel;
      levelEl.textContent = level;
      showLevelUp();
      if (raining) updateSpawnRate();
    }

    spawnParticles(d.x, d.y, d.key);

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

function showLevelUp() {
  levelupEl.textContent = `⭐ LEVEL ${level}!`;
  levelupEl.style.opacity = 1;
  clearTimeout(levelupEl._t);
  levelupEl._t = setTimeout(() => { levelupEl.style.opacity = 0; }, 1200);
}

// ── Particles ─────────────────────────────────────────────────────────────
function spawnParticles(x, y, key) {
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI * 2 / 6) * i + rand(-0.25, 0.25);
    const speed = rand(2.5, 7);
    particles.push({
      x, y, key,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
      size: rand(12, 20),
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
  const r  = 60;
  const op = Math.min(1, Math.max(0, openAmt));

  ctx.save();
  ctx.translate(x, y);

  // Realistic face shape - oval
  ctx.beginPath();
  ctx.ellipse(0, -2, r * 0.95, r, 0, 0, Math.PI * 2);

  // Main skin tone with complex gradient for realism
  const skinGrad = ctx.createRadialGradient(-r * 0.4, -r * 0.4, r * 0.1, 0, r * 0.2, r * 1.3);
  skinGrad.addColorStop(0, '#f9d5b8');
  skinGrad.addColorStop(0.3, '#f5caa8');
  skinGrad.addColorStop(0.6, '#e8b898');
  skinGrad.addColorStop(1, '#d99878');
  ctx.fillStyle = skinGrad;
  ctx.fill();

  // Subtle facial contours for depth
  ctx.fillStyle = 'rgba(0,0,0,0.08)';
  ctx.beginPath();
  ctx.ellipse(0, r * 0.15, r * 0.85, r * 0.7, 0, 0, Math.PI * 2);
  ctx.fill();

  // Nose shadow
  ctx.fillStyle = 'rgba(0,0,0,0.06)';
  ctx.beginPath();
  ctx.ellipse(-2, -5, 4, 8, 0, 0, Math.PI * 2);
  ctx.fill();

  // Eyebrows - thick and natural
  [-22, 22].forEach(ex => {
    ctx.strokeStyle = '#4a2a1a';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.arc(ex, -22, 10, Math.PI * 0.2, Math.PI * 0.8, false);
    ctx.stroke();

    // Eyebrow shadow
    ctx.strokeStyle = 'rgba(0,0,0,0.2)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(ex, -20, 10, Math.PI * 0.2, Math.PI * 0.8, false);
    ctx.stroke();
  });

  // Eyes - very realistic
  [-23, 23].forEach((ex, idx) => {
    // Eye whites with shadow
    const eyeGrad = ctx.createRadialGradient(ex, -12, 1, ex, -8, 6);
    eyeGrad.addColorStop(0, '#fffef9');
    eyeGrad.addColorStop(1, '#f5f0e8');
    ctx.fillStyle = eyeGrad;
    ctx.beginPath();
    ctx.ellipse(ex, -12, 9.5, 8, 0, 0, Math.PI * 2);
    ctx.fill();

    // Eye outline shadow
    ctx.strokeStyle = 'rgba(0,0,0,0.15)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Iris - detailed with multiple gradients
    const irisGrad = ctx.createRadialGradient(ex - 2.5, -14, 0.5, ex + 0.5, -11, 4);
    irisGrad.addColorStop(0, '#a0795a');
    irisGrad.addColorStop(0.4, '#7a5538');
    irisGrad.addColorStop(0.8, '#5a3a28');
    irisGrad.addColorStop(1, '#3a2a1a');
    ctx.fillStyle = irisGrad;
    ctx.beginPath();
    ctx.arc(ex, -11.5, 4.5, 0, Math.PI * 2);
    ctx.fill();

    // Pupil
    ctx.fillStyle = '#0a0a0a';
    ctx.beginPath();
    ctx.arc(ex + 0.8, -12, 2.2, 0, Math.PI * 2);
    ctx.fill();

    // Iris shine - double highlights for realism
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.beginPath();
    ctx.arc(ex + 1.5, -13.5, 1.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.beginPath();
    ctx.arc(ex - 1, -9.5, 0.8, 0, Math.PI * 2);
    ctx.fill();

    // Upper eyelid
    ctx.fillStyle = 'rgba(50,30,20,0.2)';
    ctx.beginPath();
    ctx.ellipse(ex, -16.5, 9.5, 2.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Lower eyelid
    ctx.fillStyle = 'rgba(50,30,20,0.12)';
    ctx.beginPath();
    ctx.ellipse(ex, -7, 9.5, 1.5, 0, 0, Math.PI * 2);
    ctx.fill();
  });

  // Cheeks - natural flush with two-tone
  [-28, 28].forEach(cx => {
    // Main cheek
    ctx.fillStyle = 'rgba(255,100,90,0.3)';
    ctx.beginPath();
    ctx.arc(cx, 10, 16, 0, Math.PI * 2);
    ctx.fill();

    // Cheek highlight (higher on face)
    ctx.fillStyle = 'rgba(255,150,130,0.25)';
    ctx.beginPath();
    ctx.arc(cx, 5, 10, 0, Math.PI * 2);
    ctx.fill();
  });

  // Mouth and lips
  const mouthH = op * 26;
  const mouthY = 24;
  const mouthW = 32;

  // Upper lip - detailed
  if (op < 0.25) {
    const upperLipGrad = ctx.createLinearGradient(0, mouthY - 6, 0, mouthY + 1);
    upperLipGrad.addColorStop(0, '#c83a50');
    upperLipGrad.addColorStop(0.5, '#d9556b');
    upperLipGrad.addColorStop(1, '#b82a45');
    ctx.fillStyle = upperLipGrad;
    ctx.beginPath();
    ctx.ellipse(0, mouthY - 2, mouthW * 0.98, 5.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Upper lip shine
    ctx.fillStyle = 'rgba(255,220,220,0.6)';
    ctx.beginPath();
    ctx.ellipse(-mouthW * 0.25, mouthY - 4, mouthW * 0.35, 1.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Lip line detail
    ctx.strokeStyle = 'rgba(0,0,0,0.2)';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.ellipse(0, mouthY, mouthW * 0.98, 0.5, 0, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Mouth opening when eating
  if (op > 0.15) {
    // Inner mouth - very dark
    ctx.fillStyle = 'rgba(30,5,15,0.95)';
    ctx.beginPath();
    ctx.ellipse(0, mouthY + mouthH * 0.35, mouthW * 0.92, Math.max(5, mouthH * 0.85), 0, 0, Math.PI * 2);
    ctx.fill();

    // Gum color - realistic pink/red
    ctx.fillStyle = '#a8355a';
    ctx.beginPath();
    ctx.ellipse(0, mouthY + mouthH * 0.5, mouthW * 0.85, Math.max(4, mouthH * 0.45), 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // Tongue - very realistic
  if (op > 0.35) {
    const tongueGrad = ctx.createLinearGradient(0, mouthY + mouthH * 0.45, 0, mouthY + mouthH);
    tongueGrad.addColorStop(0, '#e88080');
    tongueGrad.addColorStop(0.6, '#d85555');
    tongueGrad.addColorStop(1, '#b84545');
    ctx.fillStyle = tongueGrad;
    ctx.beginPath();
    ctx.ellipse(0, mouthY + mouthH * 0.65, 18, mouthH * 0.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Tongue center highlight
    ctx.fillStyle = 'rgba(255,180,180,0.7)';
    ctx.beginPath();
    ctx.ellipse(0, mouthY + mouthH * 0.35, 7, mouthH * 0.3, 0, 0, Math.PI * 2);
    ctx.fill();

    // Tongue texture lines
    ctx.strokeStyle = 'rgba(100,30,30,0.4)';
    ctx.lineWidth = 1.2;
    for (let i = -3; i <= 3; i++) {
      ctx.beginPath();
      ctx.moveTo(i * 4, mouthY + mouthH * 0.55);
      ctx.lineTo(i * 4, mouthY + mouthH);
      ctx.stroke();
    }
  }

  // Teeth - photorealistic when open
  if (op > 0.25) {
    ctx.fillStyle = '#f8f5f0';
    const toothH = Math.min(mouthH * 0.52, 12);
    const toothW = 6;
    const spacing = 8;

    // Upper teeth
    for (let i = -2.5; i <= 2.5; i++) {
      if (Math.abs(i) < 2.5) {
        const tx = i * spacing;

        // Tooth body
        ctx.fillRect(tx - toothW / 2, mouthY - mouthH * 0.35, toothW, toothH);

        // Tooth gradient for depth
        ctx.fillStyle = 'rgba(0,0,0,0.08)';
        ctx.fillRect(tx - toothW / 2 + toothW * 0.6, mouthY - mouthH * 0.35, toothW * 0.4, toothH);
        ctx.fillStyle = '#f8f5f0';

        // Tooth edge definition
        ctx.strokeStyle = 'rgba(150,130,110,0.4)';
        ctx.lineWidth = 0.5;
        ctx.strokeRect(tx - toothW / 2, mouthY - mouthH * 0.35, toothW, toothH);
      }
    }

    // Lower teeth (smaller)
    for (let i = -1.5; i <= 1.5; i++) {
      if (Math.abs(i) < 1.5) {
        const tx = i * spacing + spacing * 0.5;
        ctx.fillStyle = '#f8f5f0';
        ctx.fillRect(tx - toothW / 2, mouthY + mouthH * 0.25, toothW * 0.85, toothH * 0.65);

        ctx.strokeStyle = 'rgba(150,130,110,0.4)';
        ctx.lineWidth = 0.5;
        ctx.strokeRect(tx - toothW / 2, mouthY + mouthH * 0.25, toothW * 0.85, toothH * 0.65);
      }
    }
  }

  // Lower lip
  if (op > 0.2) {
    const lowerLipGrad = ctx.createLinearGradient(0, mouthY + mouthH * 0.5, 0, mouthY + mouthH * 0.85);
    lowerLipGrad.addColorStop(0, '#9a3045');
    lowerLipGrad.addColorStop(1, '#7a2035');
    ctx.fillStyle = lowerLipGrad;
    ctx.beginPath();
    ctx.ellipse(0, mouthY + mouthH * 0.65, mouthW * 0.9, mouthH * 0.4, 0, 0, Math.PI * 2);
    ctx.fill();
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
    SWEETS[d.key].draw(ctx, d.size);
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
    ctx.globalAlpha = p.life;
    ctx.translate(p.x, p.y);
    SWEETS[p.key].draw(ctx, p.size);
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

  // --- Round timer ---
  if (roundActive && roundTimeLeft >= 0) {
    ctx.save();
    ctx.font = 'bold 56px Segoe UI, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Timer background with rounded corners effect
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.beginPath();
    ctx.roundRect(W / 2 - 90, 80, 180, 90, 15);
    ctx.fill();

    // Border
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Timer color based on time remaining
    let timerColor = '#64ff00';
    if (roundTimeLeft < 10) timerColor = '#ffcc00';
    if (roundTimeLeft < 5) timerColor = '#ff4444';

    ctx.fillStyle = timerColor;
    ctx.shadowColor = timerColor;
    ctx.shadowBlur = 25;
    ctx.fillText(roundTimeLeft, W / 2, 115);

    // "SECONDS" label
    ctx.font = 'bold 16px Segoe UI, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.shadowColor = 'transparent';
    ctx.fillText('SECONDS LEFT', W / 2, 155);

    ctx.restore();
  }
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

function updateSpawnRate() {
  if (!raining) return;
  clearInterval(spawnInterval);
  const config = getSpawnConfig(level);
  spawnInterval = setInterval(() => {
    for (let i = 0; i < config.count; i++) spawnDrop();
  }, config.interval);
}

function startRound() {
  roundTimeLeft = 20;
  roundScore = 0;
  roundActive = true;

  if (roundTimer) clearInterval(roundTimer);
  roundTimer = setInterval(() => {
    roundTimeLeft--;
    if (roundTimeLeft <= 0) {
      endRound();
    }
  }, 1000);
}

function endRound() {
  roundActive = false;
  if (roundTimer) {
    clearInterval(roundTimer);
    roundTimer = null;
  }
  stopRain();

  // Show end round message
  const roundMsg = `⏱️ Round Over! Score: ${roundScore}`;
  msgEl.textContent = roundMsg;
  msgEl.style.opacity = 1;
  setTimeout(() => { msgEl.style.opacity = 0; }, 2000);

  // Start next round after delay
  setTimeout(() => {
    level++;
    levelEl.textContent = level;
    showLevelUp();
    startRain();
    startRound();
  }, 2500);
}

function startRain() {
  if (raining) return;
  raining = true;
  document.getElementById('btnStop').disabled = false;
  updateSpawnRate();
  startRound();
}

function stopRain() {
  raining = false;
  roundActive = false;
  if (spawnInterval) {
    clearInterval(spawnInterval);
    spawnInterval = null;
  }
  if (roundTimer) {
    clearInterval(roundTimer);
    roundTimer = null;
  }
  document.getElementById('btnStop').disabled = true;
}

// Filter dropdown toggle
const filterToggle = document.getElementById('filterToggle');
const filtersMenu = document.getElementById('ui-filters');

filterToggle.addEventListener('click', () => {
  filtersMenu.classList.toggle('filters-hidden');
  filtersMenu.classList.toggle('filters-visible');
});

// Close filter menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('#ui-filters-container')) {
    filtersMenu.classList.add('filters-hidden');
    filtersMenu.classList.remove('filters-visible');
  }
});

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
