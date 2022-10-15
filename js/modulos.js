

import saludar,{Saludar,PI,usuario} from "./constantes.js"
// cambiarle el nombre nuestras variables,funciones y modulos importados con as
import{aritmetica as calculos} from "./aritmetica.js"

console.log("modulos")

console.log(PI,usuario)

// console.log(aritmetica.sumar(3,4))
console.log(calculos.restar(3,4))

saludar()

let saludo = new Saludar()
saludo
// en react veremos mucho esta estructura, como default ira el modulo react y luego lo que viene entre corchetes para las frameworks es un ejeplo de ocomo se importa
// import React, {component}from