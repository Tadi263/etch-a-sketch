const container = document.querySelector("#grid-container");

//get box quantity

const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value
let quantity = slider.value;
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  quantity = this.value;
  output.innerHTML = this.value;
}


   // create initial boxes
   function createBoxes(numBoxes) {
    for (let i = 0; i < numBoxes; i++) {
      const box = document.createElement("div");
      box.className = "box";
      container.appendChild(box);
    }
    updateBoxStyles();
  }
  
  // Function to update box styles
  function updateBoxStyles(){
      const boxes = document.getElementsByClassName('box')
      for(let i = 0; i < boxes.length; i++){
          boxes[i].style = `background-color: white; height: ${400 / quantity}px; width:  ${400 / quantity}px; border: solid 1px grey;`;
      }
  }
  
  // initial box creation
  createBoxes(quantity * quantity)
  
  slider.addEventListener("change", function() {
    // Get the collection of boxes
    let boxes = document.getElementsByClassName('box');
  
    // Convert HTMLCollection to an array
    const boxesArray = Array.from(boxes);
  
    // Now you can use forEach
    boxesArray.forEach((div) => div.remove());
  
      // recreate boxes
      createBoxes(quantity * quantity);
  }, false);
  
  //Box Styles
  const boxes = document.getElementsByClassName('box')
  for(let i = 0; i < boxes.length; i++){
      boxes[i].style = `background-color: white; height: ${400 / quantity}px; width:  ${400 / quantity}px; border: solid 1px grey;`;
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
      boxes[i].style = `background-color: white; height: ${400 / quantity}px; width:  ${400 / quantity}px; border: solid 1px grey;`;}
  })

