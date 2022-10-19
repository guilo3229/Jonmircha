
const eliminarCaracteres = (cadena = "",patron = "") =>


(!cadena)
?console.warn("La cadena esta vacia")
:(!patron)
?console.warn("no hay anda para eliminar")
:console.info(cadena.replaceAll(new RegExp(patron,"ig"),""))

eliminarCaracteres("caraculo culocara culocara","Culo")

//     if (!cadena) return console.warn("La cadena esta vacia")
//     if (!eliminar) return console.warn("la elminacion esta vacia")
//     let b = cadena.replaceAll(eliminar1,"")
//         console.log(b)
// }