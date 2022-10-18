
const a = prompt()
const b = prompt()


function repetir(a,b) {
    
    for (i=0;  i < b; i++) {
    //  
        // c = a
       
        c = a
      d = a + " " + c
      a = a + c
        
    }
    console.log(d)
}

repetir(a,b)