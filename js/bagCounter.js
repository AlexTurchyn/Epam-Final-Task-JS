let bagCounter = 0;
let btnBag = document.getElementById("ItemDetails-BtnAddToBag");
btnBag.addEventListener("click", ()=>{
    bagCounter++;
    let bag = document.getElementById("BagCounter");
    bag.innerHTML = bagCounter;
})