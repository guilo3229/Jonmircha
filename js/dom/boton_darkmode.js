const d = document;

export default function (btn,darkMode){
    const $themeBtn = d.querySelector(btn),
    // Cuando queramos seleccionar un atributo comillas y luego corchetes con dicho atributo usaremos el All si queremos seleccioanr todos y lo metemos en una variable que se llama $selectors en este caso
    $selectors = d.querySelectorAll("[data-dark]")



console.log($selectors)
let moon = "🌙",
sun ="☀"

    d.addEventListener("click",e =>{
        
        if(e.target.matches(btn)){
            console.log($themeBtn.textContent)
            if($themeBtn.textContent === moon){
                $selectors.forEach(el =>el.classList.add(darkMode))
                $themeBtn.textContent =sun
            }else{
                $selectors.forEach(el =>el.classList.remove(darkMode))
                $themeBtn.textContent =moon
            }
        }
    })
}