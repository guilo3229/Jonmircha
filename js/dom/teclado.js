const d = document;

export function shortcuts(e){
    // cada tecla tiene un codigo y con ese codigo(keycode, que no code ni la key) que esta dentro de ñas propiedades o metodos que podemos ver dentro de la consola
    console.log(e.type)
    console.log(e.key)
    console.log(e.keyCode)
    console.log(`cntr: ${e.ctrlKey}`)
    console.log(`alt: ${e.altKey}`)
    console.log(`shift: ${e.shiftKey}`)
    console.log(e)
    if(e.key==="a" & e.altKey){
        alert("Has lanzado una alerta con el Teclado")
    }
    if(e.key==="c" & e.altKey){
        confirm("Has confirmado con el Teclado")
    }
    if(e.key==="p" & e.altKey){
        prompt("Has lanzado un aviso con el teclado")
    }
}