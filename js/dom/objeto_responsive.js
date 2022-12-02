const d = document,
w=window;

export default function responsiveMedia(id,mq,mobileContent,desktopContent){
    
    let breakpoint = w.matchMedia(mq)
    const responsive =(e)=>{
        if(e.matches){
            d.getElementById(id).innerHTML = desktopContent
        }else{
            d.getElementById(id).innerHTML = mobileContent
        }
        console.log("MQ",e.matches,breakpoint)
    }

// Antes se usaba el listner ,pero quedo qn desuso y ahora misimo se usa el addeventlisener con 2 parametros el 1  con change para decirle que va a entrar como mediaquery y luego la funcion, esd decir el parametro sera el breakpoint y luego se ejecutara la funcion que estudia si spera o no dicho media query
    breakpoint.addEventListener("change",responsive);
    responsive(breakpoint)
}