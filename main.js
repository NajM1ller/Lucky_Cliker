var A=document.getElementById("клик");
var B=document.getElementById("клики");
let C=995;
const D=1000;
let F=50;
var sound=document.getElementById("Sound1");
B.addEventListener("click",function(){
  C++; 
  if (C == 1000) { 
    sound.play();
    console.log('музыка должна играть');
}
  A.textContent="кликов сделано "+C; console.log(C);
});