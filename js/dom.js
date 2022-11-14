// createTextNode(crea un elemento nodo de texto)
const $figure = document.createElement("figure"),
$img= document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("Animals"),
$cards = document.querySelector(".cards")
// aqui ya dinamicamente estan creadas esas etiquetas pero no estan incorporadas en el arbol del DOM y hay que ir agregandolo

// Antes de ejecutar el appendchild  al metodo cards tendria que configurar dichos elementos: a la figura agregar la imagen y la figcaption y a la ficaption el nodo texto:

// Tambien en la etiqueta img vamos a necesitar emterle sus atributos(src...etc) para ello
$img.setAttribute("src", "https://placeimg.com/200/200/animals")
$img.setAttribute("alt", "Animals")
$figcaption.appendChild($figcaptionText)
$figure.appendChild($img)
// al nodo figure necesitamos agregarle la clase card para que quede como card
$figure.classList.add("card")
$figure.appendChild($figcaption)
$cards.appendChild($figure)

// Otra forma de hacerlo:
const $figure2 = document.createElement("figure")
// usaremos la propieudad innerHTML para agregarle las cosas
$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt = "People">
<figcaption>People</figcaption>
`;
$figure2.classList.add("card")
$cards.appendChild($figure2);

// que pasa si tenemos varios elementos que queremos agregar:
const estaciones = ["Primavera","Verano","Otoño","invierno"],
$ul = document.createElement("ul")

document.write("<h3>Estaciones del Año</h3>")
document.body.appendChild($ul)
// En esto va creando un li por cada recorrido que ahce el ForEach de nuestro array no los machaca uno encima del otro
estaciones.forEach(el =>{
    const $li = document.createElement("li")
    $li.textContent = el
    $ul.appendChild($li)
})
// ahora lo haremos con HTML
const continentes = ["África","VerAmérica","Asia","Europa","Oceanía "],
$ul2 = document.createElement("ul")
document.body.appendChild($ul2);

document.write("<h3>Continendel Mundo</h3>")
document.body.appendChild($ul2)
$ul2.innerHTML = ""
// PAra que no lo machaque tenemos que hacerle el += por eso tenemos que hacerla vacia explicita, para que no de error aunque eso era entes
continentes.forEach(el=>($ul2.innerHTML += `<li>${el}</li>`))

const meses = [
"Enero",
"Febrero",
"MArzo",
"Abril",
"Mayo",
"Junio",
"Julio",
"Agosto",
"Septiembre",
"Octubre",
"Noviembre",
"Diciembre"
],
$ul3 = document.createElement("ul"),
$fragment = document.createDocumentFragment()
meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent =el;
    $fragment.appendChild($li)
})
document.write("<h3>Meses del Año</h3>")
$ul3.appendChild($fragment)
document.body.appendChild($ul3)