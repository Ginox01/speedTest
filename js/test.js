
function goTest(e,App){
    if(!App.initTest){
        countDownTest(e,App)
    }
    if(e.key == " "){
        let userInput = App.dom.input.value.trim();
        let currentWord = App.dom.container.children[App.score.current];
        if(userInput == currentWord.textContent){
            App.score.right++;
            currentWord.className = "right"
        }else {
            App.score.wrong++;
            currentWord.className = "wrong"
        }
        App.score.current++;
        let nextWord = App.dom.container.children[App.score.current];
        currentWord = nextWord;
        currentWord.className = "current"
        e.target.value = ""
        
    }
}


function countDownTest(e,App){
    App.initTest = true;
    const time = setInterval(()=>{
        App.dom.timer.textContent = --App.timeRemained
        if(App.dom.timer.textContent == 0){
            displayResults(App);
            clearInterval(time)
        }
    },1000)
}

function displayResults(App){
    App.dom.input.setAttribute("disabled","disabled");
    App.dom.wrapScore.innerHTML = `<br>Parole tentate : ${App.score.current}<br>
    Parole corrette : ${App.score.right}<br>
    Parole sbagliate : ${App.score.wrong}`
    App.dom.input.style.color = "dimgray"
}

export default goTest