const { drawCircle, drawTriangle, drawSquare } = require('../lib/shapes');

test('drawCircle should generate the correct SVG code', () => {
    const svgCode = drawCircle('red', 50);
    expect(svgCode).toContain('<circle');
    expect(svgCode).toContain('cx="150" cy="100" r="50"');
    expect(svgCode).toContain('fill="red"');
});

test('drawTriangle should generate the correct SVG code', () => {
    const svgCode = drawTriangle('blue', 100);
    expect(svgCode).toContain('<polygon');
    expect(svgCode).toContain('150,56.69872981077807'); // Testing only the top point, as trying to test the center was largely unreadable with the number values needed to make it accurate
    expect(svgCode).toContain('fill="blue"');
});

test('drawSquare should generate the correct SVG code', () => {
    const svgCode = drawSquare('green', 75);
    expect(svgCode).toContain('<rect');
    expect(svgCode).toContain('x="112.5" y="62.5" width="75" height="75"');
    expect(svgCode).toContain('fill="green"');
});
