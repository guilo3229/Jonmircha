
import hamburguerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock,alarm } from "./dom/reloj.js";
import { moveBall,shortcuts} from "./dom/teclado.js";
import CuentaRegresiva from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";
import boton_darkmode from "./dom/boton_darkmode.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolicalizacion.js";
import searchFilters from "./dom/filtro_busquedas.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";


const d = document;

d.addEventListener("DOMContentLoaded",e=>{


    digitalClock("#reloj","#activar-reloj","#desactivar-reloj")
    alarm("assets/startwalking.mp3","#activar-alarma","#desactivar-alarma")
    
    
    
    CuentaRegresiva(
        "temporizador",
        "nov 29, 2022 22:52:19",
        "Feliz cumpleaños amigo y docente digital🥩"
        )
    scrollTopButton(".scroll-top-btn")
    hamburguerMenu(".panel-btn",".panel",".menu a")

    responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    ` <a href="https://youtu.be/6IwUl-4pAzc" target="_blank" rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    )
    responsiveMedia(
        "gmaps",
        "(min-width:1024px)",
        ` <a href="https://goo.gl/maps/PHyV7xVndiVEyrqY6" target="_blank" rel="noopener">Ver Mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661513756117!2d-99.16979339914994!3d19.427025645827754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2ses!4v1669938885643!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        )
    responsiveTester("responsive-tester")
    userDeviceInfo("user-device")
    webCam("webcam")
    getGeolocation("geolocation")
    searchFilters(".card-filter",".card")
    draw("#winner-btn",".player")
    slider()
})

// Los 3 eventos que tiene el teclado son:
// 1-keydown: cuando se presiona
// 2-keypress: cuando  se mantiene presionado
// 3-keyup: cuando se suelta la tecla
d.addEventListener("keydown", (e)=>{
    shortcuts(e)
    moveBall(e,".ball",".stage")
})

boton_darkmode(".darkMode-btn","darkMode")
// KLa funcion deteccion de red no necesita cargarse cuando se carga el documento por lo tanto no hace falta que este dentro de una ddeventlisener con DOMcontent Loaded
