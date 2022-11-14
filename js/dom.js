


const $cards = document.querySelector(".cards")
const $template = document.getElementById("template-card").content
const $fragment = document.createDocumentFragment(),
cardContent =[
    {
        title:"Tecnologia",
        img: "https://placeimg.com/200/200/tech"
    },
    {
        title:"Animales",
        img: "https://placeimg.com/200/200/animals"
    },
    {
        title:"Arquitectura",
        img: "https://placeimg.com/200/200/arh"
    },
    {
        title:"Gente",
        img: "https://placeimg.com/200/200/people"
    },
    {
        title:"Naturaleza",
        img: "https://placeimg.com/200/200/nature"
    }
];

cardContent.forEach(el =>{
    $template.querySelector("img").setAttribute("src",el.img)
    
    $template.querySelector("img").setAttribute("alt",el.title)
    
    $template.querySelector("figcaption").textContent = el.title;
    // Ahora clonariamos dicha estructura para que no haya problemas, ya que ese template es unico digamos que si yo usaria ese template para la primera tarjeta no estaria dispobible para la 2 da 3cera EventCounts, lo que tenemos que hacer es clonarlo,el true dice que copie toda la estructura no solo la etiqueta de open y de cierre
    let $clone = document.importNode($template,true)
    $fragment.appendChild($clone)
})
$cards.appendChild($fragment)