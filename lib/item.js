"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.item = item;

function item(props) {
  var product = document.createElement("div");
  product.id = props.id;
  product.classList.add("ProductCell");
  product.innerHTML = "\n      <div class=\"ProductCell-Img\">\n          <a href=".concat(props.link, " class=\"_a\">\n            <p class=\"ProductCell-WrapperText\">View Item</p> \n            <img src=").concat(props.img, " alt=\"\" class=\"HomepagePhoto\">\n          </a>\n      </div>\n      <div class=\"ProductCell-Def\">\n          <p class=\"ProductCell-Name\">").concat(props.name, "</p>\n          <p style=\"text-align: center\">&pound;").concat(props.cost.toFixed(2), "</p>\n      </div>\n  ");
  return product;
}