// const convertirBinarioDecimal = (numero = undefined, base = undefined) => {

//   if (numero === undefined) return console.warn("No ingresaste el numero a convertir")

//   if (typeof numero !== "number") return console.error(`El valor"${numero}" ingresado,No es un número`)
//   if (base === undefined) return console.warn("No ingresaste el valor de la base ")

//   if (typeof base !== "number") return console.error(`El valor"${base}" ingresado,No es un número`)
//   // console.log(typeof(numero.toString(2)) === "number")

//   if (base === 2) {
//     return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`)
//   } else if (base === 10) {
//     return console.info(`${numero} base ${base} = ${parseInt(numero.toString(2))} base 2`)
//   }


// }

// convertirBinarioDecimal(10101, 2)

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe.miFuncion(1000, 20) devolverá 800.

// const ejercicioDieciseis = (cantidad = undefined, descuento = undefined) => {

//   if (cantidad === undefined) return console.error("No ha introducido ningun valor al segundo parametro")
//   if(descuento === undefined) return console.error("No ha introducido ningun valor al segundo parametro")
//   if (typeof cantidad !== "number") return console.error("El valor del primer parametro no es numerico")
//   if (typeof descuento !== "number") return console.error("El valor del segundo parametro no es numérico")
//   if (cantidad <= 0) return console.error(`El valor de la cantidad: ${cantidad} es negativa o igual a 0 por favor inserte un valor positivo`)
//   if (descuento < 0) return console.error(`El valor del descuento: ${descuento} es negativo y solo puede ser positivo o 0`)
//   if(descuento >100) return console.error(`El alor de decuento: ${decuento} no puede ser suèrior al 100%`)
//   console.log(`El precio que queda una vez  aplicado el descuento: ${descuento}  a la cantidad: ${cantidad} es de:
//   ${cantidad-cantidad*(descuento/100)} euros`)
// }

// ejercicioDieciseis(1000,20)

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe.miFuncion(new Date(1984, 4, 23)) devolverá 35 años(en 2020).

// const ejercicioDiecisiete = (a=undefined) => {
//   if (a === undefined) return console.error("No ha introducido ningun valor")
//   if(!(a instanceof Date))return console.error("No ha introducido un valor de fecha")

//   let hoyMenosFecha = new Date().getTime()-a.getTime()
//   let aniosEnMs = (1000*60*60*24*365)
//   let aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMs)
//   console.log(aniosHumanos)
//   console.log(Math.sign(aniosHumanos))
//   return(Math.sign(aniosHumanos) ===-1)
//     ?console.info(`Faltan ${Math.abs(aniosHumanos)} años , para el ${a.getFullYear()}`)
//       :(Math.sign(aniosHumanos) === 1)
//         ?console.info(`Han pasado ${Math.abs(aniosHumanos)} años, desde ${a.getFullYear()}}`)
//         :console.info(`Estamos en el año actual ${a.getFullYear()}`)

// }

// ejercicioDiecisiete(new Date(2010,2,20))

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe.miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.


// const ejercicioDieciocho = (a= undefined) => {

//   if (a === undefined) return console.error("No ha introducido ningun valor introduzca algun valor")
//   if(typeof a !== "string")return console.error("El valor introducido no es una cadena de texto")
//   let vocales = 0
//   let consonantes = 0
//   a = a.toLowerCase().split("")
//   console.log(a)
//   a.forEach(e => {
//     if (/[aáeéiíoóuúü]/.test(e)) vocales++
//     if (/[bcdfghjklmnñpqrstvwxyz]/.test(e)) consonantes++
//   });
//   console.log(`La cadena de texto tiene:
//   -vocales: ${vocales}
//   -consonantes: ${consonantes}`)
// }

// ejercicioDieciocho("la casa es buena")


// 19) Programa una función que valide que un texto sea un nombre válido, pe.miFuncion("Jonathan MirCha") devolverá verdadero.
// const ejercicioDiecinueve = (a = undefined) => {
//   if (a === undefined) return console.error("No ha introducido ningun valor")
//   if (typeof a !== "string") return console.error("El valor introducido no es una cadena de texto")
//   let ValidacionExpReg = /^[a-zA-ZáÁéÉíÍoÓúÚ\s]+$/g
//   ValidacionExpReg.test(a)
//     ? console.info(`El nombre introducido es: ${a} y es valido`)
//     : console.error(`El nombre introducido es: ${a} y es invalido`)
// }

// ejercicioDiecinueve("pedrito juanito")

// 20) Programa una función que valide que un texto sea un email válido, pe.miFuncion("jonmircha@gmail.com") devolverá verdadero.


// const veinte = (a = undefined) => {
//   if (a === undefined) return console.error("No ha introducido ningun valor")
//   if (typeof a !== "string") return console.error("El valor introducido no es una cadena de texto")
//   let ValidacionExpReg = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/i
//   ValidacionExpReg.test(a)
//     ? console.info(`El correo introducido es: ${a} y es valido`)
//     : console.error(`El correo introducido es: ${a} y es invalido`)
// }

// veinte("pedrito@gmail.com")

// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe.mi_funcion([1, 4, 5]) devolverá[1, 16, 25].

// const veintiuno = (a= undefined) => {

//   if (a === undefined) return console.error("No ha introducido ningun valor")
//   if (!(a instanceof Array)) return console.error("No ha intrpducido un Array")
//   if (a.lenght === 0) return console.error(`El array: ${a} no tiene ningun elemento dentro`)

//   let b = [],
//   c=a
//   for (let [index,value] of a.entries()) {
//     if (typeof value !== "number") {
//       console.log(`El valor:${value} en la posicion del array:${index+1} no es numerico`)
//       b.push(value)
//     }


//   }
//   if(b.length>0)return console.error(b)
//   a=a.map(w=>
//     w= w*w
//   );

//   console.log(`El resultado de elevar al cuadrado del array ${c} daria como resultado: ${a}`)
// }

// veintiuno([1,"2","3"])



// function verificarNumeros(array) {
  //   const errores = array.reduce((errores, value, index) => {
    //     if (typeof value !== 'number') {
      //       errores.push(`El valor ${value} en la posición ${index} no es numérico.`);
      //     }

      //     // console.log(index)
      //     return errores;
      //   }, []);
      //   console.log(errores)
      //   if (errores.length > 0) {
        //     errores.forEach((error) => console.error(error)); // Imprimimos todos los errores
//     return; // Salimos de la función si hay errores
//   }
//   console.log('Todos los valores son numéricos.');
// }

// verificarNumeros(["2","3",4])

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => {
  //   console.log(accumulator,currentValue)
//   return accumulator + currentValue
// });
// console.log(sum); // 15


// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe.miFuncion([1, 4, 5, 99, -60]) devolverá[99, -60].

// const EjercicioVeintidos = (a=undefined) => {

//   if(a === undefined)return console.error("No ha introducido ningun valor o el valor introducido es undefined")
//   if(!(a instanceof Array)) return console.error("El valor introducido no es de tipo array")
//   if (!(a.length > 0)) return console.error("El array no tiene valores en su interior")
//   const f= []
//   for (let [h,j] of a.entries()) {

//     if (typeof j !== "number") f.push(`En la posicion :${h + 1} el valor ${j} no es numerico`)
//   }
//   if (f.length > 0) {
//     for(let a of f)console.error(z)
//     // f.forEach((e) => console.error(e));
//     return
//   }
//   let b = a[0]
//    let c = a[0]
//   for (let i = 0; i < a.length; i++){

//     if (b > a[i]) b = a[i]
//     if (c < a[i]) c = a[i]
//   }
//  console.log([b,c])
// }

// EjercicioVeintidos([27,"sopa",4,4,6,"caca"])

// const array = [1, 2, 3, 4, 5];
// const iterator = array.entries();
// for (let i = 0; i < array.length; i++) {
//   const [, value] = iterator.next().value;
//   console.log(value);
// }
// console.log(array.entries())
// const array =[1,2,3,4,"[5]"]
// const max = Math.max(...array)
// console.log(typeof (max))

// const EjercicioVeintidos = (a = undefined) => {
//   if (a === undefined) return console.error("No ha introducido ningun valor o el valor introducido es undefined")
//   if (!(a instanceof Array)) return console.error(`El tipo de valor introducido es:${typeof (a)} y no es tipo array , introduzca un array`)
//   // let b = []
//   // a.forEach((e,j) => {
//   //   if(typeof e !== "number") b.push(`El valor ${e} en la posicion ${j+1} no es numerico`)
//   // })
//   const b = a.reduce((acumulador, value,index) => {
//     if (typeof value !== "number") acumulador.push(`El valor ${value} en la posicion ${index + 1} no es numerico`)
//     return acumulador
//   },[])
//   if (b.length > 0) {
//     b.forEach(e => console.error(e))
//     return
//   }
//   console.log(` El valor maximo del array es: ${Math.max(...a)}
//   El valor mínimo del array es: ${Math.min(...a)}`)

// }




// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe.miFuncion([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) devolverá { pares: [2, 4, 6, 8, 0], impares: [1, 3, 5, 7, 9] }.


// const EjercicioVeintitres = (a = undefined) => {
//   if (a === undefined) return console.error("No ha introducido ningun valor o el valor introducido es undefined")
//   if (!(a instanceof Array)) return console.error(`El tipo de valor introducido es. ${typeof (a)} y no es tipo array , introduzca un array`)
//   let b =[]
//   a.forEach((e, j) => {
//     if (typeof e !== "number") b.push(`El valor ${e} en la posicion ${j + 1} no es numérico`)
//     if(e <0) b.push(`El valor ${e} en la posicion ${j+1} es negativo solo aceptan valores positivos o iguales a 0`)
//   })
//   if (b.length > 0) {
//     b.forEach(e => console.error(e))
//     return
//   }
//   let c = [],
//     d = []
//   // a.forEach(e => {
//   //   let encontrado = false
//   //   c.forEach((par) => {
//   //     if (par === e) encontrado = true

//   //   })
//   //   if (encontrado) return
//   //   d.forEach(impar => {
//   //     if (impar === e) encontrado = true
//   //   })
//   //   if (encontrado) return
//   //   if (e % 2 === 0) c.push(e)
//   //   if(e%2 !== 0)d.push(e)
//   // })
//   for (let e of a) {
//     let encontrado = false
//     for (let par of c) {
//       if (par === e) {
//         encontrado = true
//         break
//       }
//     }
//     if (encontrado) continue
//     for (let impar of d)
//       if (impar === e) {
//         encontrado = true
//         break
//       }

//     if (encontrado) continue

//     if (e % 2 === 0) c.push(e)
//     if(e% 2 !==0) d.push(e)
//   }
//   let e = {
//     pares: c,
//     impares: d
//   }
//   console.log(e)
// }

// EjercicioVeintitres([2, 25, 3, 7, 25])

// const EjercicioVeintitresV2 = (a = undefined) => {
//   if(a === undefined)return console.error(`No ha introduci ningun valor o el valor introducido es undefined`)
//   if (!(a instanceof Array)) return console.error(`El tipo de valor introducido es: ${a.typeof()} y  solo admite valores tipo Array, por lo tanto introduzca arrays solamente`)
//   let errores=[]
//   a.forEach((e, j) => {
//     if (typeof e !== "number") return errores.push(`En la posicion : ${j+1} tiene un valor que no es numerico: ${e} corrija este valor`)
//     if(e<0)return errores.push(`En la posicion: ${j+1}  el valor: ${e} es negativo `)
//   })

//   if (errores.length > 0) {
//     errores.forEach(e => console.error(e))
//     return
//   }
//   let pares=[],
//     impares = [],
//     objeto =undefined
//   a.forEach(e => {

//     if (pares.includes(e)) return
//     if (impares.includes(e)) return
//     if (e % 2 === 0) {
//       pares.push(e)
//       return

//     }
//     if (e%2 !== 0) return impares.push(e)

//   })
//   objeto = {
//     pares,
//     impares
//   }
//   console.log(objeto)

// }

// EjercicioVeintitresV2([1,5,32,22])


// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe.miFuncion([7, 5, 7, 8, 6]) devolverá { asc: [5, 6, 7, 7, 8], desc: [8, 7, 7, 6, 5] }.


// const ejercicioVeintiCuatro = (a = undefined) => {

//   if (a === undefined) return console.error("El valor introducido es undefined o  es que no ha introducido ningun valor")
//   if (!(a instanceof Array)) return console.error(`El valor introducido es de tipo: ${typeof (a)} y no es de tipo array  inserte un array`)

//   errores = []
//   a.forEach((e, j) => {
//     if (typeof e !== "number") return errores.push(`En la posicion: ${j + 1} y el valor es :${e} y es de tipo:${typeof (e)} inserte valor numerico positivo`)
//     if (e < 0) return errores.push(`En la posicion: ${j + 1} el valor es negativo:${e} introduca un valor positivo o 0`)
//   })
//   if (errores.length > 0) {
//     errores.forEach(e => console.error(e))
//     return
//   }
//   let menormayor = a.slice(),
//     mayormenor= a.slice()
//   for (let i = 0; i < menormayor.length - 1; i++){
//     for (let j = i + 1; j < menormayor.length; j++){
//       if (menormayor[i] > menormayor[j]) {
//         const temporal = menormayor[i]
//         menormayor[i] = menormayor[j]
//         menormayor[j]= temporal

//       }

//     }
//   }
//   for (let i = 0; i < mayormenor.length - 1; i++) {
//     for (let j = i + 1; j < mayormenor.length; j++){

//       if (mayormenor[i] < mayormenor[j]) {
//         const temporal = mayormenor[i]
//         mayormenor[i] = mayormenor[j]
//         mayormenor[j] = temporal
//       }

//     }


//   }

//   let objeto = {
//     ascendente: menormayor,
//     descendente: mayormenor
//   }
//   console.log(objeto)
// }

// ejercicioVeintiCuatro([2, 3, "22", 3, 5, 27, 17])


// const ejercicioCuatroV2 = (a = undefined) => {
//   if (a === undefined) return console.error(`No ha introducido ningun valor o el valor introducido es undefined introduzca algun array`)
//   if (!(a instanceof Array)) return console.error(`El tipo de datos introducido no es Array y es de tipo:"${typeof (a)}" y deberia ser de tipo Array, introduzca un Array`)

//   let errores = []
//   a.forEach((e, j) => {
//       if(typeof e !== "number") return error.push(`En la posición: "${j+1}" el valor es: "${e}" y de tipo: "${typeof(e)}" `)
//       if(e<0)return error.push(`En la posición: ${j+1} el valor introducido es: ${e} y tiene que ser positivo o igual a 0 nunca egativo`)

//   })
//   if (errores.length > 0) {
//     errores.forEach(e =>console.error(e))
//     return
//   }
//   let ascendente = [],
//     descendente = []

//   ascendente = a.slice().sort((a,b)=> a-b)
//   descendente = a.slice().sort((a,b)=> b-a)
//   console.log({
//     ascendente,
//     descendente
// })

// }

// ejercicioCuatroV2([27, 3, 4, 5, 55, 22])


// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]



// const eliminarDuplicados = (arr = undefined) => {

//   if (arr === undefined) return console.warn("No has introducido ningun array")
//   if (!(arr instanceof Array)) return console.error(`El valor de "${arr}" no es un array`)
//   if (arr.length === 0) return console.error("El array introducido esta vacio")
//   if (arr.length === 1) return console.warn("El arreglo debe tener al menos 2 elementos")


//   return console.log({
//     original: arr,
//     sinDuplicados: arr.filter((value, index, self) => self.indexOf(value) === index)
//   })
// }

// eliminarDuplicados([5, 5, 3, 2, 1, 5, 3])

// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

// const ejercicioVeintiseis = (arr = undefined) => {

//   if(arr === undefined)return console.error(`O no ha introducido ningun valor o el valor introducido es undefined`)
//   if (!(arr instanceof Array)) return console.error(`El elemento introducido no es un array, es de tipo: "${typeof (arr)}" por favor introduzca un array `)
//   let errores = []
//   arr.forEach((e,j) => {
//     if (typeof e !== "number") return errores.push(`En la posicion: "${j + 1}" con un valor: " ${e}" es de tipo: ${typeof (e)} todos los valores tienen que ser number y superiores o iguales a 0`)
//     if(e<0)return errores.push(`En la posicion: "${j+1}" con un valor: "${e}" es menor que 0 por favor introduzca alores positivos`)
//   })
//   if (errores.length > 0) {
//     errores.forEach(e => console.error(e))
//     return
//   }
//   return console.info(

//     arr.reduce((total, num, index, arr) => {
//       total += num

//       console.log(total,num,index,arr)
//       if (index === arr.length - 1) {
//         return (`El promedio de ${arr.join(" + ")} es ${total / arr.length}`)
//       } else {
//         return total
//       }
//     })



//   )
// }

// ejercicioVeintiseis([23, 23, 42, 10, 25])


// const words = ['hello', 'world', 'how', ['are',"casa"], ['you']];
// const casae = words.reduce((accumulator, currentValue) => {
//   console.log(accumulator)
//  return accumulator + " " + currentValue
// },[]);
// console.log(casae)
 // 'hello world how are you'


//  Nuevo repaso rapido:

// const invertirCadena = (cadena = "") =>
//   (!cadena)
//     ? console.warn("No ingresaste una cadena")
//     :console.info(cadena.split(""))


//     invertirCadena("patatas")


// const invertirCadena = (cadena = "") => {
//   if(!cadena)return console.error("No ha introducido ninguna cadena")

//   const a = []
//   const b = []
//   for (let i = 0; i < cadena.length; i++){
//     a.push(cadena[i])
//   }
//   for (let i = a.length-1; i >= 0; i--){
//     console.log(i)
//     b.push(a[i])
//   }

//   return console.log(b)
// }
// invertirCadena("casa")


// const invertirCadena = (cadena = "") =>
//   (!cadena)
//     ? console.warn("No ingresaste una cadena")
//     : console.info(cadena.split("").reverse().join())
//   invertirCadena("patatas")

// Programa una funcion para contar el número de veces que se repite una palabra en un texto largo, pe. Mi funcion("Hola mundo adios mundo")

// function contarRepeticiones(texto, palabra) {
//   // Utilizamos una expresión regular para buscar todas las ocurrencias de la palabra
//   const regex = new RegExp(`\\b${palabra}\\b`, 'gi');
//   const coincidencias = texto.match(regex);

//   if (coincidencias) {
//     return console.log(coincidencias.length);
//   } else {
//     return consle.log(0);
//   }

// }

// Ejemplo de uso
// const texto = "hola mundo adios mundo";
// const palabra = "hola";
// contarRepeticiones(texto, palabra)

// const repetir = (cadena = "", texto = "") => {

//   if (!cadena) return console.warn("No ingresaste la cadena")
//   if(!texto)return console.error("No ingresaste el texto")

//   let i = 0
//   let contador = 0;

//   while (i !== -1) {
//     i = cadena.indexOf(texto, i);

//     if (i !== -1) {
//       i++
//       contador++
//       }
// }
//   return console.info(`La palabra ${texto} se repite ${contador} veces`)
// }

// repetir("En el auto de mi auto habia un auto super auto", "auto")


// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.


// const palindromo = (cadena = "") => {
//   if (!cadena) return console.warn("No ingresasteuna cadena")
//   cadena = cadena.toLocaleLowerCase()
//   let b = cadena.split("").reverse().join("")
//   return (b === cadena)
//     ? console.info("true")
//     : console.warn("false")
// }

// palindromo("23")

// const palindromo2 = (cadena = "") => {

//   if (!cadena) return console.warn("No ingresaste una cadena")

//   const interceptor = /(.)/g
//   const arrayAlReves = cadena.match(interceptor)
//   let AlRevesString = ""
//   console.log(arrayAlReves)
//   for (let i = arrayAlReves.length - 1; i >= 0; i--){
//     AlRevesString += arrayAlReves[i]


//   }
//   console.log(AlRevesString)
//   console.log(cadena)
//   if (cadena ===AlRevesString)return console.log("true")
//   return console.log("false")
// }

// palindromo2("121 121")

// const eliminarCaracteres = (cadena = "", patron = "") => {
//   (!cadena)
//     ? console.warn("La cadena esta vacia")
//     : (!patron)
//       ? console.warn("No hay nada para eliminar")
//       : console.info(cadena.replaceAll(RegExp(patron,"ig"),""))

// }
// eliminarCaracteres("caraculo culocara culocara","culo")

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

// const getRandomInt = (min = 501, max = 600) => {


//   min = math.ceil(min);
//   max = math.floor(max)
//   console.log(MAth.floor(Math.reandom()*(max-min+1)+min))
// }

// getRandomInt

// const Capicua = (numero = 0) => {
//   if (!numero) return console.warn("El numero introducido no esta definido o no has introducido el número")
//   if(typeof numero !== "number") return console.error(`El ${numero} no es numero`)

//   let NumeroLetra = numero.toString()
//   let arrayLetra = ""
//   for (let i = NumeroLetra.length - 1; i >= 0; i--){
//     arrayLetra += NumeroLetra[i]

//   }
//   arrayLetra= Number(arrayLetra)
//   console.log(arrayLetra);
//   (arrayLetra === numero)
//     ? console.log(`El numero: ${numero} es capicua`)
//     : console.warn(`El numero: ${numero} no es capicua`)

// }

// Capicua(22)

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

// const factorial = (numero = undefined) => {
//   if (numero === undefined) return console.warn("No ha introducido ningun número")
//   if (typeof (numero) !== "number") return console.warn("El valor no es numerico");
//   if (numero <= 0) return console.warn("has ingresado el numero 0 o un numero negativo")
//   let i = 1,
//     contador = 1
//   while (i <= numero) {
//     contador = contador * i
//     i++
//   }
//   return console.log(`El valor factorizado de ${numero} es ${contador}`)

// }

// factorial(-4)

// const factorial2 = (numero = undefined) => {
//   if (numero === undefined) return console.warn("no ha introducido ningun número")
//   if (typeof(numero) !== "number") return onslotchange.warn("El valor no es numerico")
//   if (Math.sign(numero)!== 1) return console.warn("Has ingresado nymero 0 o un numero negativo")
//   contador = 1
//   for (let i = 1; i <= numero; i++){
//     contador = contador * i
//   }
//   return console.log(`El valor factorizado de ${numero} es ${contador}`)
// }

// factorial2(25)

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

// const primo = (numero = undefined) => {
//   if (numero === undefined) return console.warn("No has introducido ningun número")
//   if (typeof numero !== "number") return console.warn("El valor introducido no es numérico")
//   if (numero === 0) return console.warn("El valor del numero es 0")
//   if (Math.sign(numero) === -1) return console.warn("El valor del numero es negativo")
//   if(numero ===1 )return console.warn("El valor no puede ser 1")
//   let i = 2
//   let primo = true

//   while (i < numero && primo === true) {

//     if ((numero % i) === 0) {
//       primo = false
//     }
//     i++
//   }

//   if (primo === true) return console.info(`El número: ${numero} es primo`)
//   return console.info(`El número: ${numero} no es primo`)


// }
// primo(17)


// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

// const parImpar = (numero = undefined) => {
//   (numero === undefined)
//     ?console.error("No has introducido ningun valor")
//     : (typeof numero !== "number")
//       ? console.warn("El valor no puede ser 0")
//       : (numero === 0)
//         ? console.warn("El valor no puede ser 0")
//         : (Math.sign(numero) !== 1)
//           ? console.error(`El valor ${numero} es negativo`)
//           : (numero % 2 !== 0)
//             ? console.info(`El ${numero} es impar`)
//             :console.log(`El ${numero} es par`)


// }

// parImpar(27)

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

// const convertirGrados = (grados = undefined, unidad = undefined) => {
//   if (grados === undefined) return console.warn("No ingresaste grados a convertir")
//   if(typeof grados !== "number") return console.error(`El valor "${grados}" ingresado, no es numérico`)
//   if (unidad === undefined) return console.warn("No ingresaste el tipo de grado a convertir")
//   if (typeof unidad !== "string") return console.error(`El valor valor ${unidad} ingresado, no es una cadena de texto`)
//   if(unidad.length !== 1|| !/(C|F)/.test(unidad))return console.warn("El valor de unidad no es reconocido")
//   if (unidad === "C") {
//     return console.info(`${grados}ºC = ${math.round((grados*(9/5)+32))}`)
//   }
//   if (unidad === "F") {
//     return console.info(`${grados}ºF = ${Math.round((grados-32)*5/9)} ºC`)
//   }
//   return console.error("El tipo de grados a convertir no es valido")
// }

// convertirGrados(212,"F")

// ejercicio 15 convertir de base 10 a base 2 y viceversa

// const convertirBinarioDecimal = (numero = undefined, base = undefined) => {

//   if (numero === undefined) return console.warn("No ingresaste el numero a convertir")
//   if (typeof numero !== "number") return console.error(`El valor ${numero} no es numérico`)
//   if (base === undefined) return console.warn("no ingresaste el valor de la base")
//   if (typeof base !== "number") return console.error(`El valor ${base} ingresado no es numerico`)
//   if (base !== 2 && base !== 10) return console.warn(`La base: ${base}
//   introducida no esta en las opciones de conversión`)

//   if (base === 2) {
//     return console.info(`${numero} base ${base} = ${parseInt(numero,base)} base 10`)
//   }
//   if(base === 10)return console.info(`${numero} base ${base} = ${parseInt(numero.toString(2))}`)

// }

// convertirBinarioDecimal(1300,10)

// const convertirBinarioDecimal2 = (numero = undefined, base = undefined) => {
//   if (numero === undefined) return console.warn("No ingresaste el número a convertir")
//   if (typeof numero !== "number") return console.error(`El valor numero: ${numero} no es numérico`)
//   if (base === undefined) return console.warn("no ingresaste el valor de la base")
//   if (typeof base !== "number") return console.error(`El valo de la base: ${base} no es numérico `)
//   if (base !== 2 && base !== 10) return console.warn(`La base:${base} introducida no esta en las opciones de conversion`)
//   if (base === 2) {
//     let transformacion = numero.toString(),
//     sumatorios
//     for (let i = transformacion.length-1; i >= 0;i--){
//       if (i === 1) {
//         sumatorio += Math.pow(2,i)
//       }

//     }
//   }
//   if (base === 10) {
//     if(numero === 0) return console.log(`${numero} base ${base} = 0 base 10`)
//     let binario = "",

//     copiaNumero = numero

//     while (copiaNumero > 0) {
//       binario = (copiaNumero % 2) + binario
//      console.log(copiaNumero)
//       copiaNumero = Math.floor(copiaNumero / 2)
//       console.log(copiaNumero)
//     }
//     return console.log(`${numero} base ${base} = ${binario} base 10`)
//   }

// }

// convertirBinarioDecimal2(1300, 10)

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

// const descuento = (monto = undefined, descuento = undefined) => {
//   if (monto === undefined) return console.warn(`No ha introducido ningun molto o este es undefined`)
//   if(descuento === undefined) return console.warn(`No ha introducido ningun desceunto o este es undefined`)
//   if (typeof monto !== "number") return console.error("EL tipo de valor introducido en monto no es numérico")
//   if (typeof descuento !== "number") return console.error("El tipo de valor introducido en descuento no es numérico")
//   if (Math.sign(monto) !== 1) return console.warn(`El valor del molto es o negativo o igual a 0, introduzca un valor superior a 0 `)
//   if (descuento>=100 || descuento<=0) return console.warn(`El valor del descuento: ${descuento} no puede ser un valor diferente al rango entre  mayor que 0 y menor que 100`)

//   let valorFinal = monto - (monto*Math.floor(descuento)/100)
//   console.log(`El producto con un precio de: ${monto} y un descuento de ${descuento} nos dara un valor a pagar de = ${valorFinal}`)
// }
// descuento(1500,20)

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

// const calcularAnios = (fecha = undefined) => {
//   if (fecha === undefined) return console.warn("No ingresaste la fecha")
//   if(!(fecha instanceof Date))return console.error("El valor introducido no es de una fecha valida")

//   // Primero tendremos que hacer la resta de las 2 fechas es decir restar una fecha a la otra, usaremos new Date().getTime() que nos dara la fecha actual en milisegundos y le restaremos la fecha introducida en milisegundos
//   let hoyMenosFecha = new Date().getTime() - fecha.getTime()
//   let aniosEnMS = (1000 * 60 * 60 * 24 * 365)
//   // Ahora restaremos la fecha dada desde fuera de la funcion, la fecha actual y lo valoraremos si es positiva o negativa para decir cuantos años han pasado o cuantos años faltan usando por ejemplo Math.sign, ademas usaremos el math floor para redondear al año anterior y no contar el actual
//   let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS)

//   return (Math.sign(aniosHumanos) === -1)
//     ? console.log(`Faltan ${Math.abs(aniosHumanos)} años para llegar a la fecha de ${fecha.getFullYear()}`)
//     : (Math.sign(aniosHumanos) === 1)
//       ? console.log(`han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()} y estamos en el año ${new Date().getFullYear()}`)
//       :console.info(`Estamos en el año actual ${fecha.getFullYear()} o ${new Date().getFullYear()}`)







// }

// calcularAnios(new Date(2023,4,23))

// ajercicio 18 programa una funcion que cuente el numero de vocales y consonantes que tiene una cadena introducida

// const contarLetras = (cadena = "")=> {
//   if (cadena === "") return console.warn("No ha introducido ningun calor en la cadena")
//   if (typeof cadena !== "string") return console.error(`La variable introducida es de tipo: ${typeof (cadena)} y deberia ser de tipo String`)
//   let vocales = 0,
//     consonantes = 0
//   cadena = cadena.toLocaleLowerCase()
//   for (let letra of cadena) {
//     if (/[aeiouáéíóúü]/.test(letra)) vocales++

//     if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++
//   }
//   return console.info({
//     cadena,
//     vocales,
//     consonantes
//   })
// }

// contarLetras("el otro dia comi pescado")

// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

// const validarNombre = (nombre = "") => {
//   if (!nombre) return console.warn("No ingresaste un nombre")
//   if (typeof nombre !== "string") return console.error(`El valor introducido es de tipo: ${typeof (nombre)} y deberia ser tipo string`)
//   let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g

//   return (expReg.test(nombre))
//     ?console.info(`"${nombre}", es un nombre válido`)
//     : console.warn(`${nombre}, No e sun nombre válido`)

// }

// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]
// const ArrayCuadrados = (arr = undefined) => {
//   if (arr === undefined) return console.warn("No ha introducido ningun valor")
//   if (!(arr instanceof Array)) return console.error(`Ha introducido un valor de tipo: ${typeof (arr)} y el valor debe ser de tipo array corrígelo!`)
//   if (arr.length === 0) return console.error("El array esta vacio")
//   for (let num of arr) {
//     if(typeof num !== "number") return console.error(`En la posicion ${arr.indexOf(num)+1} el valor es de tipo: ${typeof(num)} y deberia ser de tipo numérico`)
//   }
//   arr = arr.map(el => el*el);
//   return console.log(`${arr}`)
// }

// ArrayCuadrados([2,3,4])

// Ejercicio 22 detecta el maximo y el minimo de un array numerico

// const maximoMinimo = (arr = undefined) => {
//   if(arr=== undefined)return console.warn("No ha introducido ningun valor o este valor es undefined")
//   if (!(arr instanceof Array)) return console.warn(`El valor introducido es de tipo:${typeof (arr)} y debe ser de tipo Array`)

//   for (let [index, element] of arr.entries()) {
//     if(typeof element !== "number")return console.warn(`En el array en la posicion ${index+1} el elemento es de tipo ${typeof(element)} y solo puede ser de tipo number`)
//   }
//   let maximo = arr[0]
//   let minimo = arr[0]

//   arr.forEach((element,index,array) => {
//     if (element > maximo) {
//       maximo = element
//     }
//     if (element < minimo) {
//       mminimo = element
//     }
//   });
//   console.log({
//     array: arr,
//     maximo,
//     minimo
//   })
// }

// maximoMinimo([1,4,3])

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

// const ParesImpares = (arr = undefined) => {
//   if (arr === undefined) return console.warn("No ha introducido ningun calor o el valor introducido es undefined")
//   if (!(arr instanceof Array)) return console.error(`El valor introducido es de tipo: ${typeof (arr)} y debe ser de tipo Array`)
//   for (let [index, position] of arr.entries()) {
//     if(typeof position !== "number")return console.error(`En la posicion ${index} el tipo de valor es: ${typeof(postion)} y deberia ser de tipo numérico corrigelo!!`)
//   }
//   let pares = [],
//     impares = []
//   for (num of arr) {
//     if (num % 2 === 0) pares.push(num)
//     if(num % 2 !==0) impares.push(num)
//   }
//   console.log({
//     pares,
//     impares
//   })
// }

// ParesImpares([3,4,27,2,6,3,22])

// const ArrayParesImpares2 = (arr = undefined) => {
//   if (arr === undefined) return console.warn("no ingrasaste un arreglo de numeros o es undefined")
//   if (!(arr instanceof Array)) return console.error(`El valor introducido es de tipo: ${typeof (arr)} y deberia ser de tipo Array`)
//   if (arr.length === 0) return console.error(`El array esta vacio`)
//   for (let [index, value] of arr.entries()) {
//     if (typeof value !== "number") return console.error(`EL valor en la posicion: ${index} es de tipo: ${typeof (value)} y debe ser de tipop numérico`)
//   }
//   return console.log({
//     pares: arr.filter(el => el % 2 === 0),
//     impares: arr.filter(el => el%2 === 1)
//   })

// }
// ArrayParesImpares2([3, 4, 27, 2, 6, 3, 22])


// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5]

// const ascendenDescendente1 = (arr = undefined) => {
//   if(arr === undefined) return console.warn("No ha introducido ningun valor o el valor introducido es undefined")
//   if (!(arr instanceof Array)) return console.warn(`El valor introducido es de tipo: ${typeof (arr)} y deberia ser de tipo Array`)
//   if (arr.length === 0) return console.warn("El Array introducido esta vacio")
//   for (let [index, valors] of arr.entries()) {
//     if(typeof valors !== "number" ) return console.error(`En la posicion: ${index+1} el valor es de tipo: ${typeof(valors)} y deberia ser de tipo number`)
//   }
//   let ascendente = arr.slice(),
//     descendente = arr.slice()

//   for (let i = 0; i < ascendente.length-1; i++){
//     for (let j = i + 1; j < ascendente.length; j++){
//       if (ascendente[i] > ascendente[j]) {
//         const temp = ascendente[i]
//         ascendente[i] = ascendente[j]
//         ascendente[j] = temp
//       }
//     }
//   }
//   for (let i = 0; i < descendente.length - 1; i++){
//     for (let j = i + 1; j < descendente.length; j++){
//       if (descendente[i] < descendente[j]) {
//         const temp = descendente[i]
//         descendente[i] = descendente[j]
//         descendente[j] = temp
//       }
//     }
//   }

//   console.log({
//     arr,
//     ascendente,
//     descendente
//   })
// }

// ascendenDescendente1([4,2,3,6,7,9])

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]

// const eliminarDuplicados = (arr = undefined) => {
//   if (arr === undefined) return console.warn("El valor introducido es undefined o no se ha introducido ningun array")
//   if (!(arr instanceof Array)) return console.error(`El valor introducido es de tipo: ${typeof (arr)} y deberia ser de tipo Array`)
//   if (arr.length === 0) return console.warn("El array no puede estar vacio")
//   if (arr.length === 1) return console.warn("El Array debe tener al menos 2 elementos")
//   return console.log({
//     Original: arr,
//     sinDuplicados: arr.filter((value,index,self)=> self.indexOf(value)=== index)
//   })
// }

// eliminarDuplicados([5, 5, 3, 2, 1, 5, 3])
// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
// const promedio2 = (arr = undefined) => {
//   if (arr === undefined) return console.warn(`No ha introducido ningun array de numeroso el valor es undefined`)
//   if (!(arr instanceof Array)) return console.warn(`El valor introducido es de tipo: ${typeof (arr)} y solo esta permitido que sea una rray de numeros`)
//   if(arr.length === 0)return console.warn("El array esta vacio")
//   for (let[index, number] of arr.entries()) {
//     if(typeof number !== "number") return console.error(`El valor en la posicion ${index+1} es de tipo ${typeof(number)} y solo admite de tipo numérico`)
//   }
//   let sumatorio = 0
//   for (let numero of arr) {
//     sumatorio += arr[numero]
//   }
//   let resultado = sumatorio / arr.length
//   console.log(resultado)
// }

// const promedio = arr => {
//   if (arr.length === 0) {
//     return 0;
//   }

//   const suma = arr.reduce((acumulador, valorActual) => acumulador + valorActual );

//   return suma / arr.length;
// }

// // Ejemplo de uso
// const numeros = [9, 10,24, 2, 5, 4, 3, 2, 1, 0];
// const resultado = promedio(numeros);
// console.log(resultado);

// promedio2(numeros)

// const promedio3 = (arr = undefined) => {
//   if (arr.undefined) return console.warn("No ha introducido ningún valor")
//   if (!(arr instanceof Array)) return console.error(`El valor introducodp es de tipo: ${typeof (arr)} y debería ser un Array`)
//   if (arr.length === 0) return console.warn(`La longitud del Array es de 0 ingree al menos 2 números`)
//   if (arr.length === 1) return console.warn("La longitud del Array es de 1 ingrese un numero mas")
//   let saliente = false
//   arr.forEach((element,index) => {
//     if (typeof element !== "number") {
//       console.error(`EL valor del array que esta en la posicion: ${index + 1} es de tipo: ${typeof (element)}`)
//       saliente = true
//     }
//   });
//   if (saliente === true) return;
  
//   return console.info(
//       arr.reduce((total, num, index, arr) => {
    
//       total += num
//       if (index === arr.length-1) {
//       return (`El promedio ${arr.join(" + ")} es ${total/arr.length}`)
      
//       } else {
//       return total
//       }
//     })
//   )
//   // Lo sacamos directamente el console.info de la ultima iteracion o estudio del reduce con console.info ya que no podemos sacar el valor fuera de est, podriamos haber definido un valoir y haberlo igualado al acumulador y entonces creo que si se podria
// }


// promedio3(numeros)

// POO programacion orientada a objetos (4 puntos importantes)

// Clases - Modelo a seguir
// Objetos - Es una instacia de una clase
//  atributos- es una caracteristica o propiedad del objecto (son variablues dentro de un objeto)
//  metodos - son las acciones que un objeto puede realizar(son normalmente verbos) no son mas que funciones dentro de un objeto
// Los prototipos en javascripts es un mecanismo por el cual un objeto puede heredar atributos y metodos de un objeto padre

// const animal = {
//   nombre: "Snoopy",
//   sonar() {
//     console.log("Hago sonidos porque estoy vivo")
//   }
// }


// const animal2 = {
//   nombre: "Lola Bunny",
//   sonar() {
//     console.log("Hago sonidos porque estoy vivo")
//   }
// }
// console.log(animal)
// console.log(animal2)

// Crearemos una funcion constructora para ello, de hecho una funcion en si crea un prototipo vacio
// Funcion constructora
// function Animal(nombre, genero) {
//   // Atributos
//   this.nombre = nombre;
//   this.genero = genero;
// // metodos
//   this.sonar = function(){
//     console.log("Hago sonidos porque estoy vivo")
//   }
//   this.saludar = function () {
//     console.log(`Hola me llamo ${this.nombre}`)
//   }
  
// }
// Funcion contructora donde asignamos los métodos al Prototipo, no a la funcion como tal
// function Animal(nombre, genero) {
//   // Atributos
//   this.nombre = nombre;
//   this.genero = genero;
  
  
// }
// //Metodos(Como asignamos los prototipos)
// // Metodos agregados al prototipo de la funcion constructora
// Animal.prototype.sonar = function () {
//   console.log("Hago sonidos porque estoy vivo")
// }
// Animal.prototype.saludar = function () {
//   console.log(`Hola me llamo ${this.nombre}`)
// }

// // Herencia Prototípica
// function Perro(nombre,genero,tamanio) {
//   this.super = Animal;
//   this.super(nombre, genero);
//   this.tamanio = tamanio;
// }
// // Esta linea esta haciendo la herencia
// // Perro esta heredando de Animal
// Perro.prototype = new Animal()
// Perro.prototype.constructor = Perro;

// // Sobreescritura de moetods del prototipo padre en el hijo
// Perro.prototype.sonar = function () {
//   console.log("Soy un perro y mi sonido es un ladrido")
// }

// Perro.prototype.ladrar = function () {
//   console.log("Guauuuu Guauuuu !!!!!")
// }
// const snoopy = new Perro("Snoopy", "Macho", "mediano"),
//   lolaBunny = new Animal("Lola Bunny", "Hembra")
 

//   console.log(snoopy)
// console.log(lolaBunny)
  
// snoopy.sonar()
// snoopy.saludar()
// snoopy.ladrar()
// lolaBunny.sonar()
// lolaBunny.saludar()

// Las clases no reciben parametros,para poder recibir parametros ,tienen un metodo especial que se llama constructor,el contructor de una clase(class) se ejecuta en el momento
// class Animal {
//   constructor(nombre, genero) {
    
//     this.nombre = nombre;
//     this.genero = genero;

//   }
//   // Atributos
// // metodos en este caso te mete los metodos directamente a prototipos sin hacer nada mas
//   sonar (){
//     console.log("Hago sonidos porque estoy vivo")
//   }
//  saludar() {
//     console.log(`Hola me llamo ${this.nombre}`)
//   }

// }
// class Perro extends Animal{
//   constructor(nombre, genero, tamanio) {
//     // Con el método super() se manda a llamar el contructor de la clase padre
//     super(nombre, genero)
//     this.tamanio = tamanio
//     this.raza = null

//   }
//   sonar() {
//     console.log("Soy un perro y mi sonido es un ladrido")
//   }
//   ladrar() {
//     console.log("Guauuu Guauuu")
//   }
//   // Un método estático se puede ejecutar sin encesidad de instaciar la clase
//   static queEres() {
//     console.log("Los perros somos animales mamíferos que pertenecemos a la familia de los caninos.Somos considerados los mejores amigos del hombre")
//   }
//   // Los setters y getters son metodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
//    get getraza() {
//     return this.raza
//   }
//   set setRaza(raza) {
//     this.raza = raza
//   }
// }
// Perro.queEres()

// const mimi = new Animal("Mimi", "Hembra"),
//   scooby = new Perro("Scooby", "Macho","gigante")
  
// console.log(mimi)
// mimi.saludar()
// mimi.sonar()
// console.log(scooby)
// scooby.saludar()
// scooby.sonar()
// scooby.ladrar()
// console.log(scooby.getraza)
// scooby.setRaza = "Gran Dannes"
// console.log(scooby.getraza)

// class pelicula {
//   constructor({id,titulo,director,estreno,pais,generos,calificacion}) {
//     this.id = id;
//     this.titulo = titulo;
//     this.director = director;
//     this.estreno = estreno;
//     this.pais = pais;
//     this.generos = generos;
//     this.calificacion = calificacion;

//     this.validarIMDB(id)
//     this.validarTitulo(titulo)
//     this.validarDirector(director)
//     this.validarEstreno(estreno)
//     this.validarPais(pais)
//     this.validarGeneros(generos)
//     this.validarCalificacion(calificacion)
    
//   }
//   // Respecto al metodo estático podriamos crear una rreglo en uno de sus atributos y poner alli todos los generos permitidos pero solo funcionaria cuando hicisemos una instancia de la clase , sin embargo con eun metodo estatio getter podemos invocar a este sin necesidad de hace runa instancia total de la clase,recordemos que los metodos setter y getters javaScript los maneja como si fuesen unos atributos raros tanto en la invocacion de estos como en la visualizacion ojo con esto acuerdate !!
//   // Esto seria mi atributo estatico
//   static get listaGeneros() {
//     return["Action","Adult","Adventure","Animation","Biography","Crime","Documentary","Drama","Family","Fantasy","Film Noir","Game-Show","History","Horror","Musical","Music","Mistery","News","Reality - TV","Romance","Sci-Fi","Short","Sport","Talk-Show","Thriller","War","Western","Comedy"]
//   }
// // Ademas ahora necesitaria mi metodo estatico 
//   static generosAceptados() {
//     return console.info(`Los generos aceptados son: ${pelicula.listaGeneros.join(", ")}`)
//   }
//   validarCadena(propiedad,valor) {
//     if (valor === undefined) return console.warn(`En el valor ${propiedad} esta vacia o es undefined`)
//     if (typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, No es una cadena de texto`)
//     return true
//   }
//   validarLongitudCadena(propiedad, valor,longitud) {
//     if (valor.length > longitud) return console.error(`${propiedad} "${valor} excede el numero de caracteres permitidos (${longitud})`)
//     return  true
//   }
//   ValidarNumero(propiedad, valor) {
//     if (valor === undefined) return console.warn(`En el valor ${propiedad} esta vacia o es undefined`)
//     if (typeof valor !== "number") return console.error(`El ${propiedad} no es de caracter numerico sino: ${typeof(valor)} `)
//     return true
//   }
//   ValidarArreglo(propiedad, valor) {
//     if (valor === undefined) return console.warn(`En el valor ${propiedad} esta vacia o es undefined`)
//     if (!(valor instanceof Array)) return console.error(`El valor de la propiedad: ${propiedad} introducido es de tipo: ${typeof (valor)} y deberia ser un Arreglo`)
//     if (valor.length === 0) return console.error(`El array de la propiedad ${propiedad} esta vacio`)
//     for (let [index,num] of valor.entries()) {
//       if (typeof num !== "string")return console.error(`En el array de: ${propiedad} en la posicion ${index+1} el valor es de tipo ${typeof(num)} y debe ser de tipo string`)
//     }
//     return true
//   }
//   validarIMDB(id) {
//     if (this.validarCadena("IMDB id", id)) 
//       if (!(/^([a-z]){2}([0-9]{7})$/.test(id))) 
//         return console.error(`IMDB id "${id}" no es válido, debe tener 9 caracteres, los 2 primeros letras minúsculas, los 7 restantes números`)
//   }


//   validarTitulo(titulo) {
//     if (this.validarCadena("titulo",titulo)) 
//        this.validarLongitudCadena("titulo",titulo,100)
      
    
//   }
//   validarDirector(director) {
//     if (this.validarCadena("director", director))
//       this.validarLongitudCadena("director", director, 50)


//   }
//   validarEstreno(estreno) {
//     if (this.ValidarNumero("Año de estreno", estreno))
//       if (!(/^([0-9]){4}$/.test(estreno)))
//         return console.error(`Año estreno "${estreno}" no es válido, debe ser un número de 4 dígitos`)
//   }
//   validarPais(pais) {
//     this.ValidarArreglo("Pais",pais)
//   }
//   validarGeneros(generos) {
//     if (this.ValidarArreglo("Géneros", generos)) {
//       for (let genero of generos) {
      
//         if (!pelicula.listaGeneros.includes(genero)) {
//           console.error(`Genero(s) incorrectos " ${generos.join(", ")}"`)
//           pelicula.generosAceptados()
//         }
//       }
//     }
//   }
//   validarCalificacion(calificacion) {
//     if (this.ValidarNumero("Calificacion", calificacion))
//       return (calificacion < 0 || calificacion > 10)
//         ? console.error(`La calificacion tiene que estar en un rango entre 0 y 10`)
//         :this.calificacion = calificacion.toFixed(1)
//   }
//   fichaTecnica() {
//     console.info(`Ficha Técnica:\nTitulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.estreno}"\nPais:"${this.pais.join("-")}\nGéneros: ${this.generos.join(",")}\nCalificación: "${this.calificacion}"\nIMDB Id: "${this.id}"`)
//   }
// }
// // pelicula.generosAceptados()

// // const peli = new pelicula({
// //   id: "ee1567562",
// //   titulo: "Título de la Peli",
// //   director: "Dicaprio",
// //   estreno: 2323,
// //   pais: ["cosa", "pepito"],
// //   generos: ["Comedy", "Sport"],
// //   calificacion: 7.123
// // })
// // peli.fichaTecnica()

// const misPelis = [
// {
//   id: "ee1567562",
//   titulo: "Into thw Wild",
//   director: "Sean Penn",
//   estreno: 2007,
//   pais: ["USA"],
//   generos: ["Adventure", "Biography","Drama"],
//   calificacion: 8.1
// },
// {
//   id: "ee1567562",
//   titulo: "Into thw Wild",
//   director: "Sean Penn",
//   estreno: 2007,
//   pais: ["USA"],
//   generos: ["Adventure", "Biography", "Drama"],
//   calificacion: 8.1
// },
// {
//   id: "ee1567562",
//   titulo: "Into thw Wild",
//   director: "Sean Penn",
//   estreno: 2007,
//   pais: ["USA"],
//   generos: ["Adventure", "Biography", "Drama"],
//   calificacion: 8.1
//   }
// ]

// misPelis.forEach(el => {
//   new pelicula(el).fichaTecnica()
// });