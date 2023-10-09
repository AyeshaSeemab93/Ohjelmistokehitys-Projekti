const lappu = document.body.querySelector("textarea");

console.log(lappu);

const valinta = document.body.querySelectorAll("input");

console.log(valinta);





var str,
element = document.getElementById("filename");
if (element != null) {
    str = element.value;
}
else {
    str = null;
}

console.log(str);



//CHANGE COLOR


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
  case 1:
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

// change colour end


function getInput() {

  window.userInput = document.getElementById('viestikenttä').value;
  window.userInputName = document.querySelector('.filename').value;
  console.log(userInput);
  console.log(userInputName);
  // alertUserInput();
}

// function alertUserInput() {
//   alert(userInput);
// }
var userInput = "hello";
var userInputName = "world";
var subButton = document.querySelector("button");
// subButton.addEventListener('click', userInput, false);

console.log(subButton);
subButton.addEventListener("click", getInput);




    // PUBLISH NOTE


  const noteboard = document.body.querySelector(".placeholderNotes");
  console.log(noteboard);

  subButton.addEventListener("click", () => {

    const notes = getNotes();  

  const newNote = document.createElement("div");
  const noteText = document.createElement("p");
  const noteName = document.createElement("p");
  newNote.classList.add("newNote");
  noteText.classList.add("noteText");
  noteName.classList.add("noteName");
  noteText.textContent = userInput;
  noteName.textContent = userInputName;
  noteboard.appendChild(newNote);
  newNote.appendChild(noteText);
  newNote.appendChild(noteName);
  newNote.style.background = lappu.style.background;
  newNote.style.opacity = "0.8";

  window.userInputName = document.getElementById('filename').value;

});

// STORING DATA



//adding new note to the existing array of notes
// function addNote(){  //EI EHKÄ TARVI, LISÄÄ ON CLICK
  //get the existing array and add into it
  const notes = getNotes();                   //TARVII
  //creating new note
  // const noteObject = {                                            //Ei tarvi
  //   id:  Math.floor(Math.random()*1000), //generating random id  //Ei tarvi
  //   content: "" //default content is empty string                 //Ei tarvi
  // };
  // //call the fucntion to create elements for it
  // const noteElement = createNoteElement(noteObject.id, noteObject.content); //Ei tarvi
 

  
  notes.push(userInput, userInputName);     //TARVII onclick?   noteObject?
  saveNotes(notes);         //TARVII
  // }
  


function getNotes(){
  return JSON.parse(localStorage.getItem("stickynotes-notes")|| "[]" );
}

function saveNotes(notes){
  localStorage.setItem("stickynotes-notes", JSON.stringify(notes) );
}



// Make radio required
// is the note permanent?


// PUBLISH NOTE MAIN PAGE

