
var pos = 0;
let pageWidth = window.innerWidth;

//Array containing images
const pacArray = [
  ['./images/pacman1.png', './images/pacman2.png'], //Left to right 2 images
  ['./images/pacman3.png', './images/pacman4.png'], // Right to left 2 images
];

var direction = 0;
//Left to right OR right to left (0 OR 1)
var focus = 0;
// Adding 1 and getting the modulus. So we it's even it will be 0. Odd will be 1.

// This function is called on mouse click. Every time it is called, it updates the PacMan image, position and direction on the screen.
function Run() {
  let img = document.getElementById('PacMan');
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
  }
}

setInterval(Run, 200);

function checkPageBounds(direction, imgWidth, pos, pageWidth) {

  if (pos < 0 || pos > (pageWidth - imgWidth)) {
            direction = 1 - direction;
        }       
  return direction;
}
