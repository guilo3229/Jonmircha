// console.log(window)
// console.log(document)
// let texto= `Hola soy tu amigo y docente digital....jonathan Mircha`
// const hablar = (texto) => {
//   speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
// }
// hablar(texto)

// console.log("************* Elementos del Documento *************")
// console.log(window.document)

// console.log(document.head)
// console.log(document.body)
// console.log(document.documentElement)
// console.log(document.doctype)
// console.log(document.characterSet)
// console.log(document.title)
// console.log(document.links)
// console.log(document.images)
// console.log(document.forms)
// console.log(document.styleSheets)
// console.log(document.scripts)
// console.log(document.getSelection().toString())
// setTimeout(() => {
//   console.log(document.getSelection().toString())
// }, 3000);
// document.write("<h1>Hola mundo</h1>")
// console.log(document.getElementsByTagName("li"))
// console.log(document.getElementsByClassName("card"))
// console.log(document.getElementsByName("nombre"))
// console.log(document.getElementById("menu"))
// console.log(document.querySelector("a"))

// document.querySelectorAll("a").forEach(el => console.log(el))
// console.log(document.querySelector(".card"))
// console.log(document.querySelectorAll(".card"))
// console.log(document.querySelectorAll(".card")[1])
// console.log(document.querySelectorAll("#menu li")[1])
// console.log(document.documentElement.getAttribute("lang"))
// console.log(document.querySelector(".link-dom").href)
// console.log(document.querySelector(".link-dom").getAttribute("href"))
// document.documentElement.lang = "es"
// document.documentElement.setAttribute("lang","es-MX")
// console.log(document.documentElement.getAttribute("lang"))
// const $linkDom = document.querySelector(".link-dom")
// $linkDom.setAttribute("target", "_blank")
// // El ponerle rel noopener es para que no tenga dependencia la nueva ventana abierta de la principal evitando hackeos(buenas practicas)
// $linkDom.setAttribute("rel","noopener")
// $linkDom.setAttribute("href", "https://youtube.com/jonmircha")
// console.log($linkDom.hasAttribute("rel"))
// $linkDom.removeAttribute("rel")
// console.log($linkDom.hasAttribute("rel"))

// // Para usar Data-Attributes

// console.log($linkDom.getAttribute("data-description"))
// console.log($linkDom.dataset)
// console.log($linkDom.dataset.id);
// $linkDom.setAttribute("data-description", "Modelo de Objeto del documento")
// console.log($linkDom.dataset.description);
// $linkDom.dataset.description = "suscribete a mi canal y comparte"
// console.log($linkDom.dataset.description);
// console.log($linkDom.hasAttribute("data-id"))
// $linkDom.removeAttribute("data-id")
// console.log($linkDom.hasAttribute("data-id"))
// const $linkDom = document.querySelector(".link-dom")

// console.log($linkDom.style)
// console.log($linkDom.getAttribute("style"))
// console.log($linkDom.style.backgroundColor)
// console.log($linkDom.style.color)

// console.log(getComputedStyle($linkDom).getPropertyValue("background-color"))
// Podemos acceder con el style.setproperty par amodificarlo, el set es enviar recuerda es como lo de una api pero con el navegador por eso es o igualando su propiedad a lo que quieres o metiendole sets se parece!!
// $linkDom.style.setProperty("text-decoration","none")
// $linkDom.style.setProperty("display", "block")
// Tambien podemos entrar por la notacion del punto:
// $linkDom.style.width = "50%"
// $linkDom.style.textAlign = "center"
// $linkDom.style.marginLeft= "auto"
// $linkDom.style.marginRight = "auto"
// $linkDom.style.padding = "1rem"
// $linkDom.style.borderRadius = ".5rem"
// console.log($linkDom.style)
// console.log($linkDom.getAttribute("style"))

// // VAriables CSS - Custom Properties CSS
// const $html = document.documentElement,
//   $body = document.body
//   let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
//   varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")
// console.log(varDarkColor, varYellowColor)
// $body.style.backgroundColor = varDarkColor,
//   $body.style.color = varYellowColor

// $html.style.setProperty("--dark-color", "pink")
// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")

// const $card = document.querySelector(".card")

// console.log($card)
// console.log($card.className )
// console.log($card.classList )
// console.log($card.classList.contains("rotate-45"))
// $card.classList.add("rotate-45")
// console.log($card.classList.contains("rotate-45"))
// console.log($card.className)
// console.log($card.classList)
// $card.classList.remove("rotate-45")
// console.log($card.classList.contains("rotate-45"))
// $card.classList.toggle("rotate-45")
// console.log($card.classList.contains("rotate-45"))
// $card.classList.toggle("rotate-45")
// console.log($card.classList.contains("rotate-45"))
// $card.classList.toggle("rotate-45")
// $card.classList.replace("rotate-45", "rotate-135")
// $card.classList.add("opacity-80","sepia")
// $card.classList.remove("opacity-80","sepia")
// $card.classList.toggle("opacity-80","sepia")

// const $whatIsDom = document.getElementById("que-es")
// let text = `
//  <p>
//  El modelo de Objetos del documento <b><i>DOM-Document Object Model</i></b> es una API para documentos HTML y XML
//  </p>
// <p>
// Este provee una represetanción estructural del documento,permitiendo modificar su contenido y presentacion visual mediante código JS.
// </p>
// <p>
// <mark>El Dom no es parte de la especificacion de JavaScript, es una API para los navegadores
// </mark>
// </p>
// `
// InnerText no es estandar y estaba para iternex explorer, no distingue las etiquetas
// $whatIsDom.innerText = text
// Text context  las tabulaciones e identaciones, pero aun no distingue las etiquetas HTML, text content se puede hacer apra que no se inyecten codigo HTML como por ejemplo el chat de youtube para eviyar imagenes memes etc y asi lo bloqueas (solo texto)
// $whatIsDom.textContent = text
// Este si ue quita las tabulaciones y espacios y distingue las etiquetas negritas etc, para interfaz de soporte para que peudan mandar diferente tiepo de etiqueta etc estaria bien
// $whatIsDom.innerHTML = text
// Inner HTML remplaza el contenido HTML y el outerHTML sustituye las etiquetas o etiqueta por la que estaba no la engloba dentro de estas como innerHTML
// $whatIsDom.outerHTML = text
// const $cards = document.querySelector(".cards")

// console.log($cards)
// console.log($cards.children[2])
// console.log($cards.childNodes)
// console.log($cards.parentElement)
// console.log($cards.parentNode)
// console.log($cards.firstElementChild)
// console.log($cards.lastElementChild)
// console.log($cards.previousElementSibling)
// console.log($cards.nextElementSibling)
// Closest es un metodo por lo tanto lleva parentesis y lo que hace va a buscar un ancestro el padre mas cercano del selector que nosotros queremos, si no tiene ninguno de los que buscamos nos dara null
// console.log($cards.closest("body"))
// console.log($cards.children[3].closest("section"))

//   const $figure = document.createElement("figure"),
//     $image = document.createElement("img"),
//     $figcaption = document.createElement("figcaption"),
//     $figcaptionText = document.createTextNode("Animals"),
//     $cards = document.querySelector(".cards"),
//   $figure2 = document.createElement("figure")


//   $image.setAttribute("src","https://loremflickr.com/320/240/Animals")
//   $image.setAttribute("alt", "Animals")
//   $figure.classList.add("card")


//   $figcaption.appendChild($figcaptionText)
//   $figure.appendChild($image)
//   $figure.appendChild($figcaption)
//   $cards.appendChild($figure)
//   $figure2.innerHTML = `
//     <img src="https://loremflickr.com/320/240/people" alt="people">
//     <figcaption>People</figcaption>

// `
//   $figure2.classList.add("card")
// $cards.appendChild($figure2)

// const estaciones = ["primavera", "Verano", "Otoño", "Invierno"],
//   $ul = document.createElement("ul")
// // No es buena practica el write pero como prueba esta bien
// document.write("<h3>Estaciones del año</h3>")

// document.body.appendChild($ul)

// estaciones.forEach(el => {
//   const $li = document.createElement("li")
//   $li.textContent = el
//   $ul.appendChild($li)
// })

// const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
//   $ul2 = document.createElement("ul")
// document.write("<h3>Continentes del mundo</h3>")
// document.body.appendChild($ul2)

// $ul2.innerHTML = "" ;
// continentes.forEach(el => $ul2.innerHTML += `<li>${el}</li>`)

// const meses = [
//   "Enero",
//   "Febrero",
//   "Marzo",
//   "Abril",
//   "Mayo",
//   "Junio",
//   "Julio",
//   "Agosto",
//   "Septiembre",
//   "Octubre",
//   "Noviembre",
//   "Diciembre"
// ],

//   $ul3 = document.createElement("ul"),
//   $fragment = document.createDocumentFragment()

// meses.forEach(el => {

//   const $li = document.createElement("li")
//   $li.textContent = el
//   $fragment.appendChild($li)
// })

// document.write("<h3>Meses del Año</h3>")
// $ul3.appendChild($fragment)

// document.body.appendChild($ul3)
// Como voy a meter varias tarjetas tenemos que apuntar a nuestra variable al padre cards usando queryselector con el .cards que es su clase
// const $cards = document.querySelector(".cards"),
//   // Aqui lo que tenemos que meter en una variable el !"contenido"¡ del template
//   $template = document.getElementById("template-card").content,
//   // Luego crearemos un fragment donde iremos emtiendo dinamicamente la informacion hasta que este completa y no tengamos que renderizar varias veces
//   $fragment = document.createDocumentFragment(),
//   cardContent = [
//     {
//       title: "Tecnologia",
//       img: "https://loremflickr.com/320/200/space,rocket,liftoff"
//     },
//     {
//       title: "Animals",
//       img: "https://loremflickr.com/320/240/Animals"
//     },
//     {
//       title: "Arquitectura",
//       img: "https://loremflickr.com/320/240/Architecture"
//     },
//     {
//       title: "Gente",
//       img: "https://loremflickr.com/320/240/people"
//     },
//     {
//       title: "Nature",
//       img: "https://loremflickr.com/320/240/Nature"
//     }
//   ];
// cardContent.forEach(el => {
//   $template.querySelector("img").setAttribute("src", el.img);
//   $template.querySelector("img").setAttribute("alt", el.title);
//   $template.querySelector("figcaption").textContent = el.title
//   // Creamos un clone para crear un nuevo clone del template nuevo que acabamos hacer y de esta manera de 1 solo template podemos hacer todo, usamos el true para traernos todo lo que lleva dentro el $template la img y el figure
//   let $clone = document.importNode($template, true)
//   // En cada ciclo le pegaremos al fragmento el clone que toca como appendchild es decir cada vuelta mantendra la informacion anterior de las iteraciones mas la actual
//   $fragment.appendChild($clone)
// })
// $cards.appendChild($fragment)


// const $cards = document.querySelector(".cards"),
//   $newCard = document.createElement("figure"),
//   $cloneCards = $cards.cloneNode(true)

// $newCard.innerHTML = `<img src="https://loremflickr.com/320/200/space,rocket,liftoff" alt="Tech">
//     <figcaption>Tech</figcaption>`

// $newCard.classList.add("card")

// $cards.replaceChild($newCard, $cards.children[2])

// $cards.insertBefore($newCard,$cards.firstElementChild)
// $cards.removeChild($cards.lastElementChild)

// document.body.appendChild($cloneCards)

// .insertAdjecent...
// .insertAdjacentElement(position,el)
// .insertAdjacentHTML(position, html)
// .insertAdjacentText(position,text)

// Posiciones:
// beforebegin(hermano anterior)
// afterbegin(primer hijo)
// beforeend(ultimo hijo)
// afterend(hermano siguiente)

// const $cards = document.querySelector(".cards"),
//   $newCard = document.createElement("figure")


  // $newCard.innerHTML = `<img src="https://loremflickr.com/320/200/space,rocket,liftoff" alt="Tech">
  //   <figcaption>Tech</figcaption>`;
// let $contenCard = `
// <img src="https://loremflickr.com/320/200/any" alt="any">
//     <figcaption></figcaption>
// `;
// $newCard.classList.add("card")

// $newCard.insertAdjacentHTML("beforeend",$contenCard)
// $newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any")
// $cards.insertAdjacentElement("afterbegin", $newCard)

// $cards.prepend($newCard)
// $cards.append($newCard)
// $cards.before($newCard)
// $cards.after($newCard)

// function holaMundo() {
//   alert("Hola mundo2")
//   console.log(event)
// }

// function saludar(nombre= "Desconocid@") {
//   alert(`Hola ${nombre}`)
//   console.log(event)
// }
// const $eventoSemantico = document.getElementById("evento-semantico")
// const $eventoMultiple = document.getElementById("evento-multiple"),
//   $eventoRemover = document.getElementById("evento-remover")
// // Cuando tu defines un objeto como elemento-semantico igualas a la funcion sin aprentesis porque sino se ejecutaria al cargar la pagina
// $eventoSemantico.onclick = holaMundo
// $eventoSemantico.onclick = function (e) {
//   alert("Hola mundo manejador de eventos semanticos")
//   console.log(e)
//   console.log(event)
// }

// // Manejadores multiples addeventlisenter puedes poner varios metodos para el evento

// $eventoMultiple.addEventListener("click", holaMundo)
// $eventoMultiple.addEventListener("click", (e) => {
//   alert("Manejador de Evetos multiples")
//   console.log(e)
//   console.log(e.type)
//   console.log(e.target)
//   console.log(event)
// })
// $eventoMultiple.addEventListener("click", () => {
//   saludar()
//   saludar("jon")

// })
// const removerDobleClick = (e) => {
//   alert(`Removiendo el evento de tipo ${e.type}`)
//   console.log(e)
//   $eventoRemover.removeEventListener("dblclick", removerDobleClick)
//   $eventoRemover.disabled =true
// }
// $eventoRemover.addEventListener("dblclick", removerDobleClick)

// const $divEventos = document.querySelectorAll(".eventos-flujo div"),
//   $linkEventos =document.querySelector(".eventos-flujo a")
// console.log($divEventos)
// function flujoEventos(e) {
//   console.log(`Hola te saluda ${this}, el click lo origino ${e.target.className}`)
//   // e.stopPropagation()

// }
// $divEventos.forEach(div => {
  //   // Fase de burbuja  es el tercer parametro
  //   div.addEventListener("click", flujoEventos)
//   // Fase de captura
//   // div.addEventListener("click", flujoEventos,true)
  // // div.addEventListener("click", flujoEventos,{
    //   capture: false,
    //   once:true
    // })
  // })

  // $linkEventos.addEventListener("click", (e) => {

    //   // e.preventDefault hace que el comportamiento por defecto no lo haga
    //   e.preventDefault()
    //   e.stopPropagation()
    // })
    // document.addEventListener("click", (e) => {
    //   console.log("Click en", e.target)
    //   if (e.target.matches(".eventos-flujo div")) {
    //     flujoEventos(e)
    //   }
    //   if (e.target.matches(".eventos-flujo a")) {
    //     alert("Hola soy tu amigo y docente digital... Jonathan Mircha")
    //     e.preventDefault()
    //   }
    // })

    // console.log(document)
// window.addEventListener("resize", (e) => {
//   console.clear()
//   console.log("******Evento relize******")
//   console.log(window.innerWidth)
//   console.log(window.innerHeight)
//   console.log(window.outerWidth)
//   console.log(window.outerHeight)
//   console.log(e)
// })

// window.addEventListener("scroll", (e) => {
//   console.clear()
//   console.log("****** Evento Scroll ******")
//   console.log(window.scrollX)
//   console.log(window.scrollY)
//   console.log(e)
// })

// window.addEventListener("load", e => {

//   console.log("****** Evento load ******")
//   // Esto es para detectarte en donde esta tus recuadro de pagina respecto a tu priemra pantalla si es que tienes 2
//   console.log(window.screenX)
//   console.log(window.screenY)
//   console.log(e)
// })

// document.addEventListener("DOMContentLoaded", (e) => {

//   console.log("****** Evento DOMContentLoaded ******")
//   // Esto es para detectarte en donde esta tus recuadro de pagina respecto a tu priemra pantalla si es que tienes 2
//   console.log(window.screenX)
//   console.log(window.screenY)
//   console.log(e)

// })

// window.alert("alerta")
// window.confirm("confirmacion")
// window.prompt("Aviso")
// alert("Jon Mircha")
// const $btnAbrir = document.getElementById("abrir-ventana")
// const $btnCerrar = document.getElementById("cerrar-ventana")
// const $btnImprimir = document.getElementById("imprimir-ventana")
// let ventana

// $btnAbrir.addEventListener("click", (e) => {
//   ventana = window.open("https://jonmircha.com")
//  })
// $btnCerrar.addEventListener("click", (e) => {
//   //  window.close(ventana)
//   ventana.close()
//  })
// $btnImprimir.addEventListener("click", (e) => {
//    window.print()
//  })

// console.log("******* Objeto URL (location) *******")
// console.log(location);
// console.log(location.origin);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.href);
// console.log(location.hash);
// console.log(location.pathname);
// // location.reload()
// console.log(location.search)

// console.log("******* Objeto Historial(history) *******")
// console.log(history)
// console.log(history.length)
// console.log(history)
// console.log(history.length)
// history.forward(1)
// history.go(-3)
// history.back(-2)

// console.log("******* Objeto Navegador(navigator) *******")
// console.log(navigator)
// console.log(navigator.connection)
// console.log(navigator.geolocation)
// console.log(navigator.mediaDevices)
// console.log(navigator.mimeTypes)
// console.log(navigator.onLine)
// console.log(navigator.serviceWorker)
// console.log(navigator.storage)
// console.log(navigator.usb)
// console.log(navigator.userAgent)