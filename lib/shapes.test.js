// Importing the drawing functions from the shapes module.
const { drawCircle, drawTriangle, drawSquare } = require('../lib/shapes');

// Test for the drawCircle function.
test('drawCircle should generate the correct SVG code', () => {
    const svgCode = drawCircle('red', 50); // Call the drawCircle function with specified parameters.
    expect(svgCode).toContain('<circle'); // Expect the SVG code to contain the circle element.
    expect(svgCode).toContain('cx="150" cy="100" r="50"'); // Expect the SVG code to have the correct attributes (center and radius).
    expect(svgCode).toContain('fill="red"'); // Expect the fill color of the circle to be red.

});

// Test for the drawTriangle function.
test('drawTriangle should generate the correct SVG code', () => {
    const svgCode = drawTriangle('blue', 100); // Call the drawTriangle function with specified parameters.
    expect(svgCode).toContain('<polygon'); // Expect the SVG code to contain the polygon element (representing a triangle).
    expect(svgCode).toContain('150,56.69872981077807'); // Expect the SVG code to have the correct top vertex of the triangle | This point is calculated based on the geometry of an equilateral triangle.
    expect(svgCode).toContain('fill="blue"'); // Expect the fill color of the triangle to be blue.
});

// Test for the drawSquare function.
test('drawSquare should generate the correct SVG code', () => {
    const svgCode = drawSquare('green', 75); // Call the drawSquare function with specified parameters.
    expect(svgCode).toContain('<rect'); // Expect the SVG code to contain the rect element (representing a square).
    expect(svgCode).toContain('x="112.5" y="62.5" width="75" height="75"'); // Expect the SVG code to have the correct attributes (position and dimensions) | This ensures that the square is centered within the SVG canvas.
    expect(svgCode).toContain('fill="green"'); // Expect the fill color of the square to be green.
});