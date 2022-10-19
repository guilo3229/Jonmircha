// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.


const Palindromo =(cadena = "") =>{
    // (!cadena)
    //     ?console.warn("No ingresaste una cadena")

    //     :((cadena.split("").reverse().join())= cadena)
    //         ?console.info("true")
    //         :console.warn("false")

        if(!cadena)return console.warn("no ingresaste una cadena")
        cadena = cadena.toLocaleLowerCase()  
        let b = cadena.split("").reverse().join("")
       
       return (b === cadena)
       ?console.info("true")
       :console.warn("false")
        // return console.warn("false")
}
Palindromo("")
        