// paddle.ts

class Game {

    name: string;

    constructor(name: string) {
            this.name = name;
    }

    sayHello() {
        return "Hello " + this.name;
    }
}


let myGame = new Game("This is a test game");
console.log(" what does the game say: " + myGame.sayHello());
