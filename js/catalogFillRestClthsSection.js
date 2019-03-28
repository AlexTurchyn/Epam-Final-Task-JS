import {products} from "./products";
import {item} from "./item"
import {numID} from "./ItemDetails/saveItemID"

{
  const catalog = document.getElementById("catalog");
  catalog.addEventListener("click", e => {
    var target = e.target;
    while(target != catalog) {
      if(target.classList.contains("ProductCell")) {
        localStorage.setItem("ID",target.id);
        numID.itemID = target.id;
        return;
      }
      target = target.parentNode;
    }
  });


  var count = 0;
  while(count < 8) {
      const elem = item(products[count]);
      elem.classList.add("Catalog-Specific");
      catalog.appendChild(elem);
      count++;
  }


  const infSection = document.createElement("div");
      infSection.classList.add("Catalog-InformationOnPage");
      infSection.innerHTML = `
      <p class="InformationOnPage-Upper">Last weekend <span style="color:#f14a58; letter-spacing: 0.72px;"> extra 50% </span>
          off on all reduced boots and shoulder bags</p>
      <p class="InformationOnPage-Lower">This offer is valid in-store and online. Prices displayd reflect this additional discount. 
          This offer ends at 1159 GMT on March 1st 2015</p>`


  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;


  if(x < 768) {
      catalog.insertBefore(infSection, catalog.children[2])
  }
  if(x >= 768 && x < 1024) {
      catalog.insertBefore(infSection, catalog.children[3])
  }
  if(x >= 1024) {
      catalog.insertBefore(infSection, catalog.children[4])
  }


  let btnShow = document.getElementById("Catalog-BtnShowMore");
  btnShow.addEventListener("click", () => {
      while(count < products.length) {
          const prod = item(products[count]);
          prod.classList.add("Catalog-Specific");
          catalog.appendChild(prod);
          count++;
      }
      btnShow.style.display = "none";
  });
}
