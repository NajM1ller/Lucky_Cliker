var A=document.getElementById("клик");
var B=document.getElementById("клики");
var C=0;
B.addEventListener("click",function(){
  C++;
  A.textContent="кликов сделано "+C;
});