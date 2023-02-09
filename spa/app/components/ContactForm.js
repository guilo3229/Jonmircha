export function ContactForm(){

    const d = document,
    $form  = d.createElement("form"),
    $styles = d.getElementById("dynamic-styles")
    $form.classList.add("contact-form")

    $styles.innerHTML=`
    .contact-form {
        --form-ok-color: #4caf50;
        --form-error-color: #f44336;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
      }
      .contact-form > * {
        /* el menor que significa a los hijos y el asterisco significa a todoso */
        padding: 0.5rem;
        margin: 1rem auto;
        display: block;
        width: 100%;
      }
      .contact-form textarea {
        resize: none;
        /* el resice:none del text area sirve apra que no se pueda modificar el recuadro del text area */
      }
      
      .contact-form legend,
      .contact-form-response {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
      }
      .contact-form input,
      .contact-form-textarea {
        font-size: 1rem;
        font-family: sans-serif;
      }
      .contact-form input[type="submit"] {
        width: 50%;
        font-weight: bold;
        cursor: pointer;
      }
      .contact-form *::placeholder {
        /* esto quiere decir que a todos los elementos que tengan el atributo place holder por lo del asterisco con dobles puntos dobles */
        color: #000;
      }
      .contact-form [required]:valid {
        /* Un espacio hace que funcione sin el espacioe ntre el valid y los corchetes no va */
        /* esto quiere decir que en los hijos del contact form que tengan el atributo required y sea valido le pondra el border delc olor de abajo */
        border: thin solid var(--form-ok-color);
      }
      .contact-form [required]:invalid {
        border: thin solid var(--form-error-color);
      }
      .contact-form-error {
        margin-top: -1rem;
        font-size: 80%;
        background-color: var(--form-error-color);
        color: #fff;
        transition: all 800ms ease;
      }
      .contact-form-error.is-active {
        display: block;
        /* crearemos la animacion show-message en javscript que va durar 1 segundo se ejecutara 1 vez de forma normzal que no va a tener retardo que su efecto de animacion va a ser ease-out y both significa que va a conservar los estilos con los que la animacion termine(se puede revisar la documentacion la propiedad animation o en el curso de animacion web en el capitulo 11) */
        animation: show-message 1s 2 normal 0s ease-out both;
      }
      .contact-form-loader{
        text-align: center;
      }
      .none {
        /* le asignamos a la clase none el display none  es decir antes solo estaba con el nombre */
        display: none;
      }
      @keyframes show-message {
        /* le esta diciendo que empiceen 0% y termine en 100% nuestra funcion */
        0% {
          visibility: hidden;
          opacity: 0;
        }
      
        100% {
          visibility: visible;
          opacity: 1;
        }
      }
      
    
    
    `
    $form.innerHTML =`
        <legend>Envíanos tus comentarios</legend>
        <input type="text" name="name" placeholder="Escribe tu nombre" title="Nombre solo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>
        <input type="email" name="email" placeholder="Escribe tu email" title="Email incorrecto" pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>
        <input type="text" name="subject" placeholder="Asunto a tratar" title="El Asunto es requerido" required>
        <textarea name="comments"  cols="30" rows="5" placeholder="Escribe tus comentarios" title="Tu comentario no debe exceder los 255 caracteres" data-pattern="^.{1,255}$" required></textarea>
        <input type="submit" value="Enviar">



        
        <div class="contact-form-loader none" >
            <img src="../assets/circles.svg" alt="Cargando">

        </div>
        <div class="contact-form-response none" >
            <p>Los datos han sido enviados</p>
        </div>
    
    
    
    
    
    `
    function validationsForm(){

        const $form = d.querySelector(".contact-form"),
    
        $inputs = d.querySelectorAll(".contact-form [required]")
        // console.log($inputs)
    
        $inputs.forEach(input =>{
            const $span = d.createElement("span")
            $span.id =input.name;
            $span.textContent = input.title;
            $span.classList.add("contact-form-error", "none")
            // inserAdjacementElement tiene 4 posiciones como yo lo quiero como hermano posterior usaremos la posicion afterend
            input.insertAdjacentElement("afterend",$span)
    
        })
        d.addEventListener("keyup",(e)=>{
            // cuando hagas entre corchetes los atributos siempre un espacio respecto a la clase sino no funciona por ejemplo ".contact-form(espacio)[requiered]OJO!!"
            if(e.target.matches(".contact-form [required]")){
                let $input = e.target,
                // En cuanto a los que no son inputs como el text area habra que crear un data-pattern para poder adjuntarle una expresion regular y validarlo desde javscript no se puede desde HTML5
                // Aqui cuando estemos en el caso del text area y como este no tiene pattern tiene el atributo data-pattern para eso usaremos un operador de cprtocircuito que si nuno es undefined o false osea que notiene ese atributo elegira el que exista se ahce con un o(||) dataset para elegir data- y luego . y lo que vendria despues del guion
                pattern = $input.pattern ||$input.dataset.pattern;
                // console.log($input, pattern)
                if(pattern && $input.value !==""){
                    // El && $input.value !=="" sirve para que hasta que no sea dierente a vacaio el texto no aparezca el aviso
                    
                    let regex = new RegExp(pattern)
                    return !regex.exec($input.value)
                    // Se podria hacer quitando y poniendo none a cada uno pero como en el css tenemos una animacion para la clase is-active para que quede chulo usaremos esta
                    ? d.getElementById($input.name).classList.add("is-active")
                    :d.getElementById($input.name).classList.remove("is-active")
                }
                if(!pattern){
                    
                    return $input.value === ""
             
                    ?d.getElementById($input.name).classList.add("is-active")
                    :d.getElementById($input.name).classList.remove("is-active")
                }
            }
    
        })
        d.addEventListener("submit",(e) =>{
            e.preventDefault();
            alert("Enviando Formulario")
            const $loader = d.querySelector(".contact-form-loader"),
            $response = d.querySelector(".contact-form-response")
            $loader.classList.remove("none")
            fetch("https://formsubmit.co/ajax/juanpablotorresperezuni@gmail.com",{
              method:"POST",
              // e.target manda el formulario del html y estos elementos tienen que tener el atributo name si o tienen el name tienes que hacerle un append como en el ejercicio de uploader
              body: new FormData(e.target)
            })
            .then(res=>res.ok
            ?res.json():Promise.reject(res))
            .then(json =>{
              console.log(json)
              $loader.classList.add("none")
                $response.classList.remove("none")
                $response.innerHTML=`<p>${json.message}</p> `
                $form.reset()
            })
            .catch(err=>{
              console.log(err)
              $loader.classList.add("none")
              $response.classList.remove("none")
              let message =err.statusText||"ocurrio un error al enviar,intenta nuevamente";
              $response.innerHTML = `<p>Error ${err.status}: ${message}</p> `
              
            })
            .finally(()=>setTimeout(() => {
              $loader.classList.add("none")
              $response.innerHTML=""
              $form.reset()
            }, 3000))
       
    
        })
    }
    // da eerror por el mismo problema que hacia que hasta que no cargase interpretaba el scroll como toda la pantalla y cargaba 2 tandas de 11 en mi CacheStorage, para eso lo ssettimeout apra dar iempo a cargar la informacion y luego asi no te de error 
    setTimeout(() => {
        validationsForm()
        
    }, 100);

    return $form

}