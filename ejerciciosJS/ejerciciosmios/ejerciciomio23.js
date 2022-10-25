// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.


const arrayParesImpares = ( arr = undefined) =>{
    if (arr === undefined)return console.warn("No ha introducido ningun valor")
    if(!(arr instanceof Array)) return console.error (`El valor introducido "${arr}" no es un Array`)
    if(arr.length === 0)return console.error("El array esta vacio")

    for(let i of arr){
        if(typeof i !== "number")return console.error(`El valor ${i} del array ${arr} no es numerico `)
    }
    
    return console.info({
        pares: arr.filter(i => i%2 === 0),
        impar: arr.filter(i=> i%2 === 1)
    })
}
arrayParesImpares([3,4,5,6,7,8,9,10,11])