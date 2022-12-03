 const d =document,
n=navigator;


export default function webCam(id){

const $video = d.getElementById(id)
// console.log(n.mediaDevices.getUserMedia)
if(n.mediaDevices.getUserMedia){
    // con esto podemos interactuar, esta funcion es una promesa,podemos ejecutar metodo then era para que hacer si tenemos exito y el catch si hay algun error
    n.mediaDevices
    .getUserMedia({video:true, audio:true})
    .then((stream)=>{
        console.log("zorra")
        console.log(stream)
        $video.srcObject = stream ;
        $video.play();
    })
    .catch((err) => {
        $video.insertAdjacentHTML("beforebegin",`<p>sucedio el siguiente error:
        <mark>${err} </mark></p>`);
         console.log(`sucedio el siguiente error: ${err}`);
    
        })
}

}