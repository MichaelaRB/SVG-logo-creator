class Shapes {
    constructor(textColor, backgroundColor, text) {
        //regex code taken from https://linuxhint.com/check-if-string-is-hex-in-javascript/
        var regex = /[0-9A-Fa-f]{6}/g;
        textColor.match(regex) ? this.textColor = `'#${textColor}'` : this.textColor = `"${textColor.toLowerCase()}"`;
        backgroundColor.match(regex) ? this.backgroundColor = `'#${backgroundColor}'` : this.backgroundColor = `"${backgroundColor.toLowerCase()}"`;
        this.text = text;
    }
    render() {
        throw new Error('Child class must implement a render() method.');
    }
}

module.exports = Shapes;