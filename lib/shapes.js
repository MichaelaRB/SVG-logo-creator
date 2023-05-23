class Shapes {
    constructor(textColor, backgroundColor, text) {
        textColor = parseInt(textColor);
        backgroundColor = parseInt(backgroundColor);
        switch(isNaN(textColor)) {
            case true:
                this.textColor = textColor;
                break;
            case false:
                this.textColor = `%23${textColor}`;
                break;
        }
        switch(isNaN(backgroundColor)) {
            case true:
                this.backgroundColor = backgroundColor;
                break;
            case false:
                this.backgroundColor = `%23${this.backgroundColor}`;
                break;
        }
        this.text = text;
    }
    render() {
        throw new Error('Child class must implement a render() method.');
    }
}

module.exports = Shapes;