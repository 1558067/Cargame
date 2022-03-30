'use strict';

function player(src) {
  this.xPosition = canvas.width / 2;
  this.yPosition = 0;
  this.ySpeed = 0;
  this.rot = 0;
  this.rSpeed = 0;

  this.img = new Image();
  this.img.src = src;

  this.play = function () {
    p1 = canvas.height - road(carspeed + this.xPosition) * 0.25;
    p2 = canvas.height - road(carspeed + 5 + this.xPosition) * 0.25;
    //地面に接地していなければ落下させる
    if (p1 - size > this.yPosition) {
      this.ySpeed += 0.3;
      grounded = 0;
    } else if (p1 - size < this.yPosition) {
      this.ySpeed -= this.yPosition - (p1 - size);
      this.yPosition = p1 - size;
      grounded = 1;
    }
    //転倒を判定
    if (!playing || grounded && Math.abs(this.rot) > Math.PI * 0.5) {
      playing = false;
      this.rSpeed = 0;
      key.x = 0;
      key.z = 0;
      key.ArrowRight = 0;
      key.ArrowLeft = 0;
      //speed -= speed * 0.5;
      yspeed = 0;
    }

    angle = Math.atan2((p2 - size) - this.yPosition, (this.xPosition + 5) - this.xPosition);
    this.yPosition += this.ySpeed;

    //接地していてプレイ中であれば
    if (grounded && playing) {
      this.rot -= (this.rot - angle) * 0.5;
      this.rSpeed = this.rSpeed - (angle - this.rot);
    }

    this.rSpeed += (key.ArrowLeft - key.ArrowRight) * 0.05;
    this.rot -= this.rSpeed * 0.07; //地面相と衝突時の車両の回転のしやすさ

    if (this.rot > Math.PI) this.rot = -Math.PI;
    if (this.rot < -Math.PI) this.rot = Math.PI;

    ctx.save();
    ctx.translate(this.xPosition, this.yPosition);
    ctx.rotate(this.rot);
    ctx.drawImage(this.img, -size, -size, objectheight, objectwidth);
    ctx.restore();
  }
}