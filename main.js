var A=document.getElementById("клик");
var B=document.getElementById("клики");
let C=240;
B.addEventListener("click",function() {
    C++;
    if (C == 250) {
        events.Music()
    }
    if (C >= 250) {
        C++
    }
    if (C == 501) {
        events.Background()
    }
    if (C >=502){
        C++
    }
    if (C == 750){
        events.Text()
    }
    if (C >=753){
        C++
    }
    if (C == 1002){
        events.Lucky_Block()
    }

    A.textContent="кликов сделано "+C; console.log(C);
})
