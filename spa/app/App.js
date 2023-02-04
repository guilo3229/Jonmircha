import api from "./helpers/wp_api.js"
import {ajax} from "./helpers/ajax.js"
import { Title } from "./components/PostCard.js"
import { Loader } from "./components/Loader.js"
export function App (){
    const d = document,
    // creamos el nodo para meterle el elemnto que viene desde la aplicacion PostCArd
    $root = d.getElementById("root")
    $root.appendChild(Title())
    $root.appendChild(Loader())

    ajax({
        url:"no-valida",
        cbsuccess:()=>{}
    })
}

