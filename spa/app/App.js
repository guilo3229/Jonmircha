
import { Loader } from "./components/Loader.js"
import { Header } from "./components/Header.js"
import { Posts } from "./components/Posts.js"

import { Router } from "./components/router.js"
export function App (){
   
    // creamos el nodo para meterle el elemnto que viene desde la aplicacion PostCArd
 let $root = document.getElementById("root")
 $root.appendChild(Header())
 $root.appendChild(Posts())
 $root.appendChild(Loader())
// console.log("probando")

    Router()
}

