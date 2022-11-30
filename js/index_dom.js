
import hamburguerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock,alarm } from "./dom/reloj.js";
import { moveBall,shortcuts} from "./dom/teclado.js";
import CuentaRegresiva from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";
import boton_darkmode from "./dom/boton_darkmode.js";
const d = document;

d.addEventListener("DOMContentLoaded",e=>{


    hamburguerMenu(".panel-btn",".panel",".menu a")
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj")
    alarm("assets/startwalking.mp3","#activar-alarma","#desactivar-alarma")
   
    

    CuentaRegresiva(
        "temporizador",
        "nov 29, 2022 22:52:19",
        "Feliz cumpleaños amigo y docente digital🥩"
        )
    scrollTopButton(".scroll-top-btn")
    boton_darkmode(".darkMode-btn","darkMode")
})

// Los 3 eventos que tiene el teclado son:
// 1-keydown: cuando se presiona
// 2-keypress: cuando  se mantiene presionado
// 3-keyup: cuando se suelta la tecla
d.addEventListener("keydown", (e)=>{
    shortcuts(e)
    moveBall(e,".ball",".stage")
})

