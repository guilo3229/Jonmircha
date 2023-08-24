

// console.log("inicio")
// setTimeout(() => {
//   console.log("Ejecutando un SetTimeOut esto se ejecuta una sola vez")
// }, 3000)

// setInterval(() => {
//   console.log("Ejecutando un setInterval, estio se ejecuta indefinidamente cada certo intervalo")
// }, 1000)



// let temporizador = setTimeout(() => {

//   console.log(new Date().toLocaleTimeString())
// }, 1000);

// clearTimeout(temporizador)
// console.log("despues del clearTimeOut")

// let temporizador = setInterval(() => {

//   console.log(new Date().toLocaleTimeString())
// }, 1000);

// clearInterval(temporizador)
// console.log("despues del clearTimeOut")

// function cuadradoCallback(value, callback) {
//   setTimeout(() => {
//     callback(value,value*value)
//   }, 0| Math.random()*100);
// }

// cuadradoCallback(0, (value, result) => {
//   console.log("Inicia callback")
//   console.log(`callbacks: ${value},${result}`)
//   cuadradoCallback(1, (value, result) => {
   
//     console.log(`callbacks: ${value},${result}`)
//   })
//    cuadradoCallback(2, (value, result) => {
   
//      console.log(`callbacks: ${value},${result}`)
//      cuadradoCallback(3, (value, result) => {

//        console.log(`callbacks: ${value},${result}`)
//        cuadradoCallback(4, (value, result) => {

//          console.log(`callbacks: ${value},${result}`)
//          cuadradoCallback(5, (value, result) => {

//            console.log(`callbacks: ${value},${result}`)
//          })
//        })
//      })
//   })
// })

// function cuadradoPromise(value) {
//   if (typeof value !== "number") {
    
//     return Promise.reject(`Error,el valor " ${value}" ingresado no es un numero`)
//   }
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve({
//         value,
//         result: value*value
//       })
//     }, 0|Math.random()* 1000);
    
//   })
// }

// cuadradoPromise(0)
//   .then(obj => {
//     console.log("Inicio Promise")
//     console.log(`Promise: ${obj.value}, ${obj.result}`)
//     return cuadradoPromise(1)
//   })
//   .then(obj => {
//     console.log(`Promise: ${obj.value}, ${obj.result}`)
//     return cuadradoPromise(2)
//   })
//   .then(obj => {
//     console.log(`Promise: ${obj.value}, ${obj.result}`)
//     return cuadradoPromise(3)
//   })
//   .then(obj => {
//     console.log(`Promise: ${obj.value}, ${obj.result}`)
//     return cuadradoPromise(4)
//   })
//   .then(obj => {
//     console.log(`Promise: ${obj.value}, ${obj.result}`)
//     return cuadradoPromise(5)
//   })
//   .then(obj => {
//     console.log(`Promise: ${obj.value}, ${obj.result}`)
//     console.log("Fin promise")
//   })
  
//   .catch(err => console.error(err));
  
// function cuadradoPromise(value) {
//   if (typeof value !== "number") {

//     return Promise.reject(`Error,el valor " ${value}" ingresado no es un numero`)
//   }
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         value,
//         result: value * value
//       })
//     }, 0 | Math.random() * 1000);

//   })
// }

// async function funcionAsyncronaDeclarada() {
//   try {
//     console.log(`Inicio Async Function`)
//     let obj = await cuadradoPromise(0)
//     console.log(`Async Function: ${obj.value}, ${obj.result}`)

//     obj = await cuadradoPromise(1)
//     console.log(`Async Function: ${obj.value}, ${obj.result}`)

//     obj = await cuadradoPromise(2)
//     console.log(`Async Function: ${obj.value}, ${obj.result}`)

//     obj = await cuadradoPromise(3)
//     console.log(`Async Function: ${obj.value}, ${obj.result}`)

//     obj = await cuadradoPromise(4)
//     console.log(`Async Function: ${obj.value}, ${obj.result}`)

//     obj = await cuadradoPromise(5)
//     console.log(`Async Function: ${obj.value}, ${obj.result}`)
//     console.log(`Fin Async Function`)
//   } catch(err) {
//     console.error(err)
//   }


  
// }
// funcionAsyncronaDeclarada()

// const funcionAsincronaExpresada = async () => {
//   try {
//     console.log(`Inicio Async Function`)
//     let obj = await cuadradoPromise(6)
//     console.log(`Async Function: ${obj.value}, ${obj.result}`)

//     obj = await cuadradoPromise(7)
//     console.log(`Async Function: ${obj.value}, ${obj.result}`)

//     obj = await cuadradoPromise(8)
//     console.log(`Async Function: ${obj.value}, ${obj.result}`)

//     obj = await cuadradoPromise(9)
//     console.log(`Async Function: ${obj.value}, ${obj.result}`)

//     obj = await cuadradoPromise(10)
//     console.log(`Async Function: ${obj.value}, ${obj.result}`)

//     obj = await cuadradoPromise(11)
//     console.log(`Async Function: ${obj.value}, ${obj.result}`)
//     console.log(`Fin Async Function`)
//   } catch (err) {
//     console.error(err)
//   }
// }

// funcionAsincronaExpresada()

// let id = Symbol("id")
// let id2 = Symbol("id2")
// console.log(id === id2)
// console.log(id,id2)
// console.log(typeof (id), typeof (id2))
// Los symbols se utilzian para crear propiedades privadas generalmente de los objetos, aunque busques con un for of o un for in el obejto los symbolos no apareceran
// const NAME = Symbol("nombre")
// const SALUDAR = Symbol("saludar")
// const persona = {
//   [NAME]: "Jon",
//   edad:35
// }

// console.log(persona)
// persona.NAME ="Jonathan Mircha"
// console.log(persona)
// console.log(persona[NAME])
// persona[SALUDAR] = function () {
//   console.log(`Hola`)
// }
// console.log(persona)
// persona[SALUDAR]()
// for (let propiedad in persona) {
//   console.log(propiedad)
//   console.log(persona[propiedad])
// }

// console.log(Object.getOwnPropertySymbols(persona))
// const set = new Set([1, 2, 3, 3, 4, 5, true, false, false, {}, {}, "hola", "HOLA"])
// console.log(set)
// // si yo quiero saber el tamaño de una set usaremos set.size
// console.log(set.size)
// const set2 = new Set()
// set2.add(1)
// set2.add(2)
// set2.add(2)
// set2.add(3)
// set2.add(true)
// set2.add(false)
// set2.add(true)
// set2.add({})
// console.log(set2)
// console.log(set2.size)
// console.log("Recorriendo set")
// for (item of set) {
//   console.log(item)
// }
// console.log("Recorriendo set 2")
// set2.forEach(element => {
//   console.log(element)
// });
// let arr = Array.from(set)
// console.log(arr[0])
// console.log(arr)
// set.delete("HOLA")
// console.log(set)
// console.log(set.has(19))

// set2.clear()
// console.log(set2)

// const mapa = new Map();
// mapa.set("nombre", "Jon")
// mapa.set("apellido", "Mircha")
// mapa.set("edad", 35)
// mapa.set("nombre", "Jon")
// console.log(mapa)
// console.log(mapa.size)

// console.log(mapa.has("nombre"))
// console.log(mapa.get("nombre"))
// mapa.set("nombre", "Jonathan Mircha")
// console.log(mapa.get("nombre"))
// mapa.delete("apellido")


// mapa.set(19,"diecinueve")
// mapa.set(false,"falso")
// mapa.set({},{})
// console.log(mapa)
// // El map es un obejto iterable por lo tanto podemos usar un for of, un for Each
// for (let [key, value] of mapa) {
//   console.log(`Llave: ${key}, Valor: ${value}`)
// }

// const mapa2 = new Map([
//   ["nombre", "Kenai"],
//   ["edad", 7],
//   ["animal", "perro"],
//   [null,"nulo"]
// ])
// console.log(mapa2)
// for (let [key, value] of mapa2) {
//   console.log(`Llave: ${key}, Valor: ${value}`)
// }

// const llavesMapa2=[...mapa2.keys()]
// const valoresMapa2 = [...mapa2.values()]
// console.log(llavesMapa2)
// console.log(valoresMapa2)
// los weakSet solo aceptan referencias debiles es decir objetos
// const ws = new WeakSet()
// let valor1 = {"valor1": 1 };
// let valor2 = {"valor2": 2 };
// let valor3 = { "valor3": 3 };

// ws.add(valor1)
// ws.add(valor2)
// console.log(ws)

// console.log(ws.has(valor1))
// ws.delete(valor2)
// console.log(ws)
// ws.add(valor2)
// ws.add(valor3)

// // setInterval(() => {
// //   console.log(ws)
// // }, 1000);

// setTimeout(() => {
//   valor1 = null
//   valor2 = null
//   valor3 = null
// }, 5000);

// const wm = new WeakMap([
//   ["nombre","kEnai"],
//   ["edad", 7],
//   ["animal", "perro"],
//   [null,"nulo"]

// ])

// const wm = new WeakMap()
// let llave1 ={}
// let llave2 ={}
// let llave3 = {}
// wm.set(llave1,1)
// wm.set(llave2,2)
// wm.set(llave3,3)
// // console.log(wm)
// // console.log(wm.has(llave1))
// // console.log(wm.get(llave1))
// // console.log(wm.get(llave2))
// // console.log(wm.get(llave3))

// // wm.delete(llave2)
// // wm.set(llave2, 2)
// // console.log(wm)
// setInterval(() => {
//   console.log(wm)
// }, 1000);

// setTimeout(() => {
//   llave1 = null;
//   llave2 = null;
//   llave3 = null;
// }, 100);

// const iterable = [1,2,3,4];
// // Accedemos al iterador del iterable
// const iterador = iterable[Symbol.iterator]()

// console.log(iterable)
// console.log(iterador)
// // console.log(iterador.next())
// // console.log(iterador.next())
// // console.log(iterador.next())
// // console.log(iterador.next())
// // console.log(iterador.next())
// // console.log(iterador.next())
// let next = iterador.next()
// while (!next.done) {
//   console.log(next.value)
//   next = iterador.next()
// }

// function* iterable() {
//   yield "hola"
//   console.log("Hola consola")
//   yield "hola 2"
//   console.log("Seguimos con mas intrucciones de nuestro codigo")
//   yield "hola 3"
//   yield "hola 4"
// }

// let iterador = iterable()
// // console.log(iterador.next())
// // console.log(iterador.next())
// // console.log(iterador.next())
// // console.log(iterador.next())
// // console.log(iterador.next())
// for (let y of iterador) {
//   console.log(y)
// }
// console.log(iterador)
// // solo se puede usar el spread operator con la funcion iteradora de yield directamente
// const arr = [...iterable()]
// console.log(arr)

// function cuadrado(valor) {
//    setTimeout(() => {
//     return console.log({
//       valor,
//       resultado: valor * valor
//     })
//   }, Math.random() * 1000);
  

// }

// function* generador() {
//   console.log("Inicio Generator")
//   yield cuadrado(0)
//   yield cuadrado(1)
//   yield cuadrado(2)
//   yield cuadrado(3)
//   yield cuadrado(4)
//   yield cuadrado(5)
//   console.log("Termina generator")
// }

// let gen = generador();

// for (let y of gen) {
//   // console.log(y)
// }

// const persona = {
//   nombre: "",
//   apellido: "",
//   edad: 0
// }
// const manejador = {
//   set(obj, prop, valor) {
//     if (Object.keys(obj).indexOf(prop) === -1) {
//       return console.error(`La propiedad "${prop} no existe en el objeto persona`)
//     }
//     if (
//       (prop === "nombre" || prop === "apellido") && !(/^[A-Za-zÑñÁáÉéÚúÓóÍíUu\s]+$/g.test(valor))
//     )
//      {
//       return console.error(`La propiedad ${prop} solo acepta letras y espacios en blanco`)
//     }
//     obj[prop] = valor
//   }
// }
// const jon = new Proxy(persona, manejador)
// jon.nombre = "Jon"
// jon.apellido = "Mircha"
// jon.edad = 35
// jon.twitter = "@Jonmircha"
// console.log(jon)
// console.log(persona)
// let aleatorio = Math.round(Math.random() * 100 + 5)
// const objUsuarios = {
//   propiedad:"valor",
//   [`id:${aleatorio}`]: "valor aleatorio"
// }
// console.log(objUsuarios)
// const usuarios = ["Jon", "Irma", "Miguel", "Kala", "kEnai"]
// usuarios.forEach((usuario, index) => {
//   objUsuarios[`id:${index}`] = usuario
// })
// console.log(objUsuarios)
// console.log(this)
// console.log(window)
// console.log(this === window)
// this.nombre = "Contexto global"
// console.log(this.nombre)

// function imprimir() {
//   console.log(this.nombre)
// }
// imprimir()

// const obj = {
//   nombre: "contexto objeto",
//   imprimir: function () {
//     console.log(this.nombre)

//   }
// }
// obj.imprimir()

// const obj2 = {
//   nombre: "Contexto Objeto 2",
//   imprimir

// }

// obj2.imprimir()

// const obj3 = {
//   nombre: "contexto objeto3",
//   imprimir:  () => {
//     console.log(this.nombre)

//   }
// }

// obj3.imprimir()

// function Persona(nombre) {
//   // const that = this;
//   // casi.nombre = nombre
//   this.nombre = nombre
//   // return console.log(this.nombre)
//   // return function () {
//   //   console.log(this.nombre)
//   // }
//   return ()=> console.log(this.nombre)
//   // return function () {
//   //   console.log(that.nombre,33)
//   // }

// }

// let jon = new Persona("Jon")
// jon()
//  si yo necesito recuperar alguna referencia de algun Scope en particular y utilizarlo en algun codigo para eso usamos call,apply y bind

// console.log(this)
// this.lugar = "Contexto Global"

// function saludar(saludo,aQuien) {
//   console.log(`${saludo} ${aQuien} desde el ${this.lugar}`)
// }

// saludar("hola","Kenai")

// const obj = {
//   lugar:"Contexto Objeto"
// }
// saludar.call(obj,"Hola","Jon")
// saludar.call(null,"Hola","Jon")
// saludar.call(this,"Hola","Jon")
// saludar.apply(obj, ["Adios", "Mircha"])
// this.nombre ="window"
// const persona = {
//   nombre: "Jon",
//   saludar: function () {
//     console.log(`Hola ${this.nombre}`)
//   }
// }
// persona.saludar()

// const otraPersona = {
  
//   saludar: persona.saludar.bind(persona)
// }

// otraPersona.saludar()

const json = {
  cadena: "jon",
  numero: 35,
  booleano: true,
  arreglo: ["correr", "programar", "cocinar"],
  objeto: {
    twitter: "@Jonmircha",
    email:"jonmircha@gmail.com"
  },
  nulo:null
  
}

console.log(json)
console.log(JSON)
console.log(JSON.parse("{}"))
console.log(JSON.parse("[1,2,3]"))
// console.log(JSON.parse("hola"))
console.log(JSON.parse("null"))
// console.log(JSON.parse("undefined"))
console.log(JSON.stringify({}))
console.log(JSON.stringify([1, 2, 3]))
console.log(JSON.stringify(true))
console.log(JSON.stringify(null))
console.log(JSON.stringify(undefined))
console.log(JSON.stringify({x:2,y:3}))
console.log(JSON.stringify(json))
console.log(JSON.parse(`{"cadena": "Jon","numero": 35,"booleano": true,"arreglo":["correr","programar","cocinar"],"objeto":{"twitter":"@jonmircha","email": "jonmircha@gmail.com"},"nulo": null}`))
