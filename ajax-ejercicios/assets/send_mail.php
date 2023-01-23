<?php
// Cuando tu mandas datos a traves de POST ->$_POST se crea
if (isset($_POST)) {
    // Etnemos que guardar en variables php todas las variables que vienen del formulario
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $commets = $_POST["comments"];
    // usamos _SERVER co http_host que obtiene el dominio donde desde donde se esta ejecutando esta pagina


    $domian = $_SERVER["HTTP_HOST"];
    $to = "juanpablotorresperezuni@gmail.com";
    // estamos sustituyendo el valor de subject pero antes una aprte de este nuevo subject es el anterior mas las cosas que hay xD
    $subject = "Contacto desde el formulario del sitio $domain : $subject";
    $message = "
    <p>
    </p>
    
    ";
    mail($to, $subject, $message, $jeaders);
}
