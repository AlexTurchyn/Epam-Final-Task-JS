let storage = JSON.parse(localStorage.getItem("BagStorage"));
let gos = localStorage.getItem("BagStorage");
console.log(gos);
let bag = document.getElementById("BagCounter");
if(Object.is(storage,null)) {
   bag.innerHTML = 0;
} else {
  bag.innerHTML = storage.length;
}


