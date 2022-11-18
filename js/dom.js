

// window.alert("alerta")
// podemos almacenar la confirmacion y cancelacion en una variable
// window.confirm("confirmacion")
// peudes guardar el prompt en una variable
// window.prompt("aviso")
// todo lo que cuelga de window se puede poner directamente sin poner el window


const $btnAbrir = document.getElementById("abrir-ventana"),
    $btnCerrar =document.getElementById("cerrar-ventana"),
    $btnImprimir =document.getElementById("imprimir-ventana")

    let ventana;
    $btnAbrir.addEventListener("click",e=>{
       ventana = window.open("https://jonmircha.com")
    })
    $btnCerrar.addEventListener("click",e=>{
        // window.close()
        ventana.close()
    })
    $btnImprimir.addEventListener("click",e=>{
        // puedes crear una hoja de estilos para imprimir de mejor calidad cuandos e clicke a el boton a la vez tambien se podra gaurdar en pdf aparte de imprimir
        window.print()
    })