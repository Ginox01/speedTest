
function displayTime(App){
    App.dom.timer.textContent = App.timeRemained
}

function displayWords(App){
    for(let x=0 ; x<App.lengthTest ; x++){
        createSpanWords(App,x==0 ? "current":"")
    }
}

function createSpanWords(App,classe){
    let word = App.dizionario[Math.floor(Math.random()*App.dizionario.length)];
    let span = document.createElement("span");
    span.setAttribute("class",classe);
    span.appendChild(document.createTextNode(word));
    App.dom.container.appendChild(span)

}

export default(App)=>{
    displayTime(App);
    displayWords(App)
}