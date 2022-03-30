'use strict';
let score = 0;
const startTime = Date.now();
let nowTime = 0;

function drawScore() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("記録: " + Math.round(score) + " M", 10, 25);
}

function drawTime() {
    nowTime = (Date.now() - startTime) / 1000;
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("プレイ時間: " + Math.round(nowTime) + " 秒", 10, 50);
}