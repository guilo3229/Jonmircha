const eliminarCaracteres = (cadena = "",patron = "") =>


(!cadena)
?console.warn("La cadena esta vacia")
:(!patron)
?console.warn("no hay anda para eliminar")
:console.info(cadena.replaceAll(new RegExp(patron,"ig"),""))

eliminarCaracteres("caraculo culocara culocara","Culo")