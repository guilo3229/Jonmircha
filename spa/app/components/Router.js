
import { ajax } from "../helpers/ajax.js"
import api from "../helpers/wp_api.js"
import { PostCard } from "./PostCard.js"



export function Router(){
 const d = document,
 w= window,
 $posts = d.getElementById("posts")
 // desestructuramos para sacar el hash de la propiedad location que tiene document o el window
 let{hash} = location
 console.log(hash)
 // para asegurar que no hay contenido del posts lo ponemos en null y aseguramos que ese elmento que esta cargando esta vacio en este caso no hay problema pero como segurar no esta mal
 $posts.innerHTML = null
 // console.log("caraculo")
 if(!hash || hash === "#/"){
    
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
             $posts.innerHTML = html
             
         }
     })
     // En este caso de aqui abajo ponemos include porque despues del search vendra?= etc y la busqueda que nosotros hemos hecho en el hash por lo tanto con include le decimos que al menos tenga search para saber que estamos en search y madnarlo alli
    }else if(hash.includes("#/search?")){
        $posts.innerHTML = "<h2>Seccion del Buscador</h2>"
    }else if(hash=== "#/contacto"){
    $posts.innerHTML = "<h2>Seccion de Contacto</h2>"
    // el else lo usamos para cuando sea cualquier otra cosa del hash esto es bueno porque cada posts que traemos tendra su propio hash y por lo tanto este else nos servira para englobarlos aunque sean dinamicos, se podria hacer co el switch con la propiedad exclude, en este caso por cada vista que nosotros necesitemos deberemos ir agregando un else if, esto tambien con el switch case, como las condiciones cambian se decidio usar emjor if anidados sie sto hubiesen sido valores mas estandarizados podriamos haber usado switch-cases
    }else{
    $posts.innerHTML = "<h2>Aquí cargará el contenido del Post previamente seleccionado</h2>"
    }

}