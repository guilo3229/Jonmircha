// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const convertirGrados =(grados= undefined, unidad =undefined)=>{

    if(grados === undefined)return console.warn("No ingresaste grados a convertir")
    if(typeof grados !== "number")return console.error(`El valor "${grados}" ingresado, No es un número`)
    
    if(unidad === undefined)return console.warn("No inresaste el tipo de grado a convertir")
    if(typeof unidad !== "string")return console.error(`El valor ${grados} ingresado, No es una cadena de texto`)
    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("valor de unidad no reconocido")

    if (unidad=== "C"){
        return console.info(`${grados}ºC = ${Math.round((grados*(9/5)+32))} ºF`)
    }
    else if(unidad === "F"){
        return console.info(`${grados}ºF = ${Math.round((grados-32)*5/9)} ºC`)

    }
    else{
        return console.error("El tipo de grados a convertir No es válido")
    }
}

convertirGrados(212,"F")