function drawCircle(color, radius) {
  const cx = 150; // Half of 300
  const cy = 100; // Half of 200
  return `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="${color}" />`;
}

function drawTriangle(color, sideLength) {
  const height = (Math.sqrt(3) / 2) * sideLength;
  const halfHeight = height / 2;
  const halfWidth = sideLength / 2;
  const x1 = 150 - halfWidth;
  const y1 = 100 + halfHeight;
  const x2 = 150;
  const y2 = 100 - halfHeight;
  const x3 = 150 + halfWidth;
  const y3 = 100 + halfHeight;
  return `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="${color}" />`;
}

function drawSquare(color, sideLength) {
  const x = (300 - sideLength) / 2;
  const y = (200 - sideLength) / 2;
  return `<rect x="${x}" y="${y}" width="${sideLength}" height="${sideLength}" fill="${color}" />`;
}

module.exports = {
  drawCircle,
  drawTriangle,
  drawSquare,
};
