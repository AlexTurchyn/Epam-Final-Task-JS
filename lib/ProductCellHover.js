"use strict";

var wrappers = document.querySelectorAll(".ProductCell-ImgWrapper");
wrappers = [].slice.call(wrappers);
console.log(wrappers);
wrappers.forEach(function (wrapper) {
  wrapper.style.height = wrapper.parentElement.offsetHeight + "px";
  console.log(wrapper.style.height);
});