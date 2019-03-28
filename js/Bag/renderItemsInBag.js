import {products} from "../products"
import { bagItem } from "./bagItem";

{

  const itemsWrapper = document.getElementById("ShoppingBag-ItemsWrapper");
  let tempBagStorage = JSON.parse(localStorage.getItem("BagStorage"));
  if(!Object.is(tempBagStorage,null)) {
    tempBagStorage.forEach(item => {
      let product = products[item.id];
      const obj = {
        id: product,
        options: item.options,
      }
      let m = bagItem(obj);
      itemsWrapper.appendChild(m);
    });
  }
}



