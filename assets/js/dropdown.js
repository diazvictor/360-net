// jshint esversion: 8
/**!
 * @package   360Net
 * @filename  dropdown.js
 * @version   1.0
 * @author    Díaz Urbaneja Víctor Eduardo Diex <diazvictor@tutamail.com>
 * @date      24.11.2021 16:39:16 -04
 */

let dropdowns = document.querySelectorAll(".navbar.is-mobile .dropdown");
let navbarMobile = document.querySelector(".navbar.is-mobile");
let navbarButton = document.querySelector(".navbar .navbar-menu");

navbarButton.addEventListener("click", () => {
	navbarMobile.classList.toggle("is-active");
});

dropdowns.forEach((dropdown) => {
	dropdownButton = dropdown.querySelector(".dropdown-toggle");
	dropdownClose = dropdown.querySelector(".dropdown-close");
	dropdownMenu = dropdown.querySelector(".dropdown-menu");

	dropdownButton.addEventListener("click", () => {
		dropdownButton = dropdown.querySelector(".dropdown-toggle");
		dropdownMenu = dropdown.querySelector(".dropdown-menu");

		dropdownButton.classList.toggle("is-active");
		dropdownMenu.classList.toggle("is-active");
	});

	dropdownClose.addEventListener("click", () => {
		dropdownButton.classList.remove("is-active");
		dropdownMenu.classList.remove("is-active");
	});
});
