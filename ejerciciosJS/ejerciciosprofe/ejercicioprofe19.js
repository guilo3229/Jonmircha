// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

// const validarNombre = (nombre = "") =>{
// if(!nombre)return console.warn("No ingresaste un nombre")

// if(typeof nombre !== "string")return console.error(`El valor ${nombre} ingresado, No es una cadena de texto`)

// let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g

// return(expReg.test(nombre))
//     ?console.info(`"${nombre}", es un nombre válido`)
//     :console.warn(`${nombre},No es un nombre válido`)

// }


// validarNombre("  juanito caquito  ")

// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const arrayCuadrado = (arr = undefined) => {
  if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros")
}