// Esta enfocado a los elementos, son nodos tipo elementos

const $cards = document.querySelector(".cards")
console.log($cards)
// Para ver sus hijos en la consola ponemos.children y nos devuelve un HTML
console.log($cards.children)
console.log($cards.children[2])
// Childnodes hace referencia a los nodos hijos, podemos ver que en la lista de nodos un text entre cada figure.card nodo ya que esos text son los saltos de lineas espacios)
console.log($cards.childNodes)

// con .parent te muestra el elemento siguiente padre y si le pones el .parentnode tambien es el body porque es el nodo padre
console.log($cards.parentNode)
console.log($cards.parentElement)
// firtChild hace referencia al primer hijo nodo
console.log($cards.firstChild)
// para hace referencia al primer elemento hijo:
console.log($cards.firstElementChild)
// para detectar el ultimo nodo y detectar el ultimo elemento hijo:
console.log($cards.lastChild)
console.log($cards.lastElementChild)
// Tambien podemos buscar el hermano que esta antes y el hermano que esta despues, su hermano anterior seria el enlace y su hermano posterior la seccion script.
// lo mismo qcon nodo y elemento:
console.log($cards.previousSibling)
console.log($cards.previousElementSibling)
// El siguiente hermano
console.log($cards.nextSibling)
console.log($cards.nextElementSibling)

console.log($cards.previousSibling)
// Un nuevo metodo es el metodo closes, va a buscar el padre mas cercano del tipo de selector que nosotros le demos
console.log($cards.closest("div"))
console.log($cards.closest("body"))
console.log($cards.children[3].closest("section"))




