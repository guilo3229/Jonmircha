import api from "./helpers/wp_api.js";
import { App } from "./App.js";
import { InfiniteScroll } from "./helpers/infinite_scroll.js";



document.addEventListener("DOMContentLoaded",()=>{
    
    App()
    
    
    InfiniteScroll()
 
})
// hashcchange es cuando el has cambia es decir cuando cambia nuestro url de laparte de arria, funciona con window no con document
window.addEventListener("hashchange",()=>{
    
    api.page = 1;
    App()

})