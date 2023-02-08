export function Main(){

    const $main = document.createElement("main")
    $main.id = "main";
    // aqui voy a validar que cuando el hash de la url tenga la paalabra search es decir que cuando no estemos en la seccion de busqueda le agregamos esta clase, es decir que el grid fluid siempre que haya un search en hash no pondra dicho grid fluid 
    if(!location.hash.includes("search"))$main.classList.add("grid-fluid")

    
    return $main

}