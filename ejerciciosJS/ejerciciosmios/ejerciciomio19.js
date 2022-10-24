// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero

const nombreValido = (nombre = "")=> {

    if (nombre === "")return console.warn("No ha introducido ningun valor")
    if(typeof nombre !== "string")return console.error(`El valor introducido "${nombre}" no es un string`)

    let regex = /^[A-Za-zÁÉÍÓÚáéíóúüñÑ ]+$/g
    if(regex.test(nombre) ===true){
        
        return console.info(`El nombre: "${nombre.trim()}" es valido`)
    }else{
        return console.info("El nombre no es valido")
    }
}

nombreValido("        pepi to ca raculito           ")