

// usaremos un forEach para darle un eventlisener a cada una da las cajitas,ahora son 3 pero imaginemonos que son 1000
function flujoEventos(e){
    // En este caso this esta dentro de la funcion for Each que esta recorriendo uno de los 3 divs en ese momento entonces ese this hara referencia a ese div que este recorriendo ene se momento
    console.log(`Hola te saluda ${this},el click lo origino ${e.target.className}`)

    // El stopPropagation() evita la propagacion
  
}
document.addEventListener("click",(e)=>{
    console.log("click en",e.target)
    // usaremos los condicionales para decir que  tipo de interacion a que cosa le daremos
    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e)
    }
    if(e.target.matches(".eventos-flujo a")){
    alert("hola soy tu amigo y docente digital... Jonathan Mircha cacas")
    e.preventDefault()
    }
})

// De esta manera ahorramos de crear muchos addevenlisener y tambien hacer las constantes del queryselecto o del adevvent byid en las constantes.

// Tu no peudes crear un lisenner de algo que todavia no esta en el DOM por eso esta tecnica de la delegacion de eventos a todo el document ayuda bastante