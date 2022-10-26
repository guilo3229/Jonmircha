
// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const arrayAscendenteDescendente = (arr = undefined) => {
    if (arr === undefined) return console.warn("No se introdujo ningun valor")
    if(!(arr instanceof Array)) return console.error(`El valor introducido: "${arr}" no es un array`)
    if(arr.length === 0) return console.error("El Array esta vacio")

    for (let i of arr){
        if (typeof i !== "number") return console.error(``)
    }
    // let arrAscendente = arr.map(a=>a)
    // let arrDescendente = arr.map(a=> a)
    let arrAscendente = arr.map(a=>a)
    let arrDescendente = arr.map(a=> a)
    arrAscendente.sort((a,b)=>{
        return a-b
    })
    arrDescendente.sort((c,d)=>{
        return d-c
    })
    console.log(arrAscendente)
    console.log(arrDescendente)
    console.info({
        arrAscendente,
        arrDescendente
    })
}

arrayAscendenteDescendente([1,7,5,1,6,9,5,4])