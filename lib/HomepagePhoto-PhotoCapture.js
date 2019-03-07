"use strict";

var pictures = document.querySelectorAll(".HomepagePhoto-PhotoCapture_position");
pictures.forEach(function (pic) {
  console.log(pic.parentElement.clientHeight);
  pic.style.top = pic.parentElement.clientHeight / 10 + "px";
  pic.style.right = pic.parentElement.clientWidth / 8 + "px";
  pic.style.fontSize = pic.parentElement.clientWidth / 20 + "px";
});