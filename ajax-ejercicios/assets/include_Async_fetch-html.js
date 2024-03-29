document.addEventListener("DOMContentLoaded",()=> {
    
    const getHTML = async (el,url)=>{
        console.log(el,url)
        try{

            let res = await fetch(url,{
                method: "GET",
                headers:{
                    "content-type": "text/html ; charset = utf-8"
                }
            })
           
            el.outerHTML = await res.text()
            
            
            if(!res.ok) throw {status: res.status, statusText: res.statusText};

        }catch(err){
            let message = err.statusText || "Error al cargar el archivo, verifica que estes haciendo la ptición por http o https";
            el.outerHTML =`<div><p>Error ${err.status}: ${message}</p></div>` 

        }
    }


 
    document
    .querySelectorAll("[data-include]")
    .forEach(el => getHTML(el, el.getAttribute("data-include")));



})