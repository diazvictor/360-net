// jshint esversion: 8
/**!
 * @package   360Net
 * @filename  navbar.js
 * @version   1.0
 * @author    Díaz Urbaneja Víctor Eduardo Diex <diazvictor@tutamail.com>
 * @date      20.11.2021 20:56:38 -04
 */

let menu = document.querySelector("header > .dropdown");
	menuToggle = document.querySelector('header > .navbar [data-name]');

menuToggle.addEventListener('click', (e) => {
	e.target.classList.toggle('is-active');
	menu.classList.toggle("is-active");
});

const navbarMobile = document.querySelector("header > .navbar.is-mobile");
	navbarButton = document.querySelector("header > .navbar .navbar-menu");
let dropdownToggle = document.querySelector("header > .navbar.is-mobile .dropdown .dropdown-toggle");
	dropdownMenu = document.querySelector("header > .navbar.is-mobile .dropdown .dropdown-menu");
	dropdownClose = document.querySelector("header > .navbar.is-mobile .dropdown .dropdown-close");

navbarButton.addEventListener("click", () => {
	navbarMobile.classList.toggle("is-active");
});

dropdownToggle.addEventListener("click", (e) => {
	e.target.classList.toggle("is-active");
	dropdownMenu.classList.toggle("is-active");
});

dropdownClose.addEventListener("click", () => {
	dropdownToggle.classList.remove("is-active");
	dropdownMenu.classList.remove("is-active");
});
