// paddle.ts
var Game = /** @class */ (function () {
    function Game(name) {
        this.name = name;
        this.gcanvas = document.getElementById("GameCanvas");
        this.gctx = this.gcanvas.getContext('2d');
    }
    Game.prototype.sayHello = function () {
        console.log("Html canvas height = " + this.gcanvas.height + ", width = " + this.gcanvas.width);
        for (var i = 0; i < 10; i++) {
            var x = Math.round(Math.random() * this.gcanvas.width / 2);
            var y = Math.round(Math.random() * this.gcanvas.height / 2);
            var width = Math.round(Math.random() * this.gcanvas.width / 2);
            var height = Math.round(Math.random() * this.gcanvas.height / 2);
            this.gctx.strokeStyle = 'rgb(0, ' + Math.floor(x % 255) + ', ' +
                Math.floor(y % 255) + ')';
            this.gctx.strokeRect(x, y, width, height);
            console.log(" x=" + x + " y = " + y + " width = " + width + " height = " + height);
        }
        this.gctx.fillStyle = 'green';
        this.gctx.fillRect(10, 10, 50, 50);
        return "Hello " + this.name;
    };
    return Game;
}());
var myGame = new Game("This is a test game");
console.log(" what does the game say: " + myGame.sayHello());
