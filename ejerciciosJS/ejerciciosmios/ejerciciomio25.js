// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]

const eliminarDuplicados = (arr = undefined)=>{

    if(arr === undefined) return console.warn("No has introducido ningun array")
    if(!(arr instanceof Array)) return console.error(`El valor de "${arr}" no es un array`)
    if(arr.length === 0)return console.error("El array introducido esta vacio")
    if(arr.length === 1) return console.warn("El arreglo debe tener al menos 2 elementos")


    return console.log({
        original: arr,
        sinDuplicados: arr.filter((value,index,self)=> self.indexOf(value) === index)
    })
}

eliminarDuplicados([5,5,3,2,1,5,3])