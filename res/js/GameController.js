export default class GameController {

    constructor(context, canvas, balls, intervalID = 0) {
        this.context = context;
        this.canvas = canvas;
        this.balls = balls;
        this.invervalID = intervalID;
    }

    addBall = (ball) => this.balls.push(ball);

    draw = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let cWidth = this.canvas.width;
        let cHeight = this.canvas.height;
        this.balls.forEach(ball => {
            ball.drawBall(this.context);
            if( ball.getX() < 0 || ball.getX() > cWidth){
                ball.flipDX();
            }
            if( ball.getY() < 0 || ball.getY() > cHeight){
                ball.flipDY();
            }
            ball.incX(ball.DX);
            ball.incY(ball.DY);
        })
    }

    start = () => {
        this.invervalID = setInterval(this.draw, 0.5);
    }
    reset = () => clearInterval(this.invervalID);
}