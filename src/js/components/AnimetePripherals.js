'use strict';

export default class AnimetePripherals {
  constructor() {
    this.canvas = document.getElementById("canvas-peripherals");
    this.ctx = this.canvas.getContext("2d");
    this.speed = 2;
    this.circle_scale = 0;
    this.requestId;
    this.image = new Image();
    this.image.src = "./images/iphone.png";
    this.init();
  }

  // 画像を描画
  drawImage() {
    this.ctx.drawImage(this.image, 85, 48, 32, 64);
  }

  // 円を描画
  drawCircle(circle_scale) {
    this.ctx.beginPath();
    this.ctx.arc(100, 80, this.circle_scale, 0, Math.PI*2, false);
    this.ctx.strokeStyle = "#4169e1";
    this.ctx.stroke();
  }

  // アニメーション
  loopAnimate() {
    let self = this;
    this.requestId = window.requestAnimFrame(function(){self.loopAnimate();});
    // 描画をクリア
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    // 円を拡大
    this.circle_scale += this.speed;
    // 円を描画
    this.drawCircle(this.circle_scale);
    // 画像を描画
    this.drawImage();
  }

  init() {
    // requestAnimFrameの設定
    window.requestAnimFrame = (function() {
      return  window.requestAnimationFrame   ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              window.oRequestAnimationFrame      ||
              window.msRequestAnimationFrame     ||
              function(callback){
                window.setTimeout(callback, 1000 / 60);
              };
    })();

    // 3秒間隔でアニメーションを繰り返す。
    setInterval(() => {
      var cancelAnimationFrame = window.cancelAnimationFrame ||
                                 window.mozcancelAnimationFrame ||
                                 window.webkitcancelAnimationFrame ||
                                 window.mscancelAnimationFrame;
      window.cancelAnimationFrame = cancelAnimationFrame;
      window.cancelAnimationFrame(this.requestId);
      this.circle_scale = 0;
      this.loopAnimate();
    }, 3000);
  }
};