const d = document;

export default function scrollSpy(){
    const $sections = d.querySelectorAll("section[data-scroll-spy]")
    const cb=(entries)=>{
        // console.log("entries",entries)

        entries.forEach((entry)=>{
            // console.log("entry",entry)
            const id = entry.target.getAttribute("id")
            // console.log(id)
            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");

            }

        })
    }

    const observer = new IntersectionObserver(cb,{
        // Este segundo parametro es para posicionar hay 3 :
        // root evalua la posicion respecto al documento si lo omitimos
        // rootMargin: es necesario ponerle los pixeles esto hace que la ventana aumente o dismunya como una camara enfocando si solo ponemos solo 1 es para los 4 lados  negativo , es una ventana mas pequeña y en positivo una ventana mas grande
        // threshold significa limite, el valor es de 0 a 1 , si es cero en cuanto el objeto se visualice ue sea true si es 0,5 tiene que tener el 50 % de dicha div o seccion enlazada, es dinamico es mejor hacerlo por % con este tipo, si expresa como un arreglo de datos por ejemplo ente 0.5 al 0.8 entre limites
        threshold:[0.5,0.75]


    });
    // console.log("observer", observer)
    $sections.forEach(el=>observer.observe(el))


}