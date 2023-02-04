export function Loader(){
    const $loader = document.createElement("img")
    // Aqui habria que buscar desde donde esta el indexedDB.html ya que crearemos dicha etiqueta alli y la buscara desde alli ojo importante !!!
    $loader.src = "app/assets/loader.svg"
    $loader.alt = "Cargando..."
    // esta clase se la ponemos para despues hacerle estilos(supongo que em el css)
    $loader.classList.add("loader")
    return $loader;
}