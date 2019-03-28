"use strict";

var _lineOfSpec = require("./lineOfSpec");

var _saveItemID = require("./saveItemID");

var _products = require("../products");

{
  var board = document.getElementById("spec");
  var spec = _products.products[_saveItemID.numID.itemID].spec;
  var keys = Object.keys(spec);

  for (var i = 0; i < keys.length; i++) {
    var obj = {
      title: keys[i],
      arr: spec[keys[i]]
    };
    var lineOfSpec = (0, _lineOfSpec.line)(obj);
    board.appendChild(lineOfSpec);
  }
}