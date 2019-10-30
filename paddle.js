// paddle.ts
var Game = /** @class */ (function () {
    function Game(name) {
        this.dirX = 1.0;
        this.dirY = 1.0;
        this.name = name;
        this.gcanvas = document.getElementById("GameCanvas");
        this.gctx = this.gcanvas.getContext('2d');
    }
    Game.prototype.sayHello = function () {
        console.log("Html canvas height = " + this.gcanvas.height + ", width = " + this.gcanvas.width);
        /* for (let i = 0; i < 10; i ++) {
            let x: number = Math.round(Math.random() * this.gcanvas.width / 2);
            let y: number = Math.round(Math.random() * this.gcanvas.height / 2);
            let width: number = Math.round(Math.random() * this.gcanvas.width / 2);
            let height: number = Math.round(Math.random() * this.gcanvas.height / 2);
            this.gctx.strokeStyle = 'rgb(0, ' + Math.floor(x % 255) + ', ' +
                         Math.floor(y % 255) + ')';
            this.gctx.strokeRect(x, y, width, height);
            console.log(" x=" + x + " y = " + y + " width = " + width + " height = " + height);
        }
        this.gctx.fillStyle = 'green';
        this.gctx.fillRect(10, 10, 50, 50);
        return "Hello " + this.name;
        */
    };
    Game.prototype.init = function () {
        this.ballY = this.gcanvas.height / 2;
        this.ballX = this.gcanvas.width / 2;
        this.drawBricks();
        this.drawBall();
    };
    Game.prototype.drawBricks = function () {
        this.gctx.strokeStyle = 'rgb(255,10,10)';
        for (var i = 0; i < Game.COLS; i++) {
            for (var j = 0; j < Game.ROWS; j++) {
                var x = i * (Game.BRICK_WIDTH + Game.GUTTER_X) + Game.OFFSET_X;
                var y = j * (Game.BRICK_HEIGHT + Game.GUTTER_Y) + Game.OFFSET_Y;
                this.gctx.strokeRect(x, y, Game.BRICK_WIDTH, Game.BRICK_HEIGHT);
            }
        }
    };
    Game.prototype.drawBall = function () {
        this.ballX += this.dirX * Game.BALL_VEL_X;
        this.ballY += this.dirY * Game.BALL_VEL_Y;
        if (this.ballX <= Game.BALL_VEL_X && this.dirX < 0.0) {
            this.dirX = 1.0;
        }
        else if (this.ballX >= (this.gcanvas.width - Game.BALL_VEL_X) && this.dirX > 0.0) {
            this.dirX = -1.0;
        }
        if (this.ballY <= Game.BALL_VEL_Y && this.dirY < 0.0) {
            this.dirY = 1.0;
        }
        else if (this.ballY >= (this.gcanvas.height - Game.BALL_VEL_Y) && this.dirY > 0.0) {
            this.dirY = -1.0;
        }
        this.gctx.strokeStyle = 'rgb(10,10,255)';
        this.gctx.beginPath();
        this.gctx.arc(this.ballX, this.ballY, Game.BALL_RADIUS, 0, Math.PI * 2, true);
        this.gctx.stroke();
    };
    // All of the animation goes in here.
    Game.prototype.gameAnimation = function () {
        this.drawBall();
        window.requestAnimationFrame(this.gameAnimation);
    };
    Game.BRICK_WIDTH = 35;
    Game.BRICK_HEIGHT = 15;
    Game.GUTTER_X = 7;
    Game.GUTTER_Y = 4;
    Game.OFFSET_X = 10;
    Game.OFFSET_Y = 10;
    Game.ROWS = 8;
    Game.COLS = 16;
    Game.BALL_RADIUS = 10;
    Game.BALL_VEL_X = 3;
    Game.BALL_VEL_Y = 3;
    return Game;
}());
var myGame = new Game("This is a test game");
console.log(" what does the game say: " + myGame.sayHello());
myGame.init();
requestAnimationFrame(myGame.gameAnimation);
