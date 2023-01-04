// Crearemos una funcion anonima auto-ejecutable porque en este mismo archivo nos va a enseñar a trabjar con fetch y axios y para evitar sobreescritura mejor en una funcion anonima autoejecutable enc ada ejercicio para clausurarlo en cada uno, sin necesidad de modulos de momento, de esta manera haremos todos los ejercicios en un unico archivo. las funciones autoejecutables era lo que se usaba antes, pero con la aparicion de modulos ha ido un poco en desuso

(()=>{
    //1º- Paso numero uno la instancia
    const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();
    // Usaremos fragmentos ya que es posible que la api tenga muchos elementos lo que sobrecargaria demasiado por ello con fragmentos primero mete todos los elementos y luego los carga al DOM todos juntos normalmente es mejor hace rlas cosas con estos metodos


    xhr.addEventListener("readystatechange", e=>{
        if(xhr.readyState !== 4) return
        console.log(xhr)
        if(xhr.status>= 200 && xhr.status<300){
            console.log("éxito")
            console.log(xhr.responseText)
            // No se puede pegar directamente con el innerHTML hay que pasarlo a formato JSON
            let json = JSON.parse(xhr.responseText)
            console.log(json)
            // Ahora si se puede pasar po innerHTML pero hay que acabar haciendolo con fragment porque si son muchos elementos no podemos ir pegando cada uno
            json.forEach(el =>{
                const $li =document.createElement("li")
                $li.innerHTML =`${el.name} -- ${el.email} -- ${el.phone} `
                $fragment.appendChild($li)
            })
            $xhr.appendChild($fragment)
        }else{
            console.log("eror")
            let message = xhr.statusText || "Ocurrio un error"
            $xhr.innerHTML = `Error ${xhr.status}: ${message} `
        }

    })

    xhr.open("GET","https://jsonplaceholder.typicode.com/users")
    // Aqui mandamos el archivo local JSON desde un archivo nuestro
    // xhr.open("GET","assets/users.JSON")
    xhr.send();
})();