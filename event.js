window.events={
     Music() {
        if (auxiliary.getRandom(9)==0) {
            document.getElementById("Sound1").play()
            document.getElementById("Sound1").volume=0.5
        }
        else if (auxiliary.getRandom(9)==1) {
            document.getElementById("Sound2").play()
            document.getElementById("Sound2").volume=0.5
        }
        else if (auxiliary.getRandom(9)==2) {
            document.getElementById("Sound3").play()
            document.getElementById("Sound3").volume=0.5
        }
        else if (auxiliary.getRandom(9)==3) {
            document.getElementById("Sound4").play()
            document.getElementById("Sound4").volume=0.5
        }
        else if (auxiliary.getRandom(9)==4) {
            document.getElementById("Sound5").play()
            document.getElementById("Sound5").volume=0.5
        }
        else if (auxiliary.getRandom(9)==5) {
            document.getElementById("Sound6").play()
            document.getElementById("Sound6").volume=0.5
        }
        else if (auxiliary.getRandom(9)==6) {
            document.getElementById("Sound7").play()
            document.getElementById("Sound7").volume=0.5
        }
        else if (auxiliary.getRandom(9)==7) {
            document.getElementById("Sound8").play()
            document.getElementById("Sound8").volume=0.5
        }
        else if (auxiliary.getRandom(9)==8) {
            document.getElementById("Sound9").play()
            document.getElementById("Sound9").volume=0.5
        }
        else {
            console.log(auxiliary.getRandom(9))
            document.getElementById("Sound10").play()
            document.getElementById("Sound10").volume=0.5
        }
    },
    Background() {
        let body=document.querySelector("body")
        if (auxiliary.getRandom(9)==0) {
            document.body.style.background = 'url("Images/background1.jpg")'}
        else if (auxiliary.getRandom(9)==1) {
            document.body.style.background = 'url("Images/background2.jpg")'}
        else if (auxiliary.getRandom(9)==2) {
                document.body.style.background = 'url("Images/background3.jpg")'}
        else if (auxiliary.getRandom(9)==3) {
                document.body.style.background = 'url("Images/background4.jpg")'}
        else if (auxiliary.getRandom(9)==4) {
                document.body.style.background = 'url("Images/background5.jpg")'}
        else if (auxiliary.getRandom(9)==5) {
                document.body.style.background = 'url("Images/background6.png")'}
        else if (auxiliary.getRandom(9)==6) {
                document.body.style.background = 'url("Images/background7.jpg")'}
        else if (auxiliary.getRandom(9)==7) {
                document.body.style.background = 'url("Images/background8.jpg")'}
        else if (auxiliary.getRandom(9)==8) {
                 document.body.style.background = 'url("Images/background9.jpg")'}
        else { console.log(auxiliary.getRandom(9))
            document.body.style.background = 'url("Images/background.png")'}
     },
    Text() {
        var element=document.getElementById("Text"); console.log('введите текс');
        if (auxiliary.getRandom(9)==0) { 
            element.textContent="Зачастую говорят, что мотивации хватает ненадолго. Но то же самое происходит и с освежающим душем, поэтому и рекомендуют его принимать ежедневно." }
        else if (auxiliary.getRandom(9)==1) {
            element.textContent="За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха." }
            else if (auxiliary.getRandom(9)==2) {
                element.textContent="Люди легко сравнимы с водой. Они так же рано или поздно остывают, так же изменчивы и быстротечны. Они привыкли судить по поверхности, не пытаясь нырнуть вглубь, забывая о том, что, несмотря на видимую гладь, под ней может скрываться буря, и наоборот… Всё самое важное — глубже."}
            else if (auxiliary.getRandom(9)==3) {
                element.textContent="Мы часто повторяем, что о человеке судят по его делам, но забываем иногда, что слово тоже поступок. Речь человека — зеркало его самого. Всё фальшивое , лживое или вульгарное, как бы человек ни пытался скрыть это от других, вся пустота, черствость или грубость прорываются в его речи с такой же силой и очевидностью, с какой проявляются искренность и благородство, глубина и тонкость мыслей и чувств… То, о чём говорит человек, отражает его внутренний мир…"}
            else if (auxiliary.getRandom(9)==4) {
                element.textContent="Прежде чем осуждать кого-то, возьми его обувь и пройди его путь, попробуй его слёзы, почувствуй его боль. Наткнись на каждый камень, о который он споткнулся. И только после этого говори, что ты знаешь как правильно жить…"}
            else if (auxiliary.getRandom(9)==5) {
                element.textContent="Люди похожи на оконные стекла. Они сверкают и сияют, когда светит солнце, но когда воцаряется тьма, их истинная красота открывается лишь благодаря свету, идущему изнутри…"}
            else if (auxiliary.getRandom(9)==6) {
                element.textContent="Знаете, почему отношения стали редкостью? Потому что разговоры превратились в переписки, поступки превратились в звонки, чувства в статусы online, слово «любовь» выбрасывается из контекста, неуверенность затмевает все, ревность переросла в привычку, доверие потеряно, обман стал нормой, а расставание стало единственным выходом…»«В этом тёмном мире считай истинным только духовное богатство, ведь оно никогда не обесценится…"}
            else if (auxiliary.getRandom(9)==7) {
                element.textContent="По подсчетам учёных, всего полминуты весёлого смеха приравнивается к 45 минутам спокойного отдыха. Непроизвольный взрыв смеха равен трём минутам занятий аэробикой, а десять тёплых улыбок — десяти минутам интенсивной гребли. Так что улыбайтесь чаще…"}
                else if (auxiliary.getRandom(9)==8) {
                    element.textContent="Когда мне было 5 лет, мама всегда говорила, что главное в жизни – счастье. Когда я пошел в школу, на вопрос, кем я хочу быть, когда вырасту, я ответил “счастливым человеком”. Мне тогда сказали, что я не понимаю вопроса, а я ответил, что это они не понимают жизни."}
            else { console.log(auxiliary.getRandom(9))
            element.textContent="Зачастую говорят, что мотивации хватает ненадолго. Но то же самое происходит и с освежающим душем, поэтому и рекомендуют его принимать ежедневно." }
        
    },
     Lucky_Block() {
          let element=document.getElementById('клики')
        element.style.background = 'url("Images/Lucky_Block2.png")'
    },
    Repetition() {
        C=0
        let body=document.querySelector("body")
        var element=document.getElementById("Text")
        element.textContent=""
        document.body.style.background=null
        document.getElementById("Sound1").pause()
        document.getElementById("Sound2").pause()
        document.getElementById("Sound3").pause()
        document.getElementById("Sound4").pause()
        document.getElementById("Sound5").pause()
        document.getElementById("Sound6").pause()
        document.getElementById("Sound7").pause()
        document.getElementById("Sound8").pause()
        document.getElementById("Sound9").pause()
        document.getElementById("Sound10").pause()

    }
}
