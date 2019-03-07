"use strict";

var burger = document.querySelectorAll(".MobileNavigation-Burger");

burger[0].onclick = function () {
  var nav = document.querySelectorAll(".MobileNavigation-Navigation");
  nav[0].classList.toggle("MobileNavigation-Navigation_display_none");
};

if (document.documentElement.clientWidth >= 768) {
  var templateName = document.getElementById("templateName");
  templateName.innerHTML = "Template";
}