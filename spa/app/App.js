import api from "./helpers/wp_api.js"
import {ajax} from "./helpers/ajax.js"

import { Loader } from "./components/Loader.js"
import { Header } from "./components/Header.js"
export function App (){
    const d = document,
    // creamos el nodo para meterle el elemnto que viene desde la aplicacion PostCArd
    $root = d.getElementById("root")
    $root.appendChild(Header())
    $root.appendChild(Loader())


}

