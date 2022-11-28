const d =document

export function digitalClock(clock,btnPlay,btnStop){
    let clockTempo;
d.addEventListener("click",e=>{
    if(e.target.matches(btnPlay)){
    clockTempo = setInterval(() => {
            let clockHour = new Date().toLocaleTimeString()
            d.querySelector(clock).innerHTML=`<h3>${clockHour}</h3>`
        }, 1000);
        e.target.disabled= true
    }
  
    if(e.target.matches(btnStop)){
        clearInterSval(clockTempo)
        d.querySelector(clock).innerHTML= null
        document.querySelector(btnPlay).disabled = false
    }
    
})
}

export function alarm(sound,btnPlay,btnStop){
let alarmTempo;
// no se lo voy a asociar a ninguna nodo del HTML pero nos interesa crear un createEklement tipo audio para acceder ala API del navegador y asi poder reproducir dicho audio
const $alarm= d.createElement("audio")
$alarm.src = sound
d.addEventListener("click",e=>{
   
    if(e.target.matches(btnPlay)){
        alarmTempo = setTimeout(() => {
            $alarm.play()
        }, 2000);
        
e.target.disabled=true
    }
    if(e.target.matches(btnStop)){
        clearTimeout(alarmTempo);
        $alarm.pause();
$alarm.currentTime =0;
document.querySelector(btnPlay).disabled = false
    }

})

}
