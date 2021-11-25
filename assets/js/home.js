// jshint esversion: 8
/**!
 * @package   360Net
 * @filename  home.js
 * @version   1.0
 * @author    Díaz Urbaneja Víctor Eduardo Diex <diazvictor@tutamail.com>
 * @date      17.11.2021 14:22:21 -04
 */

let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
	let front = card.querySelector(".front");
	let showBack = front.querySelector(".show-back");
	let back = card.querySelector(".back");

	showBack.addEventListener("click", () => {
		back.classList.toggle("is-active");
	});
});
