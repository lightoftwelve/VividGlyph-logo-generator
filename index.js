const inquirer = require('inquirer');
const fs = require('fs');
const { drawCircle, drawTriangle, drawSquare } = require('./lib/shapes');

// Function to prompt the user for logo details
async function promptUser() {
    const logoDetails = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: (input) => input.length <= 3 || 'Please enter up to three characters.',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (color keyword or hexadecimal number):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for the logo:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (color keyword or hexadecimal number):',
        },
    ]);

    return logoDetails;
}

function generateLogo(logoDetails) {
    const { text, textColor, shape, shapeColor } = logoDetails;
    let svgCode = '';

    let shapeCode = '';
    switch (shape) {
        case 'circle':
            shapeCode = drawCircle(shapeColor, 50);
            break;
        case 'triangle':
            shapeCode = drawTriangle(shapeColor, 100);
            break;
        case 'square':
            shapeCode = drawSquare(shapeColor, 75);
            break;
        default:
            console.log('Unsupported shape. Exiting...');
            process.exit(1);
    }

    const x = 150; // Center of the SVG width
    const y = 100; // Center of the SVG height
    svgCode = `${shapeCode}<text x="${x}" y="${y}" fill="${textColor}" font-size="22" text-anchor="middle" dominant-baseline="middle">${text}</text>`;

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${svgCode}</svg>`;
    return svg;
}


// Main function to run the logo generator
async function runLogoGenerator() {
    try {
        const logoDetails = await promptUser();
        const svgLogo = generateLogo(logoDetails);

        // Write the generated SVG logo to the 'logo.svg' file
        fs.writeFile('logo.svg', svgLogo, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
            } else {
                console.log('Generated logo saved as logo.svg');
            }
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

runLogoGenerator();