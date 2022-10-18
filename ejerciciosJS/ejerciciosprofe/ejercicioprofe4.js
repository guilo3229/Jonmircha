
const repetirTexto =(texto="",veces =undefined) =>{
    // Conviene poner en if todos los errores al principio de la funcion con su correspondiente return y luego aparte poner la resolucion de la funcion si no se dan ninguno de estos ifs envede entrar en el hell de las condicionales if-else todo el rato ya que con el return intrinseco en cada uno saldrian de la funcion

    if(!texto) return console.warn("no ingresaste un texto")
    // Como no tiene llaves tu if solamente va a ejecutar la siguiente line que tienes
    
    if(veces === undefined) return console.warn("no ingresaste el numero de veces")

    
    if(veces === 0) return console.error("El numero de veces no puede ser 0")
    if(Math.sign(veces) === -1) return console.error("El numero de veces no puede ser negativo")
    // Al igual que en todo si es una sola linea no ahce falta las llaves
    for (let i =1;i<=veces;i++)console.info(`${texto},${i}`)
    
}

repetirTexto("hola Mundo",3)
repetirTexto("",2)