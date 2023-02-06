import { App } from "./App.js";






document.addEventListener("DOMContentLoaded",App)
// hashcchange es cuando el has cambia es decir cuando cambia nuestro url de laparte de arria, funciona con window no con document
window.addEventListener("hashchange",App)