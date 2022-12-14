// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ordenarArreglo = (arr = undefined) =>{
    if (arr === undefined)return console.warn("No ingresaste un arreglo de números")
    if(!(arr instanceof Array))return console.error(`El valor "${arr}" no es un array`)
    if(arr.length === 0)return console.error("El array introducido esta vacio")
    for(let num of arr){
        if(typeof num !== "number")return console.error(`El valor "${num}" ingresado, No es un número`)
    }
    return console.info({

        arr,
        asc: arr.map(el => el).sort(),
        desc: arr.map(el => el).sort().reverse()
    })
}

ordenarArreglo([2,3,4,5,6,3])