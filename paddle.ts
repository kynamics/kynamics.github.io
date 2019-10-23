// paddle.ts

class Game {

    name: string;
    gcanvas: HTMLCanvasElement;
    gctx: CanvasRenderingContext2D;

    constructor(name: string) {
            this.name = name;
            this.gcanvas = document.getElementById("GameCanvas") as HTMLCanvasElement;
            this.gctx = this.gcanvas.getContext('2d');
    }

    sayHello() {
        this.gctx.fillStyle = 'green';
        this.gctx.fillRect(10, 10, 50, 50);
        return "Hello " + this.name;
    }
}


let myGame = new Game("This is a test game");
console.log(" what does the game say: " + myGame.sayHello());
