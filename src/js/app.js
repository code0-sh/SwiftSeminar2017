'use strict';

import AnimetePripherals from './components/AnimetePripherals';

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
new AnimetePripherals();