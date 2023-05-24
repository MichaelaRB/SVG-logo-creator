const Shapes = require('./shapes');

class Square extends Shapes {
    constructor(textColor, backgroundColor, text) {
        super(textColor, backgroundColor, text);
    }

    render() {
        return `<rect width="150" height="150" x="75" y="30" fill= ${this.backgroundColor}/>`;
    }
}

module.exports = Square;