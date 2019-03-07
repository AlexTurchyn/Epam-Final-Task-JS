"use strict";

// importScripts("@babel/polyfill") ;
// importScripts("./products");
// import {products}  from "./products";   
// console.log(products[0]);
var products = [{
  id: 0,
  name: "Boyfriend T-Shirt with Bohemian Print",
  cost: 34.25,
  img: "../img/products/Boyfriend.png"
}, {
  id: 1,
  name: "Turtle Neck Jumper in Rib",
  cost: 55.21,
  img: "../img/products/Turtle.png"
}, {
  id: 2,
  name: "Only Skinny Jeans",
  cost: 65.50,
  img: "../img/products/SkinnyJeans.png"
}, {
  id: 3,
  name: "Boyfriend T-Shirt with Bohemian Print",
  cost: 86.75,
  img: "../img/products/BoyTShirtBohemianPrint.png"
}, {
  id: 4,
  name: "With Patchwork Crochet",
  cost: 80.60,
  img: "../img/pruducts/PatchCrochet.png"
}, {
  id: 5,
  name: "Monki Festival Kinitted",
  cost: 24.75,
  img: "../img/pruducts/MonkiFestivalKinitted.png"
}, {
  id: 6,
  name: "Only Busted Knee Jean",
  cost: 140.50,
  img: "../img/pruducts/OnlyBustedKneeJeanTable.png"
}, {
  id: 7,
  name: "Paul & Joe Sister Jumper with Neon Trims",
  cost: 19.75,
  img: "../img/pruducts/PaulJoeSisterJumper.png"
}, {
  id: 8,
  name: "Oversized Cardigan",
  cost: 90.00,
  img: "../img/pruducts/OversizedCardigan.png"
}, {
  id: 9,
  name: "Neck Knitted Jumper",
  cost: 76.25,
  img: "../img/pruducts/NeckKnittedJumperTable.png"
}, {
  id: 9,
  name: "levi's Jeans for women",
  cost: 76.25,
  img: "../img/pruducts/LevisBuyersChoice.png"
}];

function renderProduct(props) {
  var product = document.createElement("div");
  product.id = props.id;
  product.classList.add("ProductCell");
  product.innerHTML = "\n        <div id=\"ProductCell-Img\">\n            <img src=".concat(props.img, " alt=\"\" class=\"HomepagePhoto\">\n            <div class=\"ProductCell-ImgWrapper\"><a href=\"#\" class=\"_a\">View Item</a></div>\n        </div>\n        <div class=\"ProductCell-Def\">\n            <p class=\"ProductCell-Name\">").concat(props.name, "</p>\n            <p style=\"text-align: center\">&pound;").concat(props.cost.toFixed(2), "</p>\n        </div>\n    ");
  return product;
}

var newArrivlas = document.getElementById("newArrivals");
var n = newArrivlas.getAttribute("data-countImg");
var counter = 0;

while (counter <= n) {
  var prod = renderProduct(products[counter]);
  console.log(prod);

  if (counter < 2) {
    prod.classList.add("w375");
  }

  if (counter == 2) {
    prod.classList.add("w768");
  }

  if (counter == 3) {
    prod.classList.add("w1024");
  }

  newArrivlas.appendChild(prod);
  counter++;
}