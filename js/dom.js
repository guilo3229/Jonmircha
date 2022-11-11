
console.log("******Elementos del Documento*****")
console.log(window.document)
console.log(document)
console.log(document.body)
console.log(document.documentElement)
console.log(document.doctype)
// Para acceder al juego de caracteres que tienen nuestro documento con charset que seria UTF-8
console.log(document.characterSet)
// Para acceder al titulo
console.log(document.title)
// para acceder a los links: todos estos nodos no son arreglos y por tal no comparten todos los metodos de los arreglos aunque aparezcan asi en la consola HTM colelection no es una array
console.log(document.links)
// para ver las imagenes que hay
console.log(document.images)
// para ver los formularios dde nuestro ejemplo
console.log(document.forms)
// nos dice los estilos que tiene la pagina
console.log(document.styleSheets)
// nos dice los scripts de programacion que tiene
console.log(document.scripts)
setTimeout(() => {
    // esto nos da lo seleccionado con el raton en azul cuando dejas apretado el click izquierdo
    console.log(document.getSelection().toString())
}, 3000);
// nosotros podemos interactuar pero lo pone en la parte script 
    console.log(document.write("<h2>viendo</h2>"))
