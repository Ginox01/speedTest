import dizionario from "./dizionario.js"
import App from "./conf.js"
import settings from "./setting.js"
import goTesting from "./test.js"


export default () => {
    App.dizionario = dizionario
    settings(App)
    App.dom.input.addEventListener("keyup",e=>goTesting(e,App))
}