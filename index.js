const inquirer = require('inquirer');
const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');
const fs = require('fs');
var y = 125;


inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Input maximum of 3 characters for the text on your logo.',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for your logo.',
            choices: ["Circle", "Square", "Triangle"],
        },
        {
            type: 'input',
            name: 'backgroundColor',
            message: 'Input the color you want the shape to be. This can be either a general color name or a hexadecimal value.',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Input the color you want the text on your logo to be. This can be either a general color name or a hexadecimal value.',
        },
    ])
    .then((data)=> { 
        if (data.text.length > 3) {
            console.log("You may only enter up to 3 characters. Please try again.");
            return;
        }
        var logoRender;
        switch(data.shape)  {
            case "Circle":
                logoRender = new Circle(data.textColor, data.backgroundColor, data.text);
                break;
            case "Square":
                logoRender = new Square(data.textColor, data.backgroundColor, data.text);
                break;
            case "Triangle":
                logoRender = new Triangle(data.textColor, data.backgroundColor, data.text);
                y=150;
                break;
        }

        const rendString = logoRender.render();

        const logo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${rendString}
        
        <text x="150" y="${y}" font-size="60" text-anchor="middle" fill=${logoRender.textColor}>${logoRender.text}</text>
        
        </svg>`;
        
        fs.writeFile("./output/logo.svg", logo, (err) =>
            err ? console.log(err) : console.log("Your SVG logo is ready."));
    })
