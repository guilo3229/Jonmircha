const d = document,
n = navigator;
export default function getGeolocation(id){
    const $id = d.getElementById(id),
    options={
        enableHighAccuracy: true,
        setTimeout: 5000,
        // MaximumAge es para que no tenga en cuenta las anteriores lecturas y se sature  de ifnormacion
        maximumAge:0,
    }

    const success = (position) =>{
        let coords = position.coords;
        console.log(position)
        $id.innerHTML =`<p>Tu posición actual es:</p>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Longitud: <b>${coords.longitude} </b></li>
            <li>Precisión: <b>${coords.accuracy} </b>metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener"> Ver en google Maps</a>
        `
    }
    const error =(err)=>{
        $id.innerHTML=`<p>
        <mark>Error ${err.code}: ${err.message}</mark>
        </p>`
        console.log(`Error ${err.code}: ${err.message}`)
        console.log(err) 
    }
    n.geolocation.getCurrentPosition(success,error,options)
}