function bagItem(props) {

  const product = document.createElement("div");
  product.id = props.id.id;
  product.classList.add("ProductCell-Bag");
  let keys = Object.keys(props.options);
  let values = Object.values(props.options);
  product.innerHTML = `
      <div class="ProductCell-Img">
          <a href=${props.id.link} class="_a">
            <p class="ProductCell-WrapperText">View Item</p> 
            <img src=${props.id.img} alt="" class="HomepagePhoto">
          </a>
      </div>
      <div class="ProductCell-BagDef">
        <div class="ProductCell-Def">
            <p class="ProductCell-Bag-Name">${props.id.name}</p>
            <p class="ProductCell-Bag-Name">&pound;${props.id.cost.toFixed(2)}</p>
            <p>${keys[0]}: ${values[0]}</p>
            <p>${keys[1]}: ${values[1]}</p>
            <p>Quantity</p>
        </div>
      <div>
  `

  return product;
}

export {bagItem}