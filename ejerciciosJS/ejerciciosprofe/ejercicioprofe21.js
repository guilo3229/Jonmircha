// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const arrayCuadrados = (arr = undefined)=>{
    if(arr === undefined) return console.warn("No ingresaste un arreglo de números")
    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")
    if(arr.length === 0) return console.error("El arreglo esta vacio")
    for(let num of arr){
        if(typeof num !== "number")return console.error(`El valor "${num}" ingresado, No es un numero`)
    }
    const newArr = arr.map(el => el * el )
    return console.info(`Arreglo original ${arr}, nuevo arreglo elevado al cuadrado ${newArr}`)
}
arrayCuadrados()
arrayCuadrados(true)
arrayCuadrados({})
arrayCuadrados([])
arrayCuadrados([3,4,"hola",5])
arrayCuadrados([1,2,3,4,5])