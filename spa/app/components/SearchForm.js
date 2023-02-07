export function SearchForm(){
    const $form = document.createElement("form"),
    $input = document.createElement("input")
    // el input por default es un input de tipo texto
    $form.classList.add("search-form")
    // vamos a darle un nombre a ese input par apoder acceder a su progrmacion posteriormente
    $input.name = "search"
    // El typo search no spone la x para borrar todo ta bueno
    $input.type = "search"
    $input.placeholder = "Buscar..."
    $form.appendChild($input)


    return $form
}