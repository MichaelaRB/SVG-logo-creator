const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor(textColor, backgroundColor, text) {
        super(textColor, backgroundColor, text);
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill=${this.backgroundColor} />`;
    }
}

module.exports = Triangle;