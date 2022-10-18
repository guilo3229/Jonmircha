


const recortarText =(cadena= "",longitud = undefined)=>
    (!cadena)
        ?console.warn("no ingresaste el texto")
        :(longitud === undefined)      
            ?console.warn("no ingresaste la longitud para recortar el texto")
            :console.info(cadena.slice(0,longitud))



recortarText("hola mundo", 4)
recortarText("hola hola")
recortarText("",5)
