const arrayMinMax =(arr = undefined) =>{
    if (arr === undefined)return console.warn ("No ingresaste un arreglo de números")
    if(!(arr instanceof Array))return console.error(`El valor introducido: "${arr}" no es un array`)
    if (arr.length === 0)return console.error("El array esta vacio")

    for(let num of arr){
        if(typeof num !== "number")return console.error(`El valor "${num}" ingresado, No es un numero`)
    }
    // la funcion o el metodo math espera dentro de su parentesis que le pasemos el spread operator de lospuntitos...
    return console.info(`Arreglo original: ${arr}\nValor mayor:${Math.max(...arr)}\nValor menor:${Math.min(...arr)}`)
 }

 arrayMinMax([2,3,5])