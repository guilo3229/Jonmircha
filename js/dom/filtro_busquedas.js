const d = document;


export default function searchFilters(input,selector){
    // voy a emepzar a buscar es decir a hacer el filtrado cuando suelte la tecla es decir con keyup
    d.addEventListener("keyup",(e)=>{
       
        if(e.target.matches(input)){
            
            // console.log(e.target.value)
            // Este if es para que cuando presionemos escape se elimine lo que esta dentro del input actualmente da igual ponerlo o no, lo pongo porque esta en el video de youtube pero ya tiene esta funcion por defecto atencion!
        if(e.key==="Escape")e.target.value ="";
            d.querySelectorAll(selector).forEach((el) =>
                el.textContent.toLowerCase().includes(e.target.value)
                ?el.classList.remove("filter")
                :el.classList.add("filter")
                
            );
        }
    })

    
}