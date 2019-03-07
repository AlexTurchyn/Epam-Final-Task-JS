let wrappers = document.querySelectorAll(".ProductCell-ImgWrapper");
wrappers = [].slice.call(wrappers);
console.log(wrappers);
wrappers.forEach((wrapper) => {
    wrapper.style.height = wrapper.parentElement.offsetHeight + "px";
    console.log(wrapper.style.height);
});