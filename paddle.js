// paddle.ts
var Game = /** @class */ (function () {
    function Game(name) {
        this.name = name;
    }
    Game.prototype.sayHello = function () {
        return "Hello " + this.name;
    };
    return Game;
}());
var myGame = new Game("This is a test game");
console.log(" what does the game say: " + myGame.sayHello());
