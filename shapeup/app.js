const getRandomPos = (size) => {
    return Math.floor(Math.random() * (601 - size))
}
class Shape {
    constructor(height, width) {
        this.height = height
        this.width = width
        this.div = $('<div class = "shape"></div>')
        this.render()
        this.div.dblclick(() => {
            this.div.remove()
        })
    }
    render() {
        this.div.css({
            height: this.height,
            width: this.width,
            top: getRandomPos(this.height),
            left: getRandomPos(this.width)
        })
        $('.canvas').append(this.div)
    }
}
class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width)
        this.div.attr('id', 'rectangle')
        this.div.click(() => {
            $("#shape-name").text(" Rectagle");
            $("#shape-width").text(this.width);
            $("#shape-height").text(this.height);
            $("#shape-radius").text(" na");
            $("#shape-area").text(this.height * this.width);
            $("#shape-per").text((this.height * 2) + (this.width * 2));
        })
    }
}


class Square extends Shape {
    constructor(length) {
        super(length, length)
        this.div.attr('id', 'square')
        this.div.click(() => {
            $("#shape-name").text(" Square");
            $("#shape-width").text(this.width);
            $("#shape-height").text(this.height);
            $("#shape-radius").text(" na");
            $("#shape-area").text(this.height * this.width);
            $("#shape-per").text((this.height * 2) + (this.width * 2))
        })
    }
}


class Circle extends Shape {
    constructor(radius) {
        super(2 * radius, 2 * radius)
        this.div.attr('id', 'circle')
        this.radius = radius
        this.div.click(() => {
            $("#shape-name").text(" Circle");
            $("#shape-width").text(this.width);
            $("#shape-height").text(this.height);
            $("#shape-radius").text(this.radius);
            $("#shape-area").text(this.calculateArea());
            $("#shape-per").text(this.calculatePer())
        })
    }

    calculateArea() {
        const radius = this.width / 2;

        return Math.PI * radius * radius;
    }

    calculatePer() {
        return 2 * Math.PI * this.radius

    }
}


class Triangle extends Shape {
    constructor(height) {
        super(height, height)
        this.div.attr('id', 'triangle')
        this.div.click(() => {
            $("#shape-name").text(" Triangle");
            $("#shape-width").text(this.width);
            $("#shape-height").text(this.height);
            $("#shape-radius").text(" na");
            $("#shape-area").text(this.height * this.width * 0.5);
            $("#shape-per").text((2 * this.height) + (Math.sqrt(2) * this.width))
        })
        this.div.css({
            height: 0,
            width: 0,
            borderLeft: `${this.height}px solid transparent`,
            borderBottom: `${this.height}px solid red`
        })
    }

}


$('#rec').click(() => {
    event.preventDefault()
    let width = $('#rec-w').val()
    let height = $('#rec-h').val()
    new Rectangle(height, width)
})

$('#square').click(() => {
    event.preventDefault()
    let length = $('#sqr-l').val()
    new Square (length)
})

$('#circle').click(() => {
    event.preventDefault()
    let radius = $('circle-r').val()
    new Circle (radius)
})

$('#triangle').click(() => {
    event.preventDefault()
    let height = $('#tri-h').val()
    new Triangle (height)
})