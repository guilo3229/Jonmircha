
// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const BinDec = (numero= undefined, base= undefined)=>{

    if(numero === undefined) return console.warn("No has introducido ningun valor en el numero")
    if(typeof numero !== "number") return console.error("El valor introducido en el numero no es un number")
    if(Math.sign(numero) === -1 ) return console.error("El valor introducido es negativo y no puede serlo")
    if (base === undefined)return console.warn("No has introducido ningun valor en la base")
    if(typeof base !== "number")return console.error("El valor introducido en la base no es un number")
    if(base !== 2 && base!== 10)return console.warn("La base introducida de conversion no es valida")
    // if(base === 2 && !/(1|0)/.test(numero))return console.warn("Los valores  en base binaria son diferentes a 0 y 1 en algun lugar")--> Aqui faltaria que para pasar de binario a decimal solo puede haber 1 y 0 dentro del valor introducido
    if(base === 2){
        numero = numero.toString().split("").reverse()
        let contador = 0
        for(let i = 0; i < numero.length; i++) {
            console.log(contador)
            contador = contador +  Math.pow(2,i) * numero[i]
            console.log(i)
            console.log(contador)
        }

    }
    if(base === 10){
        
        let contador = []
        while(numero>0) {
           
            contador.push(numero%2)
      
            numero = Math.floor(numero /2)           
        }
        console.log(parseInt(contador.reverse().join("")))

    }
}
BinDec(1010111,2)
console.log()
// let pepe = 101011
// pepe = pepe.toString().split("").reverse()
// console.log(pepe)
