const convertirBinarioDecimal = (numero = undefined, base = undefined) =>{

    if(numero === undefined) return console.warn("No ingresaste el numero a convertir")

    if(typeof numero !== "number") return console.error(`El valor"${numero}" ingresado,No es un número`)
    if(base === undefined) return console.warn("No ingresaste el valor de la base ")

    if(typeof base !== "number") return console.error(`El valor"${base}" ingresado,No es un número`)


if(base === 2){
    return console.info(`${numero} base ${base} = ${parseInt(numero,base)} base 10`)
}else if(base === 10){
    return console.info(`${numero} base ${base} = ${parseInt(numero.toString(2))} base 2`)
}


}

convertirBinarioDecimal(1263,10)