function specBlock(props) {
  const block = document.createElement("label");
  block.className = "ItemDetails-SpecBlock";
  block.innerHTML = props.value;
  block.setAttribute("for", props.value + props.id);
  return block;
}

export {specBlock};