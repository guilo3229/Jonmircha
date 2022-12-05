const d=document;

export default function draw(btn,selector){
    const getWinner = (selector) =>{
        // Aqui ponemos selector para entenderlo mas bien pero al ser el scope podemos poenr e o cualquier letra ya que se queda en el scope lo importante es el parametro que entra posteriormente cuando lo invocamos
        const $players = d.querySelectorAll(selector),
        // redondeamos hacia ahabjo porque el primer lugar(la primera posicion) es el 0
        random = Math.floor(Math.random()*$players.length),
        winner = $players[random]
        console.log($players,random,winner)
        return `El ganador es: ${winner.textContent} `

    }

    d.addEventListener("click",e=>{

        if(e.target.matches(btn)){
        let result= getWinner(selector)
    alert(result)
    console.log(result);



    }
    })
    // Imaginemonos que uieres hacer un resultado de una serie de comentarios , ya sea en un blog video de youtube etc
    const getWinnerComment = (selector) =>{

        const $players = document.querySelectorAll(selector),
     
        random = Math.floor(Math.random()*$players.length),
        winner = $players[random];
        return `El ganador es: ${winner.textContent} `;

    };
// aqui esta el de facebook
    // getWinnerComment(".x1n2onr6 span a span span")


}

