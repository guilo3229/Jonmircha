


const $linkDOM = document.querySelector(".link-Dom")
// Es mejor usar la anotacion del punto y no del get atributte, ya que de esta manera no sale el objeto con todas los diferentes propiedades validas y las que estan npuestas tambien con su valor etc
console.log($linkDOM.style)
// con el getattribute te saca solo lo que esta escrito lo del punto te saca todo lo que este asociado como lo del link de la clase anterior
console.log($linkDOM.getAttribute("style"))

console.log($linkDOM.style.backgroundColor)
console.log($linkDOM.style.color)
// otra manera de acceder a ellas es mediante windows.getComputedtyle, podemos ver los valores predeterminado que le dan al css, si queremos acceder a la propiedad deberemos usar el .getPropertyValue() despues de usar el getComputedStyle
console.log(window.getComputedStyle($linkDOM))
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"))

$linkDOM.style.setProperty("text-decoration", "none")
$linkDOM.style.setProperty("display","block")
// tambien podemos acceder y modificar atraves de la forma del punto .
$linkDOM.style.width = "50%"
$linkDOM.style.textAlign = "venter"
$linkDOM.style.marginLeft = "auto"
$linkDOM.style.marginRight = "auto"
$linkDOM.style.padding = "1rem"
$linkDOM.style.borderRadius = ".5rem" 
console.log($linkDOM.style)
console.log($linkDOM.getAttribute("style"))
console.log(getComputedStyle($linkDOM))

// Variables en CSs- Custom Properties(apunta al root  al HTML(document.documentElement representa a todo el html) arriba en style)
const $html = document.documentElement,
    $body =document.body;
// Estas variables no les ponemos el signo del dolar porque lo consideramosno del dom sino del css
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varyellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")

    console.log(varDarkColor,varyellowColor)

    $body.style.backgroundColor = varDarkColor
    $body.style.color = varyellowColor
    // Lo escribe pero no se cambia, porque se lo aplicamos al HTML no al body, es decir que el global es rosa pero en el body mas especifico es pink,
    // aqui lo que ahce es ponerle al HTML style... en el estilo dark-color  luego una coma y el color luego en la siguiente linea coge la variable varDarkcolor y le pone el valor que tenga el html en esa posicion osea le da su valor y por ultimo esta constante se la mete al body.style 
    $html.style.setProperty("--dark-color","#222")
    varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
    $body.style.setProperty("background-color", varDarkColor)
