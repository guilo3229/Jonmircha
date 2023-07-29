// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const primo = (numero=undefined)=>{
  if(numero === undefined)return console.warn("No has introducido ningun numero")
  if (typeof numero !== "number") return console.warn("El valor introducido no es un numero")
  if (numero === 0) return console.warn("El numero no puede ser 0")
  if(numero === 1) return console.error("El numero no puede ser 1")
  if (Math.sign(numero) === -1) return console.warn("El numero no puede ser negativo")
  let divisible = false

    for (let i = 2; i < numero; i++){
      if ((numero % i) === 0) {
      divisible = true
      break;
      }
    }
    return (divisible)
      ? console.warn(`El numero ${numero} no es primo`)
      : console.info(`El numero ${numero} es primo`)
  
            }     
primo(-5)