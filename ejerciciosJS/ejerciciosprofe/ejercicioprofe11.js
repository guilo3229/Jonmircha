// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (numero = undefined)=>{
if(numero===undefined )return console.warn("no has puesto ningun numero")
if (typeof (numero) !== "number")return console.warn("El valor no es un numero");

if (numero===0)return console.warn("has ingresado el numero 0")
// Tambien se puede hacer con math.sign(numero)  sign si eel valor es negativo da -1 si el valor de sign es 0  dara 0 y si el valor dentro de sign es positivo dara +1
if(Math.sign(numero)===-1)return console.error("El numero no puede ser negativo")
   let factorial = 1
// El profesor hace que i es igual que el numero luego pone la condicion de que el bucle es hasta que i sea mayor que 1 siga dando vueltas porque al final multiplicar *1 da igual la ultima en ese caso ponerle i>1 daria igual porque cuando llegase a = 1 otra vuelta mas esa multiplicacion es por 1 pero solo en este caso con otras cosas podria cambiar y luego por ultimo tras el ultimo; i-- y luego multiplicamos factorial por i es decir hariamos como el factorial desde el final al principio envede ahcer 1*2,1*2*3 seria 3*2,3*2*1 asi que es otra forma de verlo quedaria la condicion asi:
// for(let i = numero;>1;i--)
   for(let i = 1;i<=numero;i++){
    factorial = factorial*i
   }
    return console.log(`El valor factorizado de ${numero} es ${factorial}`)
}

factorial(5)