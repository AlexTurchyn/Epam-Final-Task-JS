import {line} from "./lineOfSpec"
import {products} from "../products"
{
  const board = document.getElementById("spec");
  let num = localStorage.getItem("ID"); 
  let spec =  products[num].spec;

  let keys = Object.keys(spec);
  for(let i = 0; i<keys.length; i++) {
    let obj = { 
      title: keys[i], 
      arr: spec[keys[i]]
    }

    let lineOfSpec = line(obj);
    board.appendChild(lineOfSpec);
  }
}






