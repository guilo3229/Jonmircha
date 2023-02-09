import api from "./wp_api.js"
import { PostCard } from "../components/PostCard.js";
import { SearchCard } from "../components/SearchCard.js";
import { ajax } from "./ajax.js";

export async function InfiniteScroll (){
    const d = document,
    w=window;

    let query = localStorage.getItem("wpSearch"),
    apiURL,
    Component,// High Order Component
    isloading = false,
    ischange = false
    w.addEventListener("scroll", async (e)=>{
        await d.addEventListener("click", e =>{
            
            if (e.target.matches("a")){
                ischange =true
                setTimeout(()=>{
                    ischange =false
                },400)
            }
        })

            let {scrollTop,clientHeight,scrollHeight} = d.documentElement,
            {hash}= w.location;
            
           
            if(scrollTop + clientHeight >= scrollHeight && !isloading && !ischange){
            isloading= true

                setTimeout(async function (){

                    isloading = false
                    api.page++;
                
                        if(!hash||hash === "#/"){
                        
                        apiURL = `${api.POSTS}&page=${api.page}`
                        Component = PostCard;
                        }else if(hash.includes("search")){
                        apiURL = `${api.SEARCH}&page=${api.page}`
                        Component= SearchCard;
                        }else{
                        console.log("retorna?")
                        return false
                        }
                        console.log(apiURL)
                        d.querySelector(".loader").style.display= "block";
                        await ajax({
                    
                        url:apiURL,
                        cbSuccess:(posts)=>{
                        // console.log(posts)
                        let html = ""
                        posts.forEach(post => html+=Component(post))
                        d.getElementById("main").insertAdjacentHTML("beforeend",html)
                        }
        
                        })
            },500)
        }
       
    })
}