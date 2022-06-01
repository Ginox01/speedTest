
const dom = {
    container : document.getElementById("container-words"),
    input : document.getElementById("word"),
    timer : document.getElementById("timer"),
    wrapScore : document.getElementById("score")
}


const App = {
    dom,
    timeRemained : 60,
    lengthTest : 50,
    initTest : false,
    score : {current:0,right:0,wrong:0}
}

export default App