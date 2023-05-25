const Circle = require ('./circle.js');
const Triangle = require ('./triangle.js');
const Square = require ('./square.js');


describe('Circle', () => {
    it('should return a string for an SVG circle with xy coordinates, radius, and fill color, with the fill color being a color name.', () => {
        const circle = new Circle("white", "blue", "text");
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill= "blue"/>');
    })
});

describe('Circle', () => {
    it('should return a string for an SVG circle with xy coordinates, radius, and fill color, with the fill color being a hexadecimal value.', () => {
        const circle = new Circle("textColor", "#3635aa", "text");
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill= "#3635aa"/>');
    })
});


describe('Triangle', () => {
    it('should return a string for an SVG polygon with points and fill color, with the fill color being a color name.', () => {
        const triangle = new Triangle("textColor", "blue", "text");
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
});

describe('Triangle', () => {
    it('should return a string for an SVG polygon with points and fill color, with the fill color being a hexadecimal value.', () => {
        const triangle = new Triangle("textColor", "#3635aa", "text");
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="#3635aa" />');
    })
});

describe('Square', () => {
    it('should return a string for an SVG rectangle with height, width, and fill color, with the fill color being a color name.', () => {
        const square = new Square("textColor", "blue", "text");
        expect(square.render()).toEqual('<rect width="150" height="150" x="75" y="30" fill= "blue"/>');
    })
});

describe('Square', () => {
    it('should return a string for an SVG rectangle with height, width, and fill color, with the fill color being a color name.', () => {
        const square = new Square("textColor", "#3635aa", "text");
        expect(square.render()).toEqual('<rect width="150" height="150" x="75" y="30" fill= "#3635aa"/>');
    })
});