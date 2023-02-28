window.events={
     Music() {
        if (auxiliary.getRandom(2)==0) {
            document.getElementById("Sound1").play()  
     
        }
        else if (auxiliary.getRandom(2)==1) {
            document.getElementById("Sound2").play()
        }
        else {
            console.log(auxiliary.getRandom(2))
            document.getElementById("Sound3").play()
        }
    },
    Background() {
        let body=document.querySelector("body")
        if (auxiliary.getRandom(2)==0) {
            document.body.style.background = 'url("Images/background.png")'}
        else if (auxiliary.getRandom(2)==1) {
            document.body.style.background = 'url("Images/background1.jpg")'}
        else { console.log(auxiliary.getRandom(2))
            document.body.style.background = 'url("Images/background2.jpg")'}
     },
    Text() {
        var element=document.getElementsByClassName("Text"); console.log('введите текс');
        if (auxiliary.getRandom(2)==0) { 
            element[0].innerHTML="Зачастую говорят, что мотивации хватает ненадолго. Но то же самое происходит и с освежающим душем, поэтому и рекомендуют его принимать ежедневно." }
        else if (auxiliary.getRandom(2)==1) {
            element[0].innerHTML="За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха." }
        else { console.log(auxiliary.getRandom(2))
            element[0].innerHTML="Зачастую говорят, что мотивации хватает ненадолго. Но то же самое происходит и с освежающим душем, поэтому и рекомендуют его принимать ежедневно." }
    },
    // Lucky_Block() {
    //      let element=document.getElementsByClassName('use-1')
    //     Use-1.style.background = 'url("Images/Lucky_Block2.png")'}
    // 
}
