'use strict';

function player(src) {
  this.x = canvas.width / 2;
  this.y = 0;
  this.ySpeed = 0;
  this.rot = 0;
  this.rSpeed = 0;

  this.img = new Image();
  this.img.src = src;

  this.play = function () {
    p1 = canvas.height - road(carspeed + this.x) * 0.25;
    p2 = canvas.height - road(carspeed + 5 + this.x) * 0.25;
    //地面に接地していなければ落下させる
    if (p1 - size > this.y) {
      this.ySpeed += 0.1;
      grounded = 0;
    } else {
      this.ySpeed -= this.y - (p1 - size);
      this.y = p1 - size;
      grounded = 1;
    }

    if (!playing || grounded && Math.abs(this.rot) > Math.PI * 0.5) {
      playing = false;
      this.rSpeed = 0;
      key.x = 0;
      key.z = 0;
      key.ArrowRight = 0;
      key.ArrowLeft = 0;
      speed -= speed * 0.5;
      //speed = 0;
    }

    angle = Math.atan2((p2 - size) - this.y, (this.x + 5) - this.x);

    this.y += this.ySpeed;

    if (grounded && playing) {
      this.rot -= (this.rot - angle) * 0.5;
      this.rSpeed = this.rSpeed - (angle - this.rot);
    }

    this.rSpeed += (key.ArrowLeft - key.ArrowRight) * 0.05;
    this.rot -= this.rSpeed * 0.05;

    if (this.rot > Math.PI) this.rot = -Math.PI;
    if (this.rot < -Math.PI) this.rot = Math.PI;

    drawScore();
    drawTime();
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rot);
    ctx.drawImage(this.img, -size, -size, objectheight, objectwidth);
    ctx.restore();
  }
}