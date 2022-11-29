const d = document;
let x = 0, 
    y = 0

export function moveBall(e,ball,stage){
    const $ball = d.querySelector(ball),
    $stage= d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect()
    // console.log(limitsBall,limitsStage)
    // console.log(e.keyCode)
    // console.log(e.key)


    // const move = (direction)=>{}
    switch (e.keyCode) {
        // hay que ahcer un prevent default en cada uno de los casos para el scroll de la barrita de arriba y abajo porque a la vez que subimos o bajamos se mueve la peltita y el scroll y dentro de los casos para que no se extienda a todo el documento
        // 37 es izquierda
        case 37:
            // move("left")
            e.preventDefault()
            if(limitsBall.left-10>limitsStage.left){ 
                x--
            }
            break;
        // 38 es arriba
        case 38:
            if(limitsBall.top-10>limitsStage.top) {
                y--
                e.preventDefault()
            }
            // move("up")
            break;
        // 39 es derecha
        case 39:
            // move("right")
            if(limitsBall.right+10<limitsStage.right){ 
                x++
                e.preventDefault()

            }
            break;
        // 40 es abajo
        case 40:
            if(limitsBall.bottom+10<limitsStage.bottom){
                y++
                e.preventDefault()
            // move("down")
            } 
            break;
        default:
            break;
        // Le he sumado 10px o restado para que tenga limitacion y no sobrepase un poquito los amrgenes se puede hacer mas preciso haciendo que la multiplicacion dentro del traslate de x e y que esta debajo sea mas pequeño y tambien sea mas pequeño la suma o la resta de px de los cases
    }
    $ball.style.transform = `translate(${x*10}px,${y*10}px)`






}




export function shortcuts(e){
    // cada tecla tiene un codigo y con ese codigo(keycode, que no code ni la key) que esta dentro de ñas propiedades o metodos que podemos ver dentro de la consola
    // console.log(e.type)
    // console.log(e.key)
    // console.log(e.keyCode)
    // console.log(`ctrl: ${e.ctrlKey}`)
    // console.log(`alt: ${e.altKey}`)
    // console.log(`shift: ${e.shiftKey}`)
    // console.log(e)
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