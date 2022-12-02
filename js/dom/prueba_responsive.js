const d = document;

export default function responsiveTester(form){
    const $form = d.getElementById(form)
    let tester;
// envede hacer la comaprancion e.target.matches otr aforma es decir vale e.target=== al parametro form pasado??
    d.addEventListener("submit", e =>{
        if(e.target ===$form){
            // No necesitamos que el formualrio se procese por lo tanto debemos detener la funcion por defecto, si el formulario en el HTML no tiene el action que nos dice ndonde lo envia el formulario se autoprocesa en la pagina, para evitarlo se hace con el e.preventDefault()
            e.preventDefault()
            // alert("formulario enviado")
            // queremos que una vez se preocese el formualrio queremos abrir una ventana , dicha ventana lo guardaremos en una variable ,por jemplo ne nuestra variablee tester qur estaba inicialmente vacia:
            tester =window.open($form.direccion.value,
                "pancho",
                `innerWidth =${$form.ancho.value}, innerHeight =${$form.alto.value}`)
        }
        // el window open se le tienen que dar 3 parametros de normal, el primero la direccion, el segundo un valor cualquiera em forma de string para qua aprezca aparte la ventana y no en una pestaña sino una ventana diferente si queremos en una neuva pestaña simplemente el 2 parametro no lo ponemos y por ultimo el tercer parametro un inner width y un inner height con comilla unicas y separados estos por una coma para darle anchura y altura se pueden asociar a algun valor de la pagina para que sea dinamico

    })
    d.addEventListener("click", e=>{
        if(e.target === $form.cerrar)tester.close()
    })
}