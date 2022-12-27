
const d = document,
w= window

export default function smartVideo(){

    const $videos = d.querySelectorAll("video[data-smart-video")

    const cb =(entries) =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
            entry.target.play()
            
            }else{
                entry.target.pause()
            }
            w.addEventListener("visibilitychange",(e)=>(d.visibilityState === "visible" & entry.isIntersecting)
            ?entry.target.play()
            :entry.target.pause()
            )
        })
    }
    const observer = new IntersectionObserver(cb,{treshold:0.5})
    $videos.forEach(el =>observer.observe(el))
}
