//  El innerwidth es la propiedad que ahce referencia al tamaño del ancho del vewport de neustra ventana y con height pero con altura el inner es lo que se ve en la ventana a mayaor ventana amyor inner el outer es la resolucion de la pantalla en si.
window.addEventListener("resize", e =>{
    console.clear()
    console.log("****** Evento Resize ******")
    console.log(window.innerWidth)
    console.log(window.innerHeight)
    console.log(window.outerWidth)
    console.log(window.outerHeight)
    console.log(window.scrollX)
    console.log(window.scrollY)
    console.log(e)
})

window.addEventListener("scroll",e=>{
    console.clear()
    console.log("****** Evento Scroll ******")
    // el scroll tanto X como Y podemos ver que es el valor cuando mueves de arriba a la izquierda 
    console.log(window.scrollX)
    console.log(window.scrollY)
    console.log(e)
    
})

window.addEventListener("load", e=>{
   
    console.log("****** Evento load ******")
// Te dice la posicion de izquierda a derecha y de arriba abajo de la ventana en valor absoluto osea sumando o restando dependiendo la posicion respecto al punto mas alejado si es 1 pantalla sera igual que inener width y el inner height
    console.log(window.screenX)
    console.log(window.screenY)
    console.log(e)

})
document.addEventListener("DOMContentLoaded", e =>{
    // este es mucho mas rapido en ejecutar, esto en grandes medidas peude ayudar y optimizar las cosas y es una mejor practica, es mucha mas eficiente trabajar con el DOMContent Loeaded sobre todo en peticiones asincronas, no esprara a que carguen todas las cosas, el load si que espera mas a que cargue todo, apra iniciar cosas en la web es mucho mejor es DOMContentLoaded.
    // Como las peticiones asincronas paran el DOM es mejor usar DOMContentLoeaded ya que hasta que no llegan a la respuesta a estas paran el proceso y seria compatible
    
    console.log("****** Evento DOMContentLoaded ******")

    console.log(window.screenX)
    console.log(window.screenY)
    console.log(e)


})