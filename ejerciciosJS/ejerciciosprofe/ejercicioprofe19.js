// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validarNombre = (nombre = "") =>{
if(!nombre)return console.warn("No ingresaste un nombre")

if(typeof nombre !== "string")return console.error(`El valor ${nombre} ingresado, No es una cadena de texto`)

let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g

return(expReg.test(nombre))
    ?console.info(`"${nombre}", es un nombre válido`)
    :console.warn(`${nombre},No es un nombre válido`)

}


validarNombre("  juanito caquito  ")