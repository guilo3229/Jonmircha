// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const altoBajo = (array1 = undefined)=>{
    if(array1 === undefined)return console.warn("No ha introducido ningun valor")
    if(!(array1 instanceof Array)) return console.error(`El valor introducido "${array1}" no es un array`)
    if(array1.length === 0) return console.warn("El array introducido esta vacio")
    
    for (let i of array1){
        if (typeof i !== "number") return console.error(`El valor ${i} del array ${array1} no es numerico`)
    }
    
     let maximo = 0
     
    
    for (let i of array1){
        

        if(i>maximo) {
            maximo = i

         };

        if( maximo === 0 && i < maximo)
        {maximo = i
        };
   
    
        }     
        let minimo = 0
     
       for (let i of array1){
           
   
           if(i<minimo) {
               minimo = i
   
            };
   
           if( minimo === 0 && i > minimo)
           {minimo = i
           };
      
       
           }     
    let nuevoArray = [minimo,maximo]
    if(minimo !== maximo){



         console.log(`El valor maximo del array es: ${maximo} y el valor minimo del array es: ${minimo}. `) 
       console.info(nuevoArray)
       return
    } 

    console.info(`El valor maximo: ${maximo} y minimo: ${minimo} son iguales `)
    console.info(nuevoArray)
    return
}      
 altoBajo([17,17,17])
