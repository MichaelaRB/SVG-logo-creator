class Shapes {
    constructor(textColor, backgroundColor, text) {
        this.textColor = textColor;
        this.backgroundColor = backgroundColor;
        this.text = text.toUpperCase();
    }
    render() {
        throw new Error('Child class must implement a render() method.');
    }
}

module.exports = Shapes;