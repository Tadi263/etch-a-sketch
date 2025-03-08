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
    boxes[i].style = "height: 25px; width: 25px; border: solid, 1px, grey;";
}

//Get color 
let pickedcolor = document.getElementById("pickcolor").value;
document.getElementById("pickcolor").onchange = function() {
    pickedcolor = this.value;
  }

//hover colour effect
  container.addEventListener(
    "mouseover",
    (event) => {
      // highlight the mouseover target
      if (event.target !== container && eraserstate == false) {
        event.target.style.backgroundColor = pickedcolor;}
      else if (event.target !== container && eraserstate == true){
          event.target.style.backgroundColor = "white";}
    },
    false,)



//eraser functionality
const eraser = document.querySelector("#eraser");
eraserstate = false;
eraser.addEventListener("click", () => {
  eraserstate = !eraserstate;
  if (eraserstate == true){
    eraser.style = "background-color: grey; border: solid, 1px, black;";
  }
  else {
    eraser.style = "background-color: lightgrey; border: solid, 1px, grey;";
  }
  console.log(eraserstate);})

  //eraser functionality
 
  const clear = document.querySelector("#clear");
  clear.addEventListener("click", () => {
    for(let i = 0; i < boxes.length; i++){
      boxes[i].style = "background-color: white height: 25px; width: 25px; border: solid, 1px, grey;";
  }
  })

