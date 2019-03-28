"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAdv = setAdv;

function setAdv(props) {
  var link = document.createElement("a");
  link.className = "_advLinkDefault";
  link.href = props.link;
  link.innerHTML = "<img src=".concat(props.img, " alt=").concat(props.title, " class=\"HomepagePhoto\">");
  return link;
}