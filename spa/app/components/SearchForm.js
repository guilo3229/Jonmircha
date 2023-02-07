export function SearchForm(){
    const d = document,
    $form = d.createElement("form"),
    $input = d.createElement("input")
    // el input por default es un input de tipo texto
    $form.classList.add("search-form")
    // vamos a darle un nombre a ese input par apoder acceder a su progrmacion posteriormente
    $input.name = "search"
    // El typo search no spone la x para borrar todo ta bueno
    $input.type = "search"
    $input.placeholder = "Buscar..."
    $input.autocomplete ="off"
    $form.appendChild($input)
    if(location.hash.includes("#/search")){
        $input.value = localStorage.getItem("wpSearch")
    }
        // El evento search se ejcuta cuando le damos al tachecito no cuando borramos la palabra dle input ojo!!
        d.addEventListener("search",e=>{
            // Este primero if para saber si es el input el que esta desencadenando el evento supongo sque si en el futuro hay mas input deberemos nombrarlos o clasificarlos para acceder a ellos ya sea estaticamente o dinamicamente
            if(!e.target.matches("input[type ='search']"))return false
            if(!e.target.value)localStorage.removeItem("wpSearch")
        })
        d.addEventListener("submit", e =>{
            if(!e.target.matches(".search-form"))return false;
            e.preventDefault()
            localStorage.setItem("wpSearch",e.target.search.value)
            location.hash =`#/search?search=${e.target.search.value}`
        })
    return $form
}