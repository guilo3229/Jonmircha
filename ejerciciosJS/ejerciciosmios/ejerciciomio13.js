// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const parImpar = (numero =undefined)=>{
    (numero === undefined)
        ?console.error("No has introducido ningun valor")
        : (typeof numero !== "number")
            ?console.warn("El dato introducido no es un numero")
            :(numero === 0)
                ?console.warn("El valor no puede ser 0")
                :(Math.sign(numero) !== 1)
                    ?console.error(`El valor ${numero} es negativo`)
                    :(numero%2 !== 0)
                        ?console.info(`El ${numero} es impar`)
                        :console.log(`El ${numero} es par`)

    }
parImpar()

