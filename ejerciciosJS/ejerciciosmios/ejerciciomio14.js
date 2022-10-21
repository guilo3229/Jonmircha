// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const celsiusFarenhait = (numero=undefined,letra= "")=>{
    if(numero === undefined)return console.warn("No has introducido ningun valor a los grados")
    if(typeof numero !== "number")return console.error("el valor de los grados no es numerico")
    if (letra === "")return console.warn("no has introducido el tipo de escala de grados")
    if(typeof letra !== "string")return console.error("no has introducido un valor tipo cadena")
    if(letra.toLowerCase() !== "c" && letra.toLowerCase() !== "f") return console.warn("la escala de grados no es la correcta solo admite F->para farenhait o C-celsius ");
    
    // return console.log("sali de los errores")
    if (letra.toLowerCase() === "c"){
        // return console.log("pepe")
        let farenhait = Math.round(((numero*9/5)+32))

        return console.log(farenhait)

    }

    if (letra.toLowerCase() === "f"){
        let celsius =Math.round((numero-32)*5/9)
        
        return console.log(celsius)
    }
}

celsiusFarenhait("hola","f")