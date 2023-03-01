var A=document.getElementById("клик");
var B=document.getElementById("клики");
window. C=0;
B.addEventListener("click",function() {
    C++;
    if (C == 200) {
        events.Music()
    }
    if (C == 400) {
        events.Background()
    }
    if (C == 600){
        events.Text()
    }
    if (C == 1000){
        events.Lucky_Block()
        events.Repetition()
    }
    A.textContent="Кликов сделано "+C; console.log(C);
})
