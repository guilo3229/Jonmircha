// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const  fechas =  (año=undefined,mes=undefined,dia=undefined)=> {
    if (año === undefined)return console.warn("No has introducido ningun valor en el año")
    if(typeof año !== "number")console.error(` El valor introducido en año: ${año} no es numérico `)
    


    let hoy = new Date()

    if( año >= hoy.getFullYear()) return console.error (` El valor introducido en año: ${año} no puede ser posterior o igual al año actual `)

    console.log(`la diferencia de años de la fecha a la actual seria: ${hoy.getFullYear()-año}`)
}
console.log()
fechas(1925,10,12)