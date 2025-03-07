const container = document.querySelector("#grid-container");
//create boxes
for(let i = 0; i < 256; i ++) {
    const box = document.createElement("div");
    box.className = "box";
    container.appendChild(box);
}

//Box Styles
const boxes = document.getElementsByClassName('box')
for(let i = 0; i < boxes.length; i++){
    boxes[i].style = "height: 25px; width: 25px; border: solid, 2px, black;";
}



//hover colour effect
container.addEventListener(
    "mouseover",
    (event) => {
      // highlight the mouseover target
      if (event.target !== container) {
        event.target.style.backgroundColor = "orange";}
    },
    false,)