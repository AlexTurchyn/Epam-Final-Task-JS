let empBtn = document.getElementById("ShoppingBag-EmptyBag");
// console.log(empBtn);
empBtn.addEventListener("click", (e) => {
  localStorage.removeItem("BagStorage");
  document.getElementById("ShoppingBag-ItemsWrapper").innerHTML = "";
});