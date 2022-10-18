
// Recordar en booleano de una cadena o string vacioa "" es false, se puede ver en la consola poniendo: console.log(boolean("")), en este caso al ser declarada siempre se va a ejectuar por lo del hoisting, si fuese de flecha seria expresada que seria la siguiente opcion
function contarCaracteres(cadena = ""){
    if(!cadena){
        console.warn("no inresaste ninguna cadena")
    }else{
        console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres` )
    }
}

contarCaracteres("hola")
