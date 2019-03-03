
let burger = document.querySelectorAll(".MobileNavigation-Burger");
burger[0].onclick = () => {
    let nav = document.querySelectorAll(".MobileNavigation-Navigation");
    nav[0].classList.toggle("MobileNavigation-Navigation_display_none");    
};