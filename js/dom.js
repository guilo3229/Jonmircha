

const $divsEventos = document.querySelectorAll(".eventos-flujo div")
console.log($divsEventos)

// usaremos un forEach para darle un eventlisener a cada una da las cajitas,ahora son 3 pero imaginemonos que son 1000
function flujoEventos(e){
    // En este caso this esta dentro de la funcion for Each que esta recorriendo uno de los 3 divs en ese momento entonces ese this hara referencia a ese div que este recorriendo ene se momento
    console.log(`Hola te saluda ${this.className},el click lo origino ${e.target.className}`)
}

$divsEventos.forEach(div =>{
    // addEventListener tiene 3 parametros el tipo de evento, la funcion o e parametro que esta afectado por dicho evento y el tercer parametro es la propagaciond e burbuja de normal esta en false significa que se propaga del mas interno al mas externo, pero si ponemos true es que ira del mas externo al mas interno eso seria con true:
    // Fase de burbuja: Con false o sin 3 parametro del mas interno al externo
    // div.addEventListener("click",flujoEventos,false)
    // Fase de captura del mas exterior al mas interior(la fase de captura en teoria es mejor porque no consume tanta memoria, pero todo esto podemos mejorarlo aun mas si tu delegas los eventos a  elemento padre mas externo y esto tambien va  ayudar a mejorar el rendimiento y uso de memoria )
    // div.addEventListener("click",flujoEventos,true)
    div.addEventListener("click",flujoEventos,{
        captura:false,
        // Con once:true hace que solo puedas clickar  una vez al evento que solamente se va a ejectuar 1 sola vez
        once:true
    })
})