// PacMen Exercise 

var pos = 0;
//Array containing images
const pacArray = [
    ["./images/pacman1.png", "./images/pacman2.png"], //Left to right 2 images
    ["./images/pacman3.png", "./images/pacman4.png"], // Right to left 2 images
];
var direction = 0;
//Left to right OR right to left (0 OR 1)
const pacMen = []; 

function setToRandom(scale) {
    return {
        x: Math.random() * scale,
        y: Math.random() * scale
    }
}
// Factory to make a PacMan at a random position with random velocity
function makePac() {
    let velocity = setToRandom(25); 
    let position = setToRandom(200);
    let game = document.getElementById('game');
    let newimg = document.createElement('img');
    
    newimg.style.position = 'absolute';
    newimg.src = "./images/pacman1.png";  

    newimg.width = 100;
    newimg.style.left = position.x + 'px';
    newimg.style.top = position.y + 'px';
    game.appendChild(newimg);

    let direction = 0;
    let counter = 0;

    return {
        position,
        velocity,
        direction,
        counter,
        newimg
    }
}

// Change images
function update() {
    pacMen.forEach((item) => {
        checkCollisions(item)

        if (item.direction == 0) {
            if (item.counter % 2 == 0) {
                item.newimg.src = 'images/pacman1.png';
            } else {
                item.newimg.src = 'images/pacman2.png';
            }
        } else {
            if (item.counter % 2 == 0) {
                item.newimg.src = 'images/pacman3.png';
            } else {
                item.newimg.src = 'images/pacman4.png';
            }
        }

        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;

        item.newimg.style.left = item.position.x;
        item.newimg.style.top = item.position.y;
        item.counter += 1;
    })

    setTimeout(update, 100);
}

// Direction for hitting screen sides
function checkCollisions(item) {

    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    
    if (item.position.y >= (windowHeight - 100)) {
        directionY = 1;
        item.velocity.y *= -1;
    } else if (item.position.y <= 0) {
        directionY = 0;
        item.velocity.y *= -1;
    }

    if (item.position.x >= (windowWidth - 100)) {
        item.direction = 1;
        directionX = 1;
        item.velocity.x *= -1;
    } else if (item.position.x <= 0) {
            item.direction = 0;
            directionX = 0;
            item.velocity.x *= -1;
    }
}

// Function to add new Pacmen
function makeOne() {
    pacMen.push(makePac());
}