import {products} from "../products"

{
let name = document.getElementById("name"),
    description=document.getElementById("description"), 
    price = document.getElementById("price");

let num = localStorage.getItem("ID"); 
name.innerHTML = products[num].name;
description.innerHTML = products[num].description;
let cost = products[num].cost;
price.innerHTML = `£${cost.toFixed(2)}`;
}
