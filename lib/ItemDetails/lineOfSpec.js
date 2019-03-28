"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.line = line;

var _specBlock = require("./specBlock");

function line(props) {
  var line = document.createElement("div");
  var lineLabel = document.createElement("div");
  lineLabel.className = "ItemDetails-LineLabel";
  lineLabel.innerHTML = props.title[0].toUpperCase() + props.title.substr(1) + ":";
  line.appendChild(lineLabel); //create radioButtons 

  props.arr.forEach(function (spec, i) {
    var input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", props.title);
    input.setAttribute("id", spec + i);
    input.setAttribute("value", spec);
    input.style.display = "none"; //return label

    var nextProps = {
      value: spec,
      id: i
    };
    var label = (0, _specBlock.specBlock)(nextProps);
    line.appendChild(input);
    line.appendChild(label);
  });
  return line;
}