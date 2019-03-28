"use strict";

var bagCounter = 0;
var btnBag = document.getElementById("ItemDetails-BtnAddToBag");
btnBag.addEventListener("click", function () {
  bagCounter++;
  var bag = document.getElementById("BagCounter");
  bag.innerHTML = bagCounter;
});