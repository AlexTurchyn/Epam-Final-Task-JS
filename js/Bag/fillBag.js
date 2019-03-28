import {products} from "../products"




const btnAddToBag = document.getElementById("ItemDetails-BtnAddToBag");
const num = localStorage.getItem("ID"); //ID number of Item
let spec =  products[num].spec;
// const mainProp = [products[num].name,products[num].cost];

const optionsFeatures = {};

const obj = { 
  id: num,
  options: optionsFeatures,
}

btnAddToBag.addEventListener("click", e => {
  fillOptionsFeature();
  addToBag(obj);
});

function addToBag(props) {
  if(localStorage["BagStorage"] !== undefined) {
    let tempBagStorage = JSON.parse(localStorage.getItem("BagStorage"));
    tempBagStorage.push(props);
    let storage= JSON.stringify(tempBagStorage);
    localStorage.setItem("BagStorage",storage);
  }
  else if(localStorage["BagStorage"] === undefined) {
    let tempBagStorage = [];
    tempBagStorage.push(props);
    let storage= JSON.stringify(tempBagStorage);
    localStorage.setItem("BagStorage",storage);
  }
}


function getCheckedRadioValue(name) {
  var elements = document.getElementsByName(name);
  for (var i=0, len=elements.length; i<len; ++i)

      if (elements[i].checked) 
      return elements[i].value;
}
  
function fillOptionsFeature () {
  let keys = Object.keys(spec);
  for(let i = 0; i<keys.length; i++) {
    let specKey = keys[i];
      let value = getCheckedRadioValue(specKey);
      optionsFeatures[specKey] = value;
  }
}