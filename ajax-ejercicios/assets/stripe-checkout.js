
import STRIPE_KEYS from "./stripe-keys.js";

// console.log(STRIPE_KEYS)

const d = document,
$tacos = d.getElementById("tacos"),
// Acordarse que del template lo que nos interesa es el contenido del template no la referencia a la etiqueta del dom
$template = d.getElementById("taco-template").content,
// Tambien vamos a necesitar un fragmento para poder hacer antes las inserciones y evitar inserciones innecesarias al DOM
$fragment= d.createDocumentFragment(),
// Como vamos a necesetiar autenticarnos para diferentes variables es mas comodo encapsular dentro de una variable dicho header con la key:
fetchOptions ={   
    headers:{
        Authorization:`Bearer ${STRIPE_KEYS.secret} `
}}
let products,prices;
// Voy  acceder al objeto promise y ejecutar el metodo all y este recibe tantas peticiones como nosotros necesitemos en fomrato de arreglo, lo bueno tambien que tiene el Promise.all que espera a que esten todas las promesas y luego las ordena en e array tal cual nosotros las hemos escrito

const moneyFormat = num =>`$${num.slice(0,-2)},${num.slice(-2)} `
Promise.all([
    fetch("https://api.stripe.com/v1/products",fetchOptions),
    fetch("https://api.stripe.com/v1/prices",fetchOptions)

])
// en este caso en el metodo then no estamos solo esoerando una respuesta sino todas las respuestas, lo que voy a hacer aqui es por cada una de las respuesta voy a hacer una arreglo, ahorabien aqui le decimos cuando tengas todas las repuestas y de donde espramos adquirir todas las respuestas de ese Promise.all y lo que vamos hacer por cada una de las repsuestas voy a crear u nuevo arreglo con el .map y por cada respuesta de cada uno de los elemento le eaplciaremos formato json con el map
.then(responses =>{
    // console.log(responses)
    // sino hacemos el operador ternario que nos mande al catch  con lo de res.ok no mandara el mensaje de error, tambien decir que en el momento que haya un error no seguira procesando el siguiente valor del array que lo esta procesando el map
   return Promise.all(responses.map(res =>res.ok ?res.json():Promise.reject(res)))

})
.then(json =>{
//  Como a nosotros solo nos interesa de la ambas promesas solamente los array que estan dentro en uno los productos y en otro los precios se lo asignaremos a las variables anterioirmente definidas (prices y products que estan con let mas arriba)
    // console.log(json)
// Como el Json que nos llega son objetos dentro de un array primero debemos asignar la posicion del objeto del cual queremos igualar su propiedad con json[] y luego .data, en este caso es json porque nosotros lo hemos definido el valor que entra en este then como json podria ser Pepito.
products = json[0].data;
prices = json[1].data;
console.log(products,prices)
prices.forEach(el =>{
    let productData = products.filter(product =>product.id === el.product)
    console.log(productData)
    // en este caso con stripe cuando clickemos lo que queremos vender tenemos que vender el id del producto en si por eso esto en otras apis puede ser diferente
    $template.querySelector(".taco").setAttribute("data-price", el.id)
    // recordemos que hay que crear un clone con la tecnica de los templates
    // primero compiamos el nodo en el cual nos estamos basando, si ponesmos true despues de la coma significaba que queriamos dicho template con todo lo que tiene dentro.

    // Ahora seguiremos entrando al template para definir la siguiente informacion segun dicho selector, en este caso ponemos la propiedad 0 porque el for Each por cada vez que gira crea un array machacando la anterior variable y volviendo ac rear un nuevo array de 1 sola posicion de esta manera no hace falta iterar dentro del array.
    

    $template.querySelector("img").src = productData[0].images;
    
    // Ahora pondremos los valores del nombre:
    $template.querySelector("img").alt = productData[0].name;
    // ahora en el figcaption vamos a ponerle el nombre del porducto con un innerhtmly luego habra que impirmir el valor del precio del unit amount decimal acuerdate de los 2 numero decimales y la propiedad currency que es la moneda cuerdate que los barrabaja los itnerpe¡rta como un espacio en el nombre de las propiedades:

    $template.querySelector("figcaption").innerHTML = `
        ${productData[0].name}
        <br>
        ${moneyFormat(el.unit_amount_decimal)} ${el.currency}
    `;


    let $clone = d.importNode($template,true)
    $fragment.appendChild($clone)
    })
    $tacos.appendChild($fragment)
})
.catch((err)=>{
    // console.log(err)
    let message = err.statusText || "Ocurrió un eror al conectarse con la API de Stripe"
    $tacos.innerHTML = `<p>Error ${err.status}: ${message}</p>`
})

// Ahora  tenemos que crear los eventos click

d.addEventListener("click",e=>{
    // console.log(e.target)
    if(e.target.matches(".taco *")){
        let price = e.target.parentElement.getAttribute("data-price")
        // Este price id que sacamos del data-price que habiamos creado dinamicamente anteriormente con js es el ue hay que mandarle a stripe
        // console.log(price)
        console.log(price)
        Stripe(STRIPE_KEYS.public).redirectToCheckout({
            lineItems:[{price:price,quantity: 1}],
            mode:"subscription",
            successUrl:"http://127.0.0.1:5500/ajax-ejercicios/assets/stripe-success.html",
            // Falta crear la pagina de cancelacion en html
            cancelUrl:"http://127.0.0.1:5500/ajax-ejercicios/assets/stripe-cancel.html"
        })
        .then(res=>{
            console.log(res)
            if(res.error){
                $tacos.insertAdjacentHTML("afterend",res.error.message)
            }
        })
    }
})