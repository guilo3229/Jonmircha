
import { ajax } from "../helpers/ajax.js"
import api from "../helpers/wp_api.js"
import { Post } from "./Post.js"
import { PostCard } from "./PostCard.js"
import { SearchCard } from "./SearchCard.js"



export async function Router(){
 const d = document,
 w= window,
 $main = d.getElementById("main")
 // desestructuramos para sacar el hash de la propiedad location que tiene document o el window
 let{hash} = location
 console.log(hash)
 // para asegurar que no hay contenido del posts lo ponemos en null y aseguramos que ese elmento que esta cargando esta vacio en este caso no hay problema pero como segurar no esta mal
 $main.innerHTML = null
 // console.log("caraculo")
 if(!hash || hash === "#/"){
    
    await ajax({
         url: api.POSTS,
         cbSuccess:(posts)=>{
             console.log(posts)
             let html = ""
             posts.forEach(post =>{
                
                 html += PostCard(post)
             })
             
             // buscamos el id posts que creamos dinamicamente anteriormente con el componeente posts
             $main.innerHTML = html
             
         }
     })
     console.log(api.POST)
     // En este caso de aqui abajo ponemos include porque despues del search vendra?= etc y la busqueda que nosotros hemos hecho en el hash por lo tanto con include le decimos que al menos tenga search para saber que estamos en search y madnarlo alli
     console.log(hash)
    }else if(hash.includes(`search`)){
        
     let query = localStorage.getItem("wpSearch")
     
     if(!query){
        // Aqui hay que ocultar el loader porque como se sale antes de que toque el loader de abajo no se oculta entonces cuando no exista en el local storage wp search no exitira el query y retornara sin pasar por el display none de abajo por eso le ponemos un display none al loader aqui
        d.querySelector(".loader").style.display = "none"
         return false;
        } 
    
        
        await ajax({
            
            url: `${api.SEARCH}${query}`,
            cbSuccess:(search) =>{
                console.log(search)
                let html = ""
                $main.innerHTML = html
                if(search.length === 0){
                    html = `
                    <p class="error">
                    No existen resultados de búsqueda para el término
                    <mark>${query}</mark>
                    </p>
                    
                    `

                }else{
                    search.forEach(casa =>{
                        console.log(casa)
                        html += SearchCard(casa)                  
                    })
                }
                $main.innerHTML =html
            }
        })
        
    }else if(hash === "#/Contacto"){
        
        $main.innerHTML = "<h2>Seccion del contacto</h2>"

    
    
    // el else lo usamos para cuando sea cualquier otra cosa del hash esto es bueno porque cada posts que traemos tendra su propio hash y por lo tanto este else nos servira para englobarlos aunque sean dinamicos, se podria hacer co el switch con la propiedad exclude, en este caso por cada vista que nosotros necesitemos deberemos ir agregando un else if, esto tambien con el switch case, como las condiciones cambian se decidio usar emjor if anidados sie sto hubiesen sido valores mas estandarizados podriamos haber usado switch-cases
    }else{
    $main.innerHTML = "<h2>Aquí cargará el contenido del Post previamente seleccionado</h2>"
        console.log(api.POST)
     
    await ajax({
        url: `${api.POST}/${localStorage.getItem("wpPostid")}`,
        cbSuccess:(post)=>{
            console.log(post)
         
            $main.innerHTML = Post(post)
            
        }
    })
    }

    d.querySelector(".loader").style.display = "none"
}