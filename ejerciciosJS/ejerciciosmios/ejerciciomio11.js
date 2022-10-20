// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (numero = undefined)=>{
if(numero===undefined )return console.warn("no has puesto ningun numero")
if (typeof (numero) !== "number")return console.warn("El valor no es un numero");
if (numero<=0)return console.warn("has ingresado el numero 0 o un numero negativo")
    let i = 1
    let contador = 1
    while (i<=numero){
        contador = contador * i
        i++
    }
    return console.log(`El valor factorizado de ${numero} es ${contador}`)
}

factorial(27)