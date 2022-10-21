
// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const numeroPrimo = (numero = undefined)=>{

if(numero === undefined)return console.warn("No ingresaste un numero")
if(typeof numero !== "number")return console.error(`El valor ${numero} ingresado,No es un número`)
if(numero === 0) return console.error("El numero no puede ser 0")
if(numero === 1) return console.error("El numero no puede ser 1")
if(Math.sign(numero) === -1) return console.error("el numero no puede ser negativo")
let divisible = false

    for(let i = 2; i<numero;i++)
    if((numero%i)=== 0){
        divisible =true
        // Aqui respecto a mi bucle que lo realiza entero antes de salir usa break para parar el bucle en ese instante y ahorrar recursos
        break;
    }

    return (divisible)
        ?console.warn(`el numero ${numero} no es primo`)
        :console.info(`el numero ${numero} es primo `)
}

numeroPrimo()