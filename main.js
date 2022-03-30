'use strict';
let carspeed = 0;
let p1 = 0;
let p2 = 0;
let temp = 0;
let grounded = 0;
let size = 30;
let objectheight = 100;
let objectwidth = 60;
let playing = true;
let angle = 0;
let key = {
  x: 0,
  z: 0,
  ArrowLeft: 0,
  ArrowRight: 0
};
//キー操作
onkeydown = d => key[d.key] = 1;
onkeyup = d => key[d.key] = 0;

//player1を作成
const player1 = new player("images/4runner.png");
//背景を作成
const background = new Image();
background.src = "images/bg_pattern1_aozora.png";
//main関数を実行
main();

function main() {
  //地面を描画
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#FFCC99";
  ctx.beginPath();
  ctx.moveTo(0, canvas.height);

  //接地していてプレイ中の場合、キー操作によって車を前後
  if (grounded && playing) {
    temp -= (temp - (key.x - key.z)) * 0.05;
  }
  carspeed += 10 * temp;

  //地面をアニメーション
  for (let i = 0; i < canvas.width; i++) {
    ctx.lineTo(i, canvas.height - road(carspeed + i) * 0.25);
  }
  ctx.lineTo(canvas.width, canvas.height);
  ctx.fill();
  //0m以下にならないように制御
  if (score < 0) {
    carspeed = 0;
    score = 0;
  }
  //プレイ中ならば
  if (playing) {
    //main関数を更新
    requestAnimationFrame(main);
    //スコアと時間を更新
    score += temp * 0.1;
    time += 0.01;
  } else {
    //ゲームオーバーの処理
    let reset = window.confirm("GameOver！記録は " + Math.round(score) + "m でした。" + "もう一度遊びますか？");
    if (reset) {
      location.reload();
    }
  }
  player1.play();
}