import { gameboard } from '../Board/index.js'
import { getInputDirection } from './input.js'

export const SNAKE_SPEED = 5;

const snakeBody = [
    { x: 11, y: 11 },
    { x: 12, y: 11 },
    { x: 13, y: 11 },
]

export function update() {
    const getInputDirection = getInputDirection();

    snakeBody[0].x += getInputDirection.x;
    snakeBody[0].x += getInputDirection.y;
};

export function draw() {
    snakeBody.forEach(segment => {
        //criando elemento
        const snakeElement = document.createElement('div');

        //config css
        snakeElement.classList.add('snake');

        //posição
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridCollumnStart = segment.x;

        //append on DOM element
        gameboard.appendChild(snakeElement);
    });
};

export function collision(position) {
    return snakeBody.some(segment => {
        return position.x == segment.x && position.y == segment.y;
    });
};