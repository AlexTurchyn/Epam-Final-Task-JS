"use strict";

var _saveItemID = require("./saveItemID");

var _products = require("../products");

{
  var name = document.getElementById("name"),
      description = document.getElementById("description"),
      price = document.getElementById("price");
  name.innerHTML = _products.products[_saveItemID.numID.itemID].name;
  description.innerHTML = _products.products[_saveItemID.numID.itemID].description;
  var cost = _products.products[_saveItemID.numID.itemID].cost;
  price.innerHTML = "\xA3".concat(cost.toFixed(2));
}