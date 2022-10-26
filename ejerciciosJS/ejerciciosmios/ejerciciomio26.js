// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promedio = (arr = undefined) =>{
    if (arr=== undefined)return console.warn("No ha introducido nada")
    if(!( arr instanceof Array))return console.error(`El valor introducido "${arr}"  no es un array`)
    if(arr.length ===0)return console.warn("El arreglo introducido esta vacio.")
    for(let num of arr){
        if(typeof num !== "number")return console.error(`El valor "${num}" ingresado no es un número`)
    }
    let valorInicial = 0
    let sumatorio = arr.reduce((acumulador,valorActual)=>acumulador+valorActual,valorInicial)
    console.log(`El promedio del array ${arr} es :\n ${sumatorio/(arr.length)}`)

}

promedio([2,3,4,5])
