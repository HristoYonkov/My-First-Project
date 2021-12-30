// Classess >>>>>>>>>>
// paddle ---
class Paddle {
    constructor (gameWidth, gameHeight) {
        this.width = 150;
        this.height = 20;
        this.gameWidth = gameWidth;

        this.maxSpeed = 7;
        this.speed = 0;

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10,
        }
    }

    moveLeeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = +this.maxSpeed;
    }

    stop() {
        this.speed = 0;
    }

    draw (ctx) {
        ctx.fillStyle = 'orange';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        if (!deltaTime) return;
        this.position.x += this.speed;

        if (this.position.x + this.width > this.gameWidth) 
            this.position.x = this.gameWidth - this.width;

        if (this.position.x < 0) this.position.x = 0;

    }
}

// inputHandler --- 
class InputHandler {

    constructor (paddle) {
        document.addEventListener('keydown', event => {

            switch(event.keyCode) {
                case 37:
                    paddle.moveLeeft();
                    break;

                case 39:
                    paddle.moveRight();
                    break;
            }
        });

        document.addEventListener('keyup', event => {

            switch(event.keyCode) {
                case 37:
                    if (paddle.speed < 0)
                    paddle.stop();
                    break;

                case 39:
                    if (paddle.speed > 0)
                    paddle.stop();
                    break;
            }
        })
    }
}

// Classes <<<<<<<<<<<<

let canvas = document.getElementById('gameScreen');

let ctx = canvas.getContext('2d');

const gameWidth = 800;
const gameHeight = 800;


let paddle = new Paddle(gameWidth, gameHeight);

paddle.draw(ctx);

new InputHandler(paddle)

lastTime = 0;

function gameloop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, 800, 800);
    paddle.update(deltaTime);
    paddle.draw(ctx);
    requestAnimationFrame(gameloop);
}

gameloop();