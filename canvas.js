var canvas = document.querySelector('canvas');



var c = canvas.getContext('2d')

/* c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0, 0, 255, 0.5)';
c.fillRect(200, 540, 100, 100);
c.fillRect(400, 230, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(600, 90, 100, 200);
c.fillRect(300, 200, 100, 100);
console.log(canvas); */

// Line
/* c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "#fa34a3"
c.stroke(); */

// Arc / Circle

function random(number) {
    return Math.floor(Math.random() * number);
}

/* for (let i = 0; i < 100; i++) {
    const randomColor = "#" + Math.floor(Math.random() * 1677721545).toString(16);
    c.beginPath();
    c.fillStyle = randomColor;
    c.arc(random(canvas.width), random(canvas.height), random(50), 0, Math.PI*2);
    c.fill()
}
 */

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40;
var minRadius = 2;

var colorArray = [
    '#72694A',
    '#F1E1C1',
    '#A7A3A2',
    '#F2D7C2',
    '#0E0E0E',
    '#a3a375',
];

window.addEventListener('mousemove', function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
    console.log(mouse);
})

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

const randomColor = "#" + Math.floor(Math.random() * 1677721545).toString(16);

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = minRadius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)]

    this.draw = function() {
        c.beginPath();
        /* c.fillStyle = randomColor; */
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.fillStyle = this.color
        c.fill()
    }

    this.update = function() {
        if (this.x + radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx
        }

        if (this.y + radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy
        }

        this.x += this.dx;
        this.y += this.dy

        // interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) 
            {
                if (this.radius < maxRadius) {
                    this.radius += 1;
                }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}


var circleArray = [];

function init() {

    circleArray = [];

    for (var i = 0; i < 800; i++) {
        var radius = Math.random() * 3 + 1;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 1;
        var dy = (Math.random() - 0.5) * 1;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    };
};


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    };
};

init();
animate();