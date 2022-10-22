const calcularAnios = (fecha = undefined)=>{
if(fecha === undefined)return console.warn ("No ingresaste la fecha")
if(!(fecha instanceof Date)) return console.error("el valor que ingresaste no es una fecha válida")

let hoyMenosFecha = new Date().getTime()-fecha.getTime()
let aniosEnMS = (1000*60*60*24*365)
let aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMS)

return(Math.sign(aniosHumanos)===-1)
        ?console.info(`Faltan ${Math.abs(aniosHumanos)}  años para el ${fecha.getFullYear()}`)
        :(Math.sign(aniosHumanos===1))
            ?console.info(`Han pasado ${Math.abs(aniosHumanos)} años ,desde ${fecha.getFullYear()}`)
            :console.info(`Estamos en el año actual ${fecha.getFullYear()}`)
}

calcularAnios(new Date(2019,150,20))