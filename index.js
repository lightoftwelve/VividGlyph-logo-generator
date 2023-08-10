// Required modules
const inquirer = require('inquirer'); // For interactive command-line prompts
const fs = require('fs'); // For file system operations
const { drawCircle, drawTriangle, drawSquare } = require('./lib/shapes'); // Importing drawing functions

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

// Function to generate SVG logo code based on user's input.
function generateLogo(logoDetails) {
    const { text, textColor, shape, shapeColor } = logoDetails; // Destructuring the details
    let svgCode = ''; // Initialized as an empty string. Later to be built upon to create the SVG code for the logo

    // Determine the appropriate shape SVG code based on user's choice.
    let shapeCode = '';
    switch (shape) {
        case 'circle':
            shapeCode = drawCircle(shapeColor, 50); // If shape is 'circle', it calls the drawCircle function with the shapeColor and a radius of 50.
            break;
        case 'triangle':
            shapeCode = drawTriangle(shapeColor, 100); // If shape is 'triangle', it calls the drawTriangle function with the shapeColor and a side length of 100.
            break;
        case 'square':
            shapeCode = drawSquare(shapeColor, 75); // If shape is 'square', it calls the drawSquare function with the shapeColor and a side length of 75.
            break;
        default:
            console.log('Unsupported shape. Exiting...');
            process.exit(1); // logs an error message if the shape doesn't match one of these options and exits the process with an error code.
    }

    const x = 150; // Center of the SVG width
    const y = 100; // Center of the SVG height

    // Add text to the shape SVG code, placed in the center
    svgCode = `${shapeCode}<text x="${x}" y="${y}" fill="${textColor}" font-size="22" text-anchor="middle" dominant-baseline="middle">${text}</text>`; // x & y to position the text at the center of the shape, fill is to set the font color, text anchor middle and dominant baseline middle ensure the text is horizontally and vertically at the x & y position, finally teh text is put into the SVG.

    // Wrap the logo code with the SVG tag
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${svgCode}</svg>`;
    return svg;
}

// Main function to run the logo generator
// It prompts the user for logo details, generates the SVG logo, and then saves it to a file.
async function runLogoGenerator() {
    try {
        const logoDetails = await promptUser(); // Get logo details
        const svgLogo = generateLogo(logoDetails); // Generate SVG logo

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

// Start the logo generator process
runLogoGenerator();