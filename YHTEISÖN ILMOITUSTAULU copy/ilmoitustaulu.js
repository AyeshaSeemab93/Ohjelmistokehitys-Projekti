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


valinta[0].addEventListener("click", () => {
  changeColor(0);
})
valinta[1].addEventListener("click", () => {
  changeColor(1);
})
valinta[2].addEventListener("click", () => {
  changeColor(2);
})
valinta[3].addEventListener("click", () => {
  changeColor(3);
})

const firstColor = valinta[0];
const secondColor = valinta[1];
const thirdColor = valinta[2];
const fourthColor = valinta[3];



function changeColor(color) {

  lappu.style.opacity = "0.8";

  switch (color) {
  case 0:
      lappu.style.background = "#dc7848";
      break;
  case 1:
    lappu.style.background = "#277bc0";
      break;
  case 2:
    lappu.style.background = "#a7e7f6";
    lappu.style.opacity = "1";
    break;
  case 3:
    lappu.style.background = "#E86594";
    break;
  }

  // lappu.style.background = "#dc7848";
  // lappu.style.opacity = "0.8";
  
}