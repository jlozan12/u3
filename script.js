
let title = document.querySelector(".title");
let buttonOne = document.querySelector(".option-one");
let buttonTwo = document.querySelector(".option-two");
let buttonThree = document.querySelector(".option-three");
let screen1 = document.querySelector(".option-one-screen");
let screen2= document.querySelector(".option-three-end");
let screen3= document.querySelector(".option-two-end");

buttonOne.onclick=function() {
  buttonOne.style.display = "none";
  buttonTwo.style.display = "none";
  screen1.style.display = "block";
  title.innerHTMl = "";
};

buttonTwo.onclick=function() {
  buttonOne.style.display = "none";
  buttonTwo.style.display = "none";
  screen2.style.display = "block";
  title.innerHTML="";
};

buttonThree.onclick=function(){
  screen1.style.display = "block";
  screen2.style.display = "block";
};

