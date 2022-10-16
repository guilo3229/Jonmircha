const a = prompt()
const b = RegExp(/^[A-Za-z0-9\s]+$/g)
let c = b.test(a)

console.log(c)
function numeroString(a){        
    a = a.trim()
    console.log(a.length)
 console.log("buenardo")

}
if (c === true){
numeroString(a)

}else{
console.log("valor incorrecto no hay ni numero ni letras")}
// function numeroString(a){
//     a = /^[A-Za-z0-9\s]+$/g
//     a = a.trim()
//     console.log(a.length)
// }

// // numeroString(a)