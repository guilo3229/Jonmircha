import api from "./helpers/wp_api.js"
import {ajax} from "./helpers/ajax.js"

import { Loader } from "./components/Loader.js"
import { Header } from "./components/Header.js"
import { Posts } from "./components/Posts.js"
import { PostCard } from "./components/PostCard.js"
export function App (){
    const d = document,
    // creamos el nodo para meterle el elemnto que viene desde la aplicacion PostCArd
    $root = d.getElementById("root")
    $root.appendChild(Header())
    $root.appendChild(Posts())
    $root.appendChild(Loader())

    ajax({
        url: api.POSTS,
        cbSuccess:(posts)=>{
            console.log(posts)
            let html = ""
            posts.forEach(post =>{
                html += PostCard(post)
            })
            d.querySelector(".loader").style.display = "none"
            // buscamos el id posts que creamos dinamicamente anteriormente con el componeente posts
            d.getElementById("posts").innerHTML = html
        }
    })
}

