import {products} from "./products"
import {item} from "./item"




{
  const newArrivlas = document.getElementById("newArrivals");
  newArrivlas.addEventListener("click", e => {
    var target = e.target;
    while(target != newArrivlas) {
      if(target.classList.contains("ProductCell")) {
        localStorage.setItem("ID",target.id);
        return;
      }
      target = target.parentNode;
    }
  });


  for (let i = 0; i < 4; i++) {
    const elem = item(products[i]);
    newArrivlas.appendChild(elem);
  }
}
