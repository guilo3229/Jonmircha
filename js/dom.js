// No confundir una etiqueta HTML y un nodo


// Metodos que ya no se suelen usar:
console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByClassName("card"))
console.log(document.getElementsByName("nombre"))
// a partir de ahora usaremos:
console.log(document.getElementById("menu"))
console.log(document.getElementById("menu"))
// han sido remplazados por queryselector "a veces" ya que get elmentByid es mas rapido que el querySelector ya que en este ultimo tiene que saber si es un id con # o . conc lase etc
console.log(document.querySelector("#menu"))
// Para buscar todos los enlaces que tenga mi pagina es con la letra , si no le dicesAll te va a traer el primer elemento si yo quisiera traerme todos usamos el All
console.log(document.querySelectorAll("a"))
// Nos devuelve Nodelist no Arreglos Ojo!! comparten metodos como length, el forEach tambien
console.log(document.querySelectorAll("a").length)
// document.querySelectorAll("a").forEach((el)=>console.log(el))3Para las clases sera necesario poner el puntito
console.log(document.querySelectorAll(".card"))
// si queremos entrar en uno en aprticular usariamos el corchete despues del parentesis como en los arreglo escribiendo el numero al cual queremos hacer referencia recordando que siempre empezamos en 0 par ael primer elmento
console.log(document.querySelectorAll(".card")[2])
// Tambien acepta selectores descendientes, es decir podemos decirle que nos imprima los li que estan dentro de li poniendo #menu que seria el id y luego espacio y el tipo de  que queremos
console.log(document.querySelectorAll("#menu li"))