// Crearemos una funcion anonima auto-ejecutable porque en este mismo archivo nos va a enseñar a trabjar con fetch y axios y para evitar sobreescritura mejor en una funcion anonima autoejecutable en cada ejercicio para clausurarlo en cada uno, sin necesidad de modulos de momento, de esta manera haremos todos los ejercicios en un unico archivo. las funciones autoejecutables era lo que se usaba antes, pero con la aparicion de modulos ha ido un poco en desuso

(()=>{
    //1º- Paso numero uno la instancia
    const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();
    // Usaremos fragmentos ya que es posible que la api tenga muchos elementos lo que sobrecargaria demasiado por ello con fragmentos primero mete todos los elementos y luego los carga al DOM todos juntos normalmente es mejor hace rlas cosas con estos metodos


    xhr.addEventListener("readystatechange", e=>{
        if(xhr.readyState !== 4) return
        // console.log(xhr)
        if(xhr.status>= 200 && xhr.status<300){
            // console.log("éxito")
            // console.log(xhr.responseText)
            // No se puede pegar directamente con el innerHTML hay que pasarlo a formato JSON
            let json = JSON.parse(xhr.responseText)
            // console.log(json)
            // Ahora si se puede pasar po innerHTML pero hay que acabar haciendolo con fragment porque si son muchos elementos no podemos ir pegando cada uno
            json.forEach(el =>{
                const $li =document.createElement("li")
                $li.innerHTML =`${el.name} -- ${el.email} -- ${el.phone} `
                $fragment.appendChild($li)
            })
            $xhr.appendChild($fragment)
        }else{
            // console.log("eror")
            let message = xhr.statusText || "Ocurrio un error"
            $xhr.innerHTML = `Error ${xhr.status}: ${message} `
        }

    })

    xhr.open("GET","https://jsonplaceholder.typicode.com/users")
    // Aqui mandamos el archivo local JSON desde un archivo nuestro
    // xhr.open("GET","assets/users.JSON")
    xhr.send();
})();
(()=>{
   
   const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

// recuerda que fetch trabaja con promesas, then para  opciones cuando la promesa se cumple y catch para la parte negativa cuando la promesa no se cumple, el finally es par afinalizarr y siempre va a estar se cumpla o no la promesa.
// Recuerda el metodo por defecto para fetch es GET!! es algo deiferente que la forma de encima
    fetch("https://jsonplaceholder.typicode.com/users")
    
     // Fetch tambien funciona localmente
             //  fetch("assets/users.JSON")
  

    .then(res=>{
               // La informacion viene en el body pero es una readableStream, esto hay que convertirlo con el metodo necesario en este caso es json(.json,.text y .block lo podemos verlo en mozilla developer network)
        // console.log(res)
       return res.ok
    //    Aqui le hacemos un operador ternario, esto es porque la promsesa se summple es decir se envia y vuelve pero sin datos pero la accion la hace, ara que no vulva y salga reject hay que meterse en la propiedad de la promesa y aplicar su reject cuando una propiedad que vuelva no nos guste y vaya directamente al catch que seria el error, este no se ejecutara si vuelve la promesa y esta no sea satisfactoria
       ? res.json()
       : Promise.reject(res);
    //    esto nos dice que manda el parametro despues del return al sigueinte mecanismo .then acunque ponga otro nombre es como que la asocia
    })
    .then(json =>{
        json.forEach(el =>{
            const $li =document.createElement("li")
            $li.innerHTML =`${el.name} -- ${el.email} -- ${el.phone} `
            $fragment.appendChild($li)
        })
        $fetch.appendChild($fragment)
        // Fetch tambien funciona localmente
       
        // console.log(json)
    })
    .catch(err=> {
        let message = err.statusText || "Ocurrio un error";
        $fetch.innerHTML = `Error ${err.status}: ${message} `
    }).finally(()=>{
    // console.log("esto se ejecutara independientemente de la promesa fetch")
})
    

})();

(() =>{
    const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();
async function getData(){
    try{
        
        let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();
        // console.log(res, json);
        // el throw es un return que envia el flujo de la programacion al catch, el error no puede mandar objetos solo texto
        // if(!res.ok)throw new Error("Ocurrio un Error al solicitar los DAtos")
        // Por ello podemos hacer un objeto que marque los errores:
        if(!res.ok)throw{status:res.status,statusTExt: res.statusText}
        json.forEach(el =>{
            const $li =document.createElement("li")
            $li.innerHTML =`${el.name} -- ${el.email} -- ${el.phone} `
            $fragment.appendChild($li)
        })
        $fetchAsync.appendChild($fragment)
    }catch (err){
        console.log("Estoy en el catch", err)
        // le mandamos el objeto al catch cuando es erroneo la solicitud y dicho objeto podemos usarlo luego para aplicar sus propeidades que nos interesa ene l DOM
        let message = err.statusText || "Ocurrio un error";
        $fetchAsync.innerHTML = `Error ${err.status}: ${message} `
    }finally{
        // console.log("esto se ejecutara independientemente del try-catch")
    }
    // fetch("https://jsonplaceholder.typicode.com/users")
    

}
    getData();
})();

(()=>{
    const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();


    axios.get("https://jsonplaceholder.typicode.com/users")
    // funciona tambien con archivos Json locales:    axios.get("assets/users.JSON")
    .then(res => {
       let json = res.data
        json.forEach(el =>{
            const $li =document.createElement("li")
            $li.innerHTML =`${el.name} -- ${el.email} -- ${el.phone} `
            $fragment.appendChild($li)
        })
        $axios.appendChild($fragment)
        // console.log(res)
    })
    .catch(err=>{
        // axios ya me crea una objeto personalizadon con el .response que te mete en su claae response y desde ahi es mas facil despues se simplifica un poco
        // console.log("Estamos en el Catch", err.response)
     
        let message = err.response.statusText || "Ocurrio un error";
        $axios.innerHTML = `Error ${err.response.status}: ${message} `
    })
    .finally(()=>{
        // console.log("Esto se ejecutara independientemente del resultado de Axios")
    });


})();

(()=>{
    const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();


    axios.get("https://jsonplaceholder.typicode.com/users");

    async function getData(){
        try{
            let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
            // no ahce falta convertir la repsuesta a json o texto ya que vuelve en objeto con una  propiedad que es la data con el array de lo que queremos
            json = await res.data
          console.log(res,json)
            json.forEach(el =>{
                const $li =document.createElement("li")
                $li.innerHTML =`${el.name} -- ${el.email} -- ${el.phone} `
                $fragment.appendChild($li)
            })
            $axiosAsync.appendChild($fragment)
            console.log(res,json)
        }catch(err){
            console.log(err.response)
            let message = err.response.statusText || "Ocurrio un error";
            $axiosAsync.innerHTML = `Error ${err.response.status}: ${message} `
        }finally{
            console.log("Esto se ejecutará independientemente del try... catch")
        }

    }
    getData()



})()