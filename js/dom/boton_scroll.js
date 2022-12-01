const d = document,
w= window

export default function scrollTopButton(btn){
//  podemos hacerlo desde la etiqueta TML o desde el windows
    const $scrollBtn= d.querySelector(btn)
    w.addEventListener("scroll", e=>{
        let scrollTop = d.documentElement.scrollTop|| w.pageYOffset;

        // console.log(w.pageYOffset, d.documentElement.scrollTop)

        if(scrollTop>600){
         $scrollBtn.classList.remove("hidden")   
        }else{
            $scrollBtn.classList.add("hidden") 
        }
    })

    // Este segundo addEventListener es para cuando clickas vuelva arriba
    d.addEventListener("click",e=>{

        if(e.target.matches(btn)){
            w.scrollTo({
            // Scrollto: tiene 3 variables la 1 behavior que es el omportamiento en este caso pondremos smooth como cuando hacemos css, luego esta top que es la distancia a la parte superior que queremos que acabe el scroll y por ultimo si estamos en el caso del eje horizontal seria left:0
                behavior:"smooth",
                top:0
                // left:0
            })
        }
    })

}