
// Lo que vamos hacer primeramente es capturar la variable de un elemento del HTML

const $whatIsDom = document.getElementById("que-es")

let text = `<p>
El Modelo de Objetos del Documento(<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML
</p>
<p>
Este proveé una representación estructural del documento, permitiendo modificar su contenido y presentacion visual mediante codigo JS.
</p>
<p>
El DOM no es parte de la especificacion de javsScript, es una API para los navegadores
</p>
`;
// iinet text no  identifica las etiquetas porque es antigua
// $whatIsDom.innerText = text
// text Content tampoco identifica las etiquetas
$whatIsDom.textContent = text
$whatIsDom.innerHTML = text
// Lo que ahce outer HTML es remplazar el contenido del DOM con el parrafo que esta de manera independiente no lo mete en un parrafo y dentro los otros 3 parrafos
$whatIsDom.outerHTML = text

