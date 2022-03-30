'use strict';
let score = 0;
let time = 0;

function drawScore() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("記録: " + Math.round(score) + " M", 10, 25);
}

function drawTime() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("プレイ時間: " + Math.round(time) + " 秒", 10, 50);
}