"use strict";

var _products = require("./products");

var _item = require("./item");

var _saveItemID = require("./ItemDetails/saveItemID");

{
  var catalog = document.getElementById("catalog");
  catalog.addEventListener("click", function (e) {
    var target = e.target;

    while (target != catalog) {
      if (target.classList.contains("ProductCell")) {
        _saveItemID.numID.itemID = target.id;
        return;
      }

      target = target.parentNode;
    }
  });
  var count = 0;

  while (count < 8) {
    var elem = (0, _item.item)(_products.products[count]);
    elem.classList.add("Catalog-Specific");
    catalog.appendChild(elem);
    count++;
  }

  var infSection = document.createElement("div");
  infSection.classList.add("Catalog-InformationOnPage");
  infSection.innerHTML = "\n      <p class=\"InformationOnPage-Upper\">Last weekend <span style=\"color:#f14a58; letter-spacing: 0.72px;\"> extra 50% </span>\n          off on all reduced boots and shoulder bags</p>\n      <p class=\"InformationOnPage-Lower\">This offer is valid in-store and online. Prices displayd reflect this additional discount. \n          This offer ends at 1159 GMT on March 1st 2015</p>";
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight || e.clientHeight || g.clientHeight;

  if (x < 768) {
    catalog.insertBefore(infSection, catalog.children[2]);
  }

  if (x >= 768 && x < 1024) {
    catalog.insertBefore(infSection, catalog.children[3]);
  }

  if (x >= 1024) {
    catalog.insertBefore(infSection, catalog.children[4]);
  }

  var btnShow = document.getElementById("Catalog-BtnShowMore");
  btnShow.addEventListener("click", function () {
    while (count < _products.products.length) {
      var prod = (0, _item.item)(_products.products[count]);
      prod.classList.add("Catalog-Specific");
      catalog.appendChild(prod);
      count++;
    }

    btnShow.style.display = "none";
  });
}