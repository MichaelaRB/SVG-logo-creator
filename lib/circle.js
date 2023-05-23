const Shapes = require('./shapes');

class Circle extends Shapes {
    constructor() {
        super();
    }

    render() {
        this.textColor = parseInt(this.textColor);
        this.backgroundColor = parseInt(this.backgroundColor);
        switch(isNaN(this.textColor)) {
            case true:
                break;
            case false:
                this.textColor = `%23${this.textColor}`;
                break;
        }
        switch(isNaN(this.backgroundColor)) {
            case true:
                break;
            case false:
                this.backgroundColor = `%23${this.backgroundColor}`;
                break;
        }
        return `<circle cx="150" cy="100" r="80" fill= ${this.backgroundColor}/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>`;
    }
}

module.exports = Circle;