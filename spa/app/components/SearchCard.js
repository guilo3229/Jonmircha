export function SearchCard(props){
   
    let{id, title, _embedded} = props
    let slug = _embedded.self[0].slug
    // console.log(id,title,slug)
    let date = _embedded.self[0].date
    let dateFormat = new Date(date).toLocaleString()
// Recordemos que en este caso lo del slug es para que se cambie  y se ejecute de nuevo la app y por consigueinte router etc y lo de data id es que se guarda en el localStorage y tambien va a la url de la peticion fetch con dicho id, pasa lo mismo con PostCard
return `
<article class="post-card">

<h2>${title}</h2>
<p>
    <time datetime ="${date}">${dateFormat}</time>

    <a href="#/${slug}" data-id="${id}">Ver publicacion</a>
</p>

</article>
`


}