


const $card = document.querySelector(".card")
console.log($card)
// class list me devuelve un arreglo con la propiedad de ula clase que tiene y su valor
console.log($card.classList)
// A evaluar si un elemento particular en caso de tener o no esa clase:
console.log($card.classList.contains("rotate-45"))

// como agregar las clases
$card.classList.add("rotate-45")
console.log($card.classList.contains("rotate-45"))
console.log($card.className)
console.log($card.classList)
$card.classList.remove("rotate-45")
console.log($card.classList.contains("rotate-45"))
// metodo como interrupto osea que si no la tiene se la agrega y si la tiene se la quita tipo interrumpor
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"))
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"))
// como lo tipico de Dark mode modo oscuro o modo normal el toggle podria usarse como interruptor

// Que pasa sinosotros tuviesemos la necesidad no solo de quitar o poenr sino una clase en particular remplazar por otra:
$card.classList.toggle("rotate-45")
// usaremos replace , el priemr parametro es la clase a remplazar y el segundo parametro es la nueva clase por la que va a ser remplazada
$card.classList.replace("rotate-45", "rotate-135")
// Si tu tienes la necesedidad de remplazar,quitar varias clases al mismo tiempo lo puedes hacer, puedes agregar mas de una clase a la vez solo separando por una coma al igual que con remove:
$card.classList.add("opacity-80","sepia")
$card.classList.remove("opacity-80","sepia")
$card.classList.toggle("opacity-80","sepia")