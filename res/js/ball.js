export default class Ball {
    constructor(id, x, y, angle, radius, colour, dX, dY) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.a = angle;
        this.r = radius;
        this.c = colour;
        this.dX = dX;
        this.dY = dY;
    }

    getX = () => this.x;
    getY = () => this.y;
    get DX() {
        return this.dX;
    }
    get DY() {
        return this.dY;
    }

    incX = (inc) => this.x += inc;
    incY = (inc) => this.y += inc;
    flipDX() {
        this.dX = -this.dX;
    }
    flipDY(){
        this.dY = -this.dY;
    }

    drawBall = (context) => {
        context.beginPath();
        context.arc(this.x, this.y, this.r, this.a, Math.PI*2, true);
        context.fillStyle = this.c;
        context.fill();
        context.closePath();
    }

    getBall = () => `ID: ${this.id} [X:${this.x}, Y:${this.x}, A:${this.a}, R:${this.r}, C:${this.c}]`;

    static generateRandomBall(radius, colour, ballSpeed){
        let id = Math.floor(Math.random() * 10000);
        let x = this.randomNumber(1, 500);
        let y = this.randomNumber(1, 500);
        let a = this.randomNumber(1, 180);
        return new Ball(id, x, y, a, radius, colour, ballSpeed.x, ballSpeed.y);
    }

    static generateListOfRandomBalls(count, radius, colour, ballSpeed){
        let list = [];
        let i;
        for (i = 0; i < count; i++){
            list.push(this.generateRandomBall(radius, colour, ballSpeed));
        }
        return list;
    }

    static randomNumber(min, max){
        const r = Math.random()*(max-min) + min
        return Math.floor(r)
    }

}