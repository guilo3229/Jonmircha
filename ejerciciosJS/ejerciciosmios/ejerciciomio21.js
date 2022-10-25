// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const arrayAlcuadrado = (alCuadrado=undefined)=>{
    if(alCuadrado ===undefined)return console.info("El valor del arreglo esta vacio")
    if (!(Array.isArray(alCuadrado)))return console.error (`El valor introducido "${alCuadrado}" no es un array`)
    if(alCuadrado.length === 0)return  console.info("El arreglo esta vacio")
    let validacion = true
    alCuadrado.forEach(elemento=>{
        // console.log(elemento)
        if (typeof elemento !== "number"){ 
            validacion = false
            return console.info("Hay un valor en el array que es diferente a un numero")}
        
       
    })
   if (validacion === true){
   const newarray = alCuadrado.map(ele=>Math.pow(ele,2)) 
   return console.info(newarray)}
}

arrayAlcuadrado([2,4,5])