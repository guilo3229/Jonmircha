


const cadenaAArreglo =(cadena="",separador=undefined) =>
    (!cadena)
        ? console.warn("no ingreaste una cadena de texto")
        :(separador ===undefined)
            ?console.warn ("No ingresaste valor en el separador")
            :console.info( cadena.split(separador))

cadenaAArreglo("hola como estas el otro dia yo estaba muy bien"," ")
cadenaAArreglo("","")