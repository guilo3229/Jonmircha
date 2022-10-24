const contarLetras = (cadena="")=>{

    if(cadena === "")return console.warn("No has introducido ningun valor en la cadena")
    if (typeof cadena !== "string") return console.error(`El valor ${candena} ingresado, No es una cadena de texto`)

    let vocales = 0
    let consonantes = 0
    cadena = cadena.toLowerCase()

    for( let letra of cadena){
        if(/[aeiouáéíóúü]/.test(letra))vocales++
        
        if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra))consonantes++
    
    }
    return console.info({
        cadena,
        vocales,
        consonantes
    })
}

contarLetras("Hola mundo como te encuentras?")