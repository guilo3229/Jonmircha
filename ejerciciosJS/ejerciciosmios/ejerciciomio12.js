// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const primo = (numero=undefined)=>{
    if(numero === undefined)return console.warn("No has introducido ningun numero")
    if (typeof numero !== "number") return console.warn("El valor introducido no es un numero")
    if(numero === 0) return console.warn("El valor del numero es 0")
    if (Math.sign(numero) !== 1) return console.warn("el valor del numero es negativo")
    let i= numero -1
    let primo = true
    while (i >=1 ){
        console.log(i)
        console.log(primo)
        if(numero%(i) === 0 && i > 1){
            
            primo = false
        }
        console.log(primo)
        i--
    }
    if (primo === true)return console.log(`El numero ${numero}  es primo`)
    console.log(`el ${numero} no es primo   `)

    // (!numero=== undefined)
    //     ? console.warn("No has escrito ningun numero")
    //     :(typeof numero !== "number")
    //         ?console.warn("no has escrito un valor numerico")
    //         :(!Math.sign.numero === 1)
    //             ?console.warn("el valor es negativo")
    //             :(numero/numero === 1)
    //                 ?console.info(`El numero: ${numero} es primo` )
    //                 :console.warn(`El numero: ${numero} no es primo` )
            }     
primo(-5)