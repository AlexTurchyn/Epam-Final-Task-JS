function item(props) {

  const product = document.createElement("div");
  product.id = props.id;
  product.classList.add("ProductCell");
  product.innerHTML = `
      <div class="ProductCell-Img">
          <a href=${props.link} class="_a">
            <p class="ProductCell-WrapperText">View Item</p> 
            <img src=${props.img} alt="" class="HomepagePhoto">
          </a>
      </div>
      <div class="ProductCell-Def">
          <p class="ProductCell-Name">${props.name}</p>
          <p style="text-align: center">&pound;${props.cost.toFixed(2)}</p>
      </div>
  `

  return product;
}

export {item}