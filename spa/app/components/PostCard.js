export function PostCard(props){
    // Vamos a hacer una destructuracion de prop que este es cada elemento del for Each que viene de la funcion ajax en formato json
    let{date, id, slug,title,_embedded} = props
    let dateFormat = new Date(date).toLocaleString(),
    urlPoster = _embedded["wp:featuredmedia"]
    ?_embedded["wp:featuredmedia"][0].source_url
    :"app/assets/favicon.png";
    // hay que ahcer o sacar el slug en este caso parra poder hacer un SPA y que cambie la url y asi hacerlo chachi cuidado  ahce 2 años los motores de busqueda podian liartela
    
    // Como aun no se han creado los elementos y se iran renderizados no podemos ponerle el evento directamente a estos sino que deberemos hacerlo por delegacion de eventos desde el document para que estos eventos sean asociados a los elementos dinamicos
    document.addEventListener("click",e=>{
        if(!e.target.matches(".post-card a"))return false;
        localStorage.setItem("wpPostid", e.target.dataset.id)
        
        
    })
    
    return `
    <article class="post-card">
    <img src="${urlPoster}" alt="${title.rendered} ">
    <h2>${title.rendered}</h2>
    <p>
        <time datetime ="${date}">${dateFormat} </time>
    
        <a href="#/${slug}" data-id="${id}">Ver publicacion</a>
    </p>

    </article>
    `
}