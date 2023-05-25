const inquirer = require('inquirer');
const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');
const fs = require('fs');

//the y coordinate on the page for the logo
var y = 125;

//gathers user input to generate the logo and a shape object
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
        var textColor = isHexColor(data.textColor);
        var backgroundColor = isHexColor(data.backgroundColor);
        switch(data.shape)  {
            case "Circle":
                logoRender = new Circle(textColor, backgroundColor, data.text);
                break;
            case "Square":
                logoRender = new Square(textColor, backgroundColor, data.text);
                break;
            case "Triangle":
                logoRender = new Triangle(textColor, backgroundColor, data.text);
                y=150;
                break;
        }


        const rendString = logoRender.render();

        const logo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${rendString}
        
        <text x="150" y="${y}" font-size="60" text-anchor="middle" fill="${logoRender.textColor}">${logoRender.text}</text>
        
        </svg>`;
        
        //create/overwrite the .svg file in the output folder
        fs.writeFile("./output/logo.svg", logo, (err) =>
            err ? console.log(err) : console.log("Your SVG logo is ready."));
    })


//checks to see if the color value is a hex value or not, returns a string starting with # if is hexadecimal.
function isHexColor(color) {
    if(color.length!==6) return color;
    for (var i = 0; i < color.length; i++)
    {
        switch(isNaN(color.charAt(i))) {
            case false:
                break;
            case true:
                console.log(color.charAt(i));
                if(color.charAt(i)==="a"||"b"||"c"||"d"||"e"||"f") break;
                return color;
        }
    }
    return "#" + color;
}
