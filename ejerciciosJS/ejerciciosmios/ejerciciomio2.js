

const a = prompt()
const b = RegExp(/^[A-Za-z0-9\s]+$/g)
const d = prompt()
const e = RegExp(/^[1-9]\d*$/)
let c = b.test(a)
let h = e.test(d)


// console.log(c,h)da
// console.log(a.slice(0,d))

function numeroCortado(a,d){
    

console.log(a.slice(0,d))
}
if(c === true && h === true){
    numeroCortado(a,d)
}else{
    console.log("uno o los dos valores no estan bien")
}
// function numeroRecortado(a,d){        
    
//     d = d.trim()
//     console.log(a.length)
//  console.log("buenardo")

// }
// if (c === true){
// numeroRecortado(a)

// }else{
// console.log("valor incorrecto no hay ni numero ni letras")}