const scrolElem = document.querySelector("#scrol");

window.addEventListener("scroll", function () {
  let scrolTop = window.scrollY;
  let documentHeight = document.body.clientHeight;
  let windoheighth = window.innerHeight;

  let scrolPerecent = scrolTop / (documentHeight - windoheighth);
  let scrollPerecentRound = Math.round(scrolPerecent * 100);
  scrolElem.style.width = scrollPerecentRound + "%";
});

const pyykkitupaElem = document.querySelector("#pyykkitupa");
const saunavuoroElem = document.querySelector("#saunavuoro");
const saunaContainer = document.querySelector(".sauna-container");
const pesukoneContainer = document.querySelector(".pesukone_container");
const omatvarauksetElem = document.querySelector(".omatvaraukset");
const modulcontainer = document.querySelector(".modulcontainer");
const btnmodal = document.querySelector(".btnmodal");
const modal2 = document.querySelector(".modal-2");
const pesukoneBox = document.querySelectorAll(".pesukone-box");
const calendarContainer = document.querySelector(".calendar-container");
const dateCurrent = document.querySelector(".date-current");
const monthPrev = document.querySelector(".prev");
const monthnext=document.querySelector('.next')

const months = [
  "Tammikuu",
  "Helmikuu",
  "Maaliskuu",
  "Huhtikuu",
  "Toukokuu",
  "Kesäkuu",
  "Heinäkuu",
  "Elokuu",
  "Syyskuu",
  "Lokakuu",
  "Marraskuu",
  "Joulukuu",
];

const date = new Date();
monthPrev.addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  dateCurrent.innerHTML = months[date.getMonth()];
});

monthnext.addEventListener("click",()=>{
  date.setMonth(date.getMonth()+1)
  dateCurrent.innerHTML=months[date.getMonth()]
})



pyykkitupaElem.addEventListener("click", () => {
  console.log("first");
  pesukoneContainer.classList.toggle("pesukone_container");
});

saunavuoroElem.addEventListener("click", () => {
  saunaContainer.classList.toggle("sauna-container");
});

// omatvarauksetElem.addEventListener("click",()=>{
//   modulcontainer.classList.add('active')
// })

modulcontainer.addEventListener("click", () => {
  modulcontainer.classList.remove("active");
});

omatvarauksetElem.addEventListener("click", () => {
  modal2.classList.toggle("active");
});

// pesukoneBox.addEventListener("click",()=>{
//   console.log('calender')
//   calendarContainer.classList.toggle('ative-calender')

// })
pesukoneBox.forEach((box) => {
  box.addEventListener("click", () => {
    calendarContainer.classList.toggle("ative-calender");
  });
});
