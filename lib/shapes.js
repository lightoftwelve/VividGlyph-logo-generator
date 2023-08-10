// Function to generate SVG code for a circle
function drawCircle(color, radius) { // color: fill color of the circle, radius: radius of the circle
  const cx = 150; // Center X-coordinate (half of SVG width, which is 300).
  const cy = 100; // Center Y-coordinate (half of SVG height, which is 200).

  return `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="${color}" />`; // Returning SVG code for a circle with the given parameters.
}

// Function to generate SVG code for an equilateral triangle.
function drawTriangle(color, sideLength) { // color: fill color of triangle, sideLength: side length of equilateral triangle

  // Calculate the height of the equilateral triangle using Pythagoras' theorem.
  const height = (Math.sqrt(3) / 2) * sideLength;
  const halfHeight = height / 2;
  const halfWidth = sideLength / 2;

  // Calculate the three vertices (x,y) of the triangle.
  const x1 = 150 - halfWidth;
  const y1 = 100 + halfHeight;
  const x2 = 150;
  const y2 = 100 - halfHeight;
  const x3 = 150 + halfWidth;
  const y3 = 100 + halfHeight;

  return `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="${color}" />`; // Returning SVG code for a triangle with the given parameters.
}

// Function to generate SVG code for the square.
function drawSquare(color, sideLength) { // color: fill color of the square, sideLength: side length of the square

  // Calculate the top-left corner (x,y) of the square so that it's centered in the SVG.
  const x = (300 - sideLength) / 2; // SVG width is 300
  const y = (200 - sideLength) / 2; // SVG height is 200

  return `<rect x="${x}" y="${y}" width="${sideLength}" height="${sideLength}" fill="${color}" />`; // Returning SVG code for the square with the given parameters.
}

// Export the drawing functions so they can be imported and used in other modules.
module.exports = {
  drawCircle,
  drawTriangle,
  drawSquare,
};