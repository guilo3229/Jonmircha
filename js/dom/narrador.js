const d = document,
w= window
// Como vamos a usar en este modulo el Dom content loaded no puede estar dentro del DomContentLoaded lo usan internamente del index por lo tanto tendremos que dejarlo fuera como en otros modulos
export default function speechReader(){
// Primero como siempre capturaremos los elemento del dom que vamos a tratar:

const $speechSelect = d.getElementById("speech-select"),
$speechTextarea = d.getElementById("speech-text"),
$speechBtn = d.getElementById("speech-btn"),
// Ahora  crearemos una variable que no son del dom(por lo tanto no $) que es donde guardaremos la API, esto nos permite interactuar con las voces de nuestro sistema operativo
speechMessage = new SpeechSynthesisUtterance();
console.log(speechMessage)
// Aqui meteremos todas nuestras voces en este array:
let voices =[];
d.addEventListener("DOMContentLoaded",e=>{
//     console.log(w.speechSynthesis)
// console.log(w.speechSynthesis.getVoices())
// hay un problema que no carga directamente para poder detectar ñlas voces que el navvegador detecta en el sistema poperativo necesitamos ejecutar su propio evento
w.speechSynthesis.addEventListener("voiceschanged", e =>{
    // console.log(e)
    voices = w.speechSynthesis.getVoices()
    console.log(voices)
    voices.forEach(voice => {
        const $option = d.createElement("option")
        $option.value = voice.name;
        $option.textContent = `${voice.name} ** ${voice.lang}`
        
        $speechSelect.appendChild($option)
    });
})
})
d.addEventListener("change", e=>{
    if(e.target === $speechSelect){
        console.log(e.target)
        speechMessage.voice = voices.find(voice =>voice.name === e.target.value)
    }
// console.log(speechMessage) 
})
d.addEventListener("click",e=>{
    if (e.target === $speechBtn){
        speechMessage.text = $speechTextarea.value;
        w.speechSynthesis.speak(speechMessage)
    }
})
}