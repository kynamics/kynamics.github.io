// paddle.ts
var Game = /** @class */ (function () {
    function Game(name) {
        this.name = name;
        this.gcanvas = document.getElementById("GameCanvas");
        this.gctx = this.gcanvas.getContext('2d');
    }
    Game.prototype.sayHello = function () {
        this.gctx.fillStyle = 'green';
        this.gctx.fillRect(10, 10, 50, 50);
        return "Hello " + this.name;
    };
    return Game;
}());
var myGame = new Game("This is a test game");
console.log(" what does the game say: " + myGame.sayHello());
