import { SNAKE_SPEED, draw as snakeDraw, update as snakeUpdate } from './Snake/index.js'
import { gameboard } from './Board/index'


let lastTimeRender = 0;

function main(currentTime) {
    window.requestAnimationFrame(main);

    const secondsSinceLastRender = (currentTime - lastTimeRender) / 1000;

    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    lastTimeRender = currentTime;

    update();

    draw();
}

function update() {
    snakeUpdate();
}

function draw() {
    snakeDraw();
}

window.requestAnimationFrame(main)