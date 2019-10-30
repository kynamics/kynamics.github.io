// paddle.ts

class Game {

    public static readonly BRICK_WIDTH = 25;
    public static readonly BRICK_HEIGHT = 10;
    public static readonly GUTTER_X = 4;
    public static readonly GUTTER_Y = 2;

    name: string;
    gcanvas: HTMLCanvasElement;
    gctx: CanvasRenderingContext2D;

    constructor(name: string) {
            this.name = name;
            this.gcanvas = document.getElementById("GameCanvas") as HTMLCanvasElement;
            this.gctx = this.gcanvas.getContext('2d');
    }

    sayHello() {
        console.log("Html canvas height = " + this.gcanvas.height + ", width = " + this.gcanvas.width);
        this.drawBricks();

        /* for (let i = 0; i < 10; i ++) {
            let x: number = Math.round(Math.random() * this.gcanvas.width / 2);
            let y: number = Math.round(Math.random() * this.gcanvas.height / 2);
            let width: number = Math.round(Math.random() * this.gcanvas.width / 2);
            let height: number = Math.round(Math.random() * this.gcanvas.height / 2);
            this.gctx.strokeStyle = 'rgb(0, ' + Math.floor(x % 255) + ', ' + 
                         Math.floor(y % 255) + ')';
            this.gctx.strokeRect(x, y, width, height);
            console.log(" x=" + x + " y = " + y + " width = " + width + " height = " + height);
        } */
        this.gctx.fillStyle = 'green';
        this.gctx.fillRect(10, 10, 50, 50);
        return "Hello " + this.name;
    }

    drawBricks() {
        this.gctx.strokeStyle  = 'rgb(255,10,10)';
        for (let i = 0; i < 20; i ++) {
            for (let j = 0; i < 5; j ++) {
                let x: number = i * Game.BRICK_WIDTH + Game.GUTTER_X;
                let y: number = j * Game.BRICK_HEIGHT + Game.GUTTER_Y;
                this.gctx.strokeRect(x, y, Game.BRICK_WIDTH, Game.BRICK_HEIGHT);
            }
        }

    }
}

let myGame = new Game("This is a test game");
console.log(" what does the game say: " + myGame.sayHello());
