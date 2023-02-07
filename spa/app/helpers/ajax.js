export async function ajax(props){

// pimero vamos a desestructurar un objeto
 let{url,cbSuccess}= props;
// TEnemos que poerle async-awaiyt tanto dentro de la funcion ajax como fuera en el roueter 1 para que internamente no responda antes de que llegue la informaciond el fetch y se complete y porlo tanto si mande informacion fuera al router y este siga con la propgramacion y pasaria directamente a quitar el loader y para que se espere en el scope del router
 await fetch(url)
 .then(res=> res.ok?res.json():Promise.reject(res))
 .then(json=> cbSuccess(json))
 .catch(err=>{
    let message = err.statusText || "Ocurrio un error al acceder a la API"

    document.getElementById("main").innerHTML = `<div class ="error">
    <p> Error ${err.status}:${message}</p>
    </div>
    `;
    document.querySelector(".loader").style.display = "none"
 })
}