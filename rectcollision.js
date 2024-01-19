
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d')

canvas.width = innerWidth;
canvas.height = innerHeight;

var mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2,
}

var colors = [
    '#011526',
    '#012E40',
    '#025959',
    '#02735E',
    '#038C65',
];

// Event Listeners

window.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

window.addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});


// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = '#1A1A23';
    c.fillRect(0, 0, canvas.width, canvas.height);

    const blueRectanglesX = canvas.width / 2 - 50;
    
    if (
        mouse.x + 100 >= blueRectanglesX &&
        mouse.x <= blueRectanglesX + 100 &&
        mouse.y + 100 >= canvas.height / 2 - 50 &&
        mouse.y <= canvas.height / 2 - 50 + 100
    ) {
        console.log('colliding');
    }


    // red rectangle
    c.fillStyle = '#E86262'
    c.fillRect(mouse.x, mouse.y, 100, 100)
    

    // blue rectangle
    c.fillStyle = '#92ABEA';
    c.fillRect(canvas.width / 2 - 50, canvas.height / 2 - 50, 100, 100);


};

animate();


