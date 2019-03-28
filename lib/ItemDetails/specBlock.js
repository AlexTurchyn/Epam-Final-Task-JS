"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.specBlock = specBlock;

function specBlock(props) {
  var block = document.createElement("label");
  block.className = "ItemDetails-SpecBlock";
  block.innerHTML = props.value;
  block.setAttribute("for", props.value + props.id);
  return block;
}