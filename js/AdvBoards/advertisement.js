function setAdv (props) {
  const link = document.createElement("a");
  link.className = "_advLinkDefault"
  link.href = props.link;
  link.innerHTML = `<img src=${props.img} alt=${props.title} class="HomepagePhoto">`;
  return link;
}

export {setAdv}