

const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");
    $cloneCards =$cards.cloneNode(true)
$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>
`

$newCard.classList.add("card")
// replace child sirve para sustituir
// $cards.replaceChild($newCard, $cards.children[2])
// hay un metodo para insertar antes de un nodo, no susituye simplemente lo pone antes del nodo indicado, puedes ahcerlo con first elmentchild o poeer el [0] con cards.children tambien funcionarioa]
// $cards.insertBefore($newCard,$cards.firstElementChild)
// Tambien tenemos un emtodo para eliminar
// $cards.removeChild($cards.lastElementChild)
// El Dom tiene un metodo que nos permite clonar para estos elmentos serian cloneNode, es un poco diferente al importclone del HTML
document.body.appendChild($cloneCards)