import {specBlock} from "./specBlock"




function line(props) {
  const line = document.createElement("div");
  line.className = "Spec";
  
  const lineLabel = document.createElement("div");
  lineLabel.className = "ItemDetails-LineLabel";
  lineLabel.innerHTML = props.title[0].toUpperCase() + props.title.substr(1) + ":";
  line.appendChild(lineLabel);

  //create radioButtons 
  const lineInput = document.createElement("div");
  lineInput.className = "ItemDetails-LineInput";
  props.arr.forEach( (spec,i) => {
    const input = document.createElement("input");
    input.setAttribute("type","radio");
    input.setAttribute("name",props.title);
    input.setAttribute("id",spec+i);
    input.setAttribute("value",spec);
    input.style.display = "none";

    //return label
    const nextProps = {value: spec, id: i};
    const label = specBlock(nextProps);


    lineInput.appendChild(input);
    lineInput.appendChild(label);
  });
  line.appendChild(lineInput);


  return line;
}


export {line}