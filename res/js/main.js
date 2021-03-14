import Ball from './ball.js'
import GameController from "./GameController.js";

//Global variables
let canvas = document.getElementById('game');
let gameContext = canvas.getContext("2d");
let resetBtn = document.getElementById('reset-btn');
let startBtn = document.getElementById('start-btn')

let ballRadius = 10;
let ballColour = '#000000'
let ballSpeed = {x: 2, y: 2};
let balls = [];
let gameController = null;

startBtn.onclick = function() {
    balls = Ball.generateListOfRandomBalls(10, ballRadius, ballColour, ballSpeed);
    gameController = new GameController(gameContext, canvas, balls, ballSpeed);
    gameController.start();
    resetBtn.disabled = false;
    startBtn.disabled = true;
}

resetBtn.onclick = function (){
    balls = [];
    gameController.reset();
    gameContext.clearRect(0, 0, canvas.width, canvas.height);
    resetBtn.disabled = true;
    startBtn.disabled = false;
}