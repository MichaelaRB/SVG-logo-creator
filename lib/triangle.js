const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor(textColor, backgroundColor, text) {
        super(textColor, backgroundColor, text);
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill= ${this.backgroundColor}/>`;
    }
}

module.exports = Triangle;