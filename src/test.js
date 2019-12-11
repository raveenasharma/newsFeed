const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: () => {
        console.log(this)
    },
    draw1: function() {
        console.log(this)
    }
};

circle.draw();

const test = {
    a: 1
}

circle.draw.call(test)