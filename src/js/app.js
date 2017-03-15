'use strict';

var HelloReact = React.createClass({
  render() {
    return (
      <div className="container">{this.props.name}</div>
    );
  }
});

React.render(<HelloReact name="" />, document.getElementById("react"));

/**
 * codeのfadeIn, fadeOut
 */
var playground = document.querySelector(".playground");
var answerBtns = document.querySelectorAll(".answerBtn");

playground.addEventListener("click", function(ev){
	let target = ev.target;
	if (target.classList.contains('step-num')){
		let elitem = target.parentElement.nextSibling.nextSibling;
		let elmark = target.childNodes[0];

		if (elitem.classList.contains("is-open")) {
			elitem.classList.remove("is-open");
			elmark.classList.remove("fa-minus-square");
			elmark.classList.add("fa-plus-square");
		} else {
			elitem.classList.add("is-open");
			elmark.classList.remove("fa-plus-square");
			elmark.classList.add("fa-minus-square");
		}
	}
});

for (var i = 0; i < answerBtns.length; i++) {
	answerBtns[i].addEventListener("click", function(ev){
		let target = ev.target.nextSibling.nextSibling;
		if (target.classList.contains("hidden")) {
			target.classList.remove("hidden");
		} else {
			target.classList.add("hidden");
		}
	})
};

// ================ ペリペラルのアニメーション ===============
(function(){
	let canvas = document.getElementById("canvas-peripherals");
	let ctx = canvas.getContext("2d");
	let speed = 2;
	let circle_scale = 0;
	let requestId;
	let image;

	// 画像を描画
	(function(){
		image = new Image();
		image.src = "./images/iphone.png";
		image.load = function() {
			ctx.drawImage(image, 85, 48, 32, 64);
		}
	})();
	function drawImage() {
		ctx.drawImage(image, 85, 48, 32, 64);
	}

	// 円を描画
	function drawCircle(circle_scale) {
		ctx.beginPath();
		ctx.arc(100, 80, circle_scale, 0, Math.PI*2, false);
		ctx.strokeStyle = "#4169e1";
		ctx.stroke();
	}

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

	// アニメーション
	function loop() {
		requestId = requestAnimFrame(loop);
	  // 描画をクリア
	  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	  // 円を拡大
	  circle_scale += speed;
	  // 円を描画
	  drawCircle(circle_scale);
	  // 画像を描画
	  drawImage();
	}

	// 3秒間隔でアニメーションを繰り返す。
	window.setInterval(function(){
		var cancelAnimationFrame = window.cancelAnimationFrame ||
															 window.mozcancelAnimationFrame ||
														 	 window.webkitcancelAnimationFrame ||
														 	 window.mscancelAnimationFrame;
		window.cancelAnimationFrame = cancelAnimationFrame;
		window.cancelAnimationFrame(requestId)
		circle_scale = 0
		loop();
	}, 3000);

})();


