const d = document;

export default function contactFormValidations(){

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
        setTimeout(() => {
            $loader.classList.add("none")
            $response.classList.remove("none")
            $form.reset() 
            setTimeout(() =>$response.classList.add("none") , 3000);
        }, 3000);

    })
}