
// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const getRandomInt = (min=501, max=600) =>{

    min = Math.ceil(min);
    max = Math.floor(max);
    console.log(Math.floor(Math.random() * (max - min+1) + min));
  }

  getRandomInt()
  
  for (let i =0;i<50;i++)getRandomInt()