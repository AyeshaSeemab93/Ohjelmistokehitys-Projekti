const lappu = document.body.querySelector("textarea");

console.log(lappu);

const valinta = document.body.querySelectorAll("input");

console.log(valinta);




// function changeColor(){

// const tekstikenttä = document.getElementsByTagName("textarea");


// const firstColor = tekstikenttä[0];
// const secondColor = tekstikenttä[1];
// const thirdColor = tekstikenttä[2];
// const fourthColor = tekstikenttä[3];

// firstColor.style.background = "#dc7848";
// secondColor.style.background = "#dc7848",
// thirdColor.style.background = "#a7e7f6";
// fourthColor.style.background = "#E86594";
// }


valinta[1].addEventListener("click", () => {
  changeColor(1);
})
valinta[2].addEventListener("click", () => {
  changeColor(2);
})
valinta[3].addEventListener("click", () => {
  changeColor(3);
})
valinta[4].addEventListener("click", () => {
  changeColor(4);
})

const firstColor = valinta[1];
const secondColor = valinta[2];
const thirdColor = valinta[3];
const fourthColor = valinta[4];



function changeColor(color) {

  lappu.style.opacity = "0.8";

  switch (color) {
  case 0:
      lappu.style.background = "#dc7848";
      break;
  case 2:
    lappu.style.background = "#277bc0";
      break;
  case 3:
    lappu.style.background = "#a7e7f6";
    lappu.style.opacity = "1";
    break;
  case 4:
    lappu.style.background = "#E86594";
    break;
  }
}










function downloadFile(content) {
  const element = document.createElement("a");
  
  //A blob is a data type that can store binary data
  // “type” is a MIME type
  // It can have a different value, based on a file you want to save
  const blob = new Blob([content], { type: "plain/text" });
  //createObjectURL() static method creates a DOMString containing a URL representing the object given in the parameter.
  const fileUrl = URL.createObjectURL(blob);
  
  //setAttribute() Sets the value of an attribute on the specified element.
  element.setAttribute("href", fileUrl); //file location
  element.setAttribute("download", filename); // file name
  element.style.display = "none";
  
  //use appendChild() method to move an element from one element to another
  document.body.appendChild(element);
  element.click();
  
  //The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node
  document.body.removeChild(element);
};
window.onload = () => {
  document.getElementById("download").
  addEventListener("click", e => {
    
    //The value of the file name input box
    const filename = document.getElementById("filename").value;
    
    //The value of what has been input in the textarea
    const content = document.getElementById("text").value;
    
    // The && (logical AND) operator indicates whether both operands are true. If both operands have nonzero values, the result has the value 1 . Otherwise, the result has the value 0.
    
    if (filename && content) {
      downloadFile(filename, content);
    }

    // MUN LISÄÄMÄT

    console.log(content);

    const noteboard = document.body.querySelector("placeholderNotes");
    console.log(noteboard);
    
    const newNote = document.createElement("div");
    console.log(newNote);
    
    newNote.firstChild.data = content;
    
    newNote.classList.add("newNote");
    noteboard.appendChild(newNote);

    // MUN LISÄÄMÄT LOPPU

  });
};






// newNote.setAttribute("class","newNote");





const julkaise = document.getElementsByTagName("button");

julkaise.onClick = () => {
  newNote.appendChild(content);
  
};