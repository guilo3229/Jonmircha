// Tenemos 2 manera de modificar valores de nuestros atributos:
//  una es la anotacion del punto
console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"))
// nos trae el valor del link del servidor que asocia al href dentro dell .link-Dom no el valor escrito en este caso
console.log(document.querySelector(".link-Dom").href)
// con getatribute nos trae el valor que realmente esta escrito en el html
console.log(document.querySelector(".link-Dom").getAttribute("href"))

// Para establecer valores a los atributos en raw seria:
document.documentElement.lang = "es"
console.log(document.documentElement.lang)
// otra manera seria: pones el atributo primero , luego coma y el nuevo valor
document.documentElement.setAttribute("lang", "ES-Mx")

// PAra guardar las variables para moficiarlas despues:
// Se puede usar let y const pero rsulta mas familar con el const,ya que podemos modificarlo ya que su esencia de DOM no varia en si como con los valores del array o de los objetos aqui es iigual ya que vamos a una referencia de dicho valor,es decir es el mismo tipo de dato, pero tambien se puede hacer en let asi que no Drama LLAMA.
// Para guardar un elemento del DOM le ponemos el simbolo del dolar para saber que variables son los de la logica y cuales son las variables del elementos del DOM $$
const $linkDOM = document.querySelector(".link-Dom")
$linkDOM.setAttribute("target", "_blank")
$linkDOM.setAttribute("rel", "noopener")
// Con el target _blank para evitar que sea insegura esa  y evaitar todo tipo de hackeo con el releaseEvents, noopener para que no haya una dependencia entre la pestaña qiue estamos abriendo y la pestaña de origen.

// Tambien podemos qutiar elementos con el remove o con el has podemos preguntarle si tiene dicho atributo por ejemplo
console.log($linkDOM.hasAttribute("rel"))
$linkDOM.removeAttribute("rel")
console.log($linkDOM.hasAttribute("rel"))

// si quiere4s trabajr con los DataTransfer-Atrributes:
console.log($linkDOM.getAttribute("data-description"))
// un map es muy similar a los objetos etc que puede poenr lo que se te salga 
console.log($linkDOM.dataset)
// como modificar elel data atribute:
console.log($linkDOM.dataset.description)
$linkDOM.setAttribute("data-description","Modelo de Objeto del documento")
console.log($linkDOM.dataset.description)
// con la anotacion del punto seria:
$linkDOM.dataset.description = "Suscribete a mi canal y comparte"
// tambien se puede preguntar si existe el data atributes y removerlos:
console.log($linkDOM.hasAttribute("data-id"))
$linkDOM.removeAttribute("data-id")
console.log($linkDOM.hasAttribute("data-id"))