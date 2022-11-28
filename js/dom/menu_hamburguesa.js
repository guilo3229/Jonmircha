export default function hamburguerMenu(panelBtn,panel,menuLink){
    const d = document;
    d.addEventListener("click",e=>{
        // Poner  espacio y asterisco (*) despues de el elemento que queremos interactuar hace que dicho evento se propague a sus hijos es decir que si dentro de un boton tenemos lineas o imagenes etc ahce que al pulsar ene stas tambien funcione ele vento de click es importante porque sino las lineas negras del boton de la hamburguesa no o lo propagamos
        if(e.target.matches(panelBtn)||e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("is-active")
            d.querySelector(panelBtn).classList.toggle("is-active")}
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active")
            d.querySelector(panelBtn).classList.remove("is-active")
        }
    })
} 