const d = document;
const ls = localStorage
export default function (btn,darkMode){
    const $themeBtn = d.querySelector(btn),
    // Cuando queramos seleccionar un atributo comillas y luego corchetes con dicho atributo usaremos el All si queremos seleccioanr todos y lo metemos en una variable que se llama $selectors en este caso
    $selectors = d.querySelectorAll("[data-dark]")



// console.log($selectors)
let moon = "🌙",
sun ="☀"


const lightMode =()=>{
    $selectors.forEach(el =>el.classList.remove(darkMode))
    $themeBtn.textContent =moon
    ls.setItem("theme","light")
    
}
const dark_Mode =()=>{
    $selectors.forEach(el =>el.classList.add(darkMode))
    $themeBtn.textContent =sun
    // el setitem establece losv alores el primer parametro nos dice la llave que queremos influir y luego el valor es el segundo parametro,aqui se ponen los set para guardar el valor y modificarlo para luego los ifs de abajo puedan comparar y ejecutar dichos temas de light o dark
    ls.setItem("theme","dark")

}
    d.addEventListener("click",e =>{
        
        if(e.target.matches(btn)){
            // console.log($themeBtn.textContent)
            if($themeBtn.textContent === moon){
                // usamos el ForEach porque el quertyselectorAll nos da un array que es necesario recorrerlo por ello el for each
                dark_Mode()
            }else{
                lightMode()
            }
        }
    })
    // Esta funcion  boton dark_mode que va a l index se esta ejecutando dentro de un DOMcontenloadesd dentro del index y no se puede ejecutar de neuvo porque ya se esta ejecutando en el index, para ello tenemos 2 alternativas:
    // 1- usar windows.load pero este metodo va a esprarse a que carguen todos los scripts y todas los estilos por lo tanto es mas lento.ç
    // 2-Otra opcion es sacar del domcontent loaded del index la invocacion de mi funcion exportanda boton_darkmode
    d.addEventListener("DOMContentLoaded", e=>{
      console.log(ls.getItem("theme"))
      if(ls.getItem("theme")===null)ls.setItem("theme","light");
    //   el getitem obtiene los valores para estudiarlos o comaprarlos
      if(ls.getItem("theme")=== "light") lightMode();
      if(ls.getItem("theme")=== "dark") dark_Mode();
    })
}