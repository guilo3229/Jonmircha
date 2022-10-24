const validarPatron = (cadena = "", patron = undefined)=>{

    if (!cadena ) return console.info("No has introducido nada en la seccion de la cadena")
    if (typeof cadena !== "string")return console.error(`El valor "${cadena}" introducido no es de tipo cadena`)

    if (patron=== undefined)return console.info("No has introducido nada en la seccion del patron o el valor es indefinido")

    if (!(patron instanceof RegExp))return console.error(`El valor "${patron}" introducido no es una expresion regular`)

    return(patron.test(cadena))
        ?console.info (`La cadena "${cadena}" ha sido validada por el patron "${patron}"`)
        :console.info (`La cadena "${cadena}" No ha sido validada por el patron "${patron}"`)
}


validarPatron("joMircha@gmais23.com",new RegExp(/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,"i"))