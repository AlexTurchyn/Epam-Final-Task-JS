"use strict";

var _products = require("./products");

var _item = require("./item");

var _saveItemID = require("./ItemDetails/saveItemID");

{
  var newArrivlas = document.getElementById("newArrivals");
  newArrivlas.addEventListener("click", function (e) {
    var target = e.target;

    while (target != newArrivlas) {
      if (target.classList.contains("ProductCell")) {
        _saveItemID.numID.itemID = target.id;
        return;
      }

      target = target.parentNode;
    }
  });

  for (var i = 0; i < 4; i++) {
    var elem = (0, _item.item)(_products.products[i]);
    newArrivlas.appendChild(elem);
  }
}