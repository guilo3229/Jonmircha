// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const Capicua = (numero= 0)=>{
 if (!numero) return console.warn("El numero no esta definido o no has introducido el numero")
if(typeof numero!=="number") return console.warn(`El ${numero} no es un numero`)

numero = numero.toString()
let alreves = numero.split("").reverse().join("");
    
(alreves === numero)
        ?console.info(`el ${parseInt(numero)} es capicua`)
        :console.warn("el numero no es capicua")

        }
Capicua(101)