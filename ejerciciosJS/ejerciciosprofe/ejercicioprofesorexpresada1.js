
// si pongo llaves en un arrow function tengo que poner return, pero es mejor usar el return de serie de estas
const contarCaracteres =(cadena="") =>
    (!cadena)
        ?console.warn("no ingresaste ninguna cadena")
        :console.info(`La cadena ${cadena} tiene ${cadena.length} caracteres`)

       
        contarCaracteres("guapeton")