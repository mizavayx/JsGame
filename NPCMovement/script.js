/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 800);
let gameSpeed = 5;

class PingPong {
  constructor(speedModifier) {
    this.x = 10;
    this.y = 10;
    this.dx = 1; // directions
    this.dy = 1;
    this.width = 100;
    this.height = 100;
    this.speedModifier = speedModifier;
    this.speed = gameSpeed * this.speedModifier;
  }

  update() {
    this.speed = gameSpeed * this.speedModifier;
    if (this.x <= 0 || this.x >= CANVAS_WIDTH - this.width) this.dx *= -1;
    if (this.y <= 0 || this.y >= CANVAS_HEIGHT - this.height) this.dy *= -1;

    this.x += this.speed * this.dx;
    this.y += this.speed * this.dy;
  }

  draw() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const object = new PingPong(1);

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  object.update();
  object.draw();

  requestAnimationFrame(animate);
}

animate();
