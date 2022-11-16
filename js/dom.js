


function holaMundo(){
    alert("Hola Mundo")
    console.log(Event)
}

const $eventoSemantico = document.getElementById("evento-semantico"),
$eventoMultiple = document.getElementById("evento-multiple")
// Sin aprentesis porque tienes que clickar ya que sino se autoejecutaria, porque los parenteiss signigfica que en el momento que carge el navegador se va a iniciar,los manejadores en tipos semanticos ene ste caso estan limitados a 1 interaccion, por cada evento solo podemos ponerle 1 funcion
$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function(e){

    alert("Hola Mundo manejador de eventos semanticos")
console.log(e)

}
// que pasa si tu tienes la neceseidad de dar varias funciones a un mismo elemento para ello usaremos el addEvent lisenner, en el manejador multiple desaparece el onclick y se queda solo en click, recordar solo ponemos la funcion sin los aprentesis ya que estos indican ejecucion inmediata
$eventoMultiple.addEventListener("click",holaMundo)
// Con funciion anonima en la parte del lisenner
$eventoMultiple.addEventListener("click",(e)=>{
    alert("Hola Mundo Manejador de eventos multiples")
    console.log(e)
    // e.type es el tipo  de evento y e.target el objeto que lo origina
    console.log(e.type)
    console.log(e.target)
})
