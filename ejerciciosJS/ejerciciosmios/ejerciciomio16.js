// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const descuento = (valor = undefined,descuento= undefined) =>
    (valor === undefined)
        ?console.warn("El valor introducido esta vacio")
        :(typeof valor !== "number")
            ?console.error(`El ${valor} introducido no es numerico`)
            :(Math.sign(valor)!== 1)
                ?console.error(`El ${valor} metido es 0 o negativo`)
                : (descuento === undefined)
                    ?console.warn("El descuento introducido esta vacio")
                    :(typeof descuento !== "number")
                        ?console.error(`El ${descuento} introducido no es numerico`)
                        :(Math.sign(descuento)!== 1&&Math.sign(descuento)!== 0)
                            ?console.error(`El ${descuento} metido es negativo`)
                            :(descuento>=100)
                                ?console.warn(`El ${descuento} metido es superior al 100% y le tendrias que dar dinero al cliente algo anda mal`)
                                :console.info(`El valor del producto con el ${descuento}% es: ${Math.round(valor*((100-descuento)/100))}`)



descuento(1500,0)