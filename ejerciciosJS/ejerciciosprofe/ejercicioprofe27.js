// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
// Todos los datos del objeto son obligatorios.
// Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
// Valida que el título no rebase los 100 caracteres.
// Valida que el director no rebase los 50 caracteres.
// Valida que el año de estreno sea un número entero de 4 dígitos.
// Valida que el país o paises sea introducidos en forma de arreglo.
// Valida que los géneros sean introducidos en forma de arreglo.
// Valida que los géneros introducidos esten dentro de los géneros 
// aceptados*.
// Crea un método estático que devuelva los géneros aceptados*.
// Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
// decimal de una posición.
// Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.


class Pelicula{
constructor({id,titulo,director,estreno,pais,generos,calificacion}){
    this.id =id
    this.titulo = titulo
    this.director = director
    this.estreno = estreno
    this.pais = pais
    this.generos = generos
    this.calificacion = calificacion

    this.validarIMDB(id)
    this.validarTitulo(titulo)
    this.validarDirector(director)
    this.validarEstreno(estreno)
    this.validarPais(pais)
    this.validarGeneros(generos)
    this.validarCalificacion(calificacion)
    }
    // Esto es un atributo estatico, sirve apra poder hacer metodos estaticos es decir propiedades estaticas  funciones qestatiscas que dentro de objetos son los metodos
    static get listaGeneros(){
        return["Action","Adult","Adventure","Animation","Biography","Comedy","Crime","Documentary","Drama","Family","Fantasy","Film Noir","Game-Show","History","Horror","Musical","Music","Mistery","Reality - TV","Romance","Sci-Fi","Short","Sport","Talk-Show","Thriller","War","Western"]
    }
    //  aqui se puede ver el metodo estatico recordemos equ eun metodo no es ma que una funcion dentro de un objeto
    static generosAceptados(){
        return console.info(`los géneros aceptados son: ${Pelicula.listaGeneros.join(", ")}`)
    }
validarCadena(propiedad,valor){
    if(!valor)return console.warn(`${propiedad} "${valor}" esta vacio`)
    
    if (typeof valor !== "string")return console.error(`${propiedad} "${valor}" ingresado,No es una cadena de texto`)
    return true
}
validarLongitudCadena(propiedad,valor,longitud){
    if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud})`)
    return true
}
validarNumero (propiedad,valor){
    if(valor === undefined)return console.warn("No has introducido ningun valor")
    if(typeof valor !== "number" ) return console.error(`${propiedad} "${valor}" no es un valor numerico`)
    return true
}
validarArreglo (propiedad,valor){
    if(!valor) return console.warn(`No ingresaste ningun arreglo en ${propiedad}`)
    
    if(!(valor instanceof Array))return console.error(`${propiedad} "${valor}" no es un array`)
    if (propiedad.length === 0) return console.error("El arreglo ${propiedad} esta vacio")
    for (let i of valor){
        if(typeof i !== "string") return console.error(`El valor de la propiedad ${propiedad} no es un string: (${valor})`)
    }
    return true

}
    validarIMDB(id){

    if(this.validarCadena("IMDB id",id))
    if(!(/^([a-z]){2}([0-9]){7}$/.test(id)))
        return console.error(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes numeros.`)

    }

    validarTitulo(titulo){

    if(this.validarCadena("Titulo",titulo))
        this.validarLongitudCadena("Titulo",titulo,100)   
    };
    validarDirector(director){

    if(this.validarCadena("Director",director))
        this.validarLongitudCadena("Director",director,50)   
    }
    validarEstreno(estreno){
        if(this.validarNumero("año de estreno",estreno))
            if(!(/^([0-9]){4}$/.test(estreno)))
            return console.error(`El año de estreno "${estreno}" no es valido, debe tener 4 numeros entre 0 y 9`)
    }
    validarPais(pais){
        this.validarArreglo("Pais",pais)

    }
    validarGeneros(generos){
        this.validarArreglo("generos",generos)
        for (let genero of generos){
            // console.log(genero, Pelicula.listaGeneros.includes(genero))
            if(!Pelicula.listaGeneros.includes(genero)){
                console.error(`Género(s) incorrectos "${generos.join(", ")}"`)
                Pelicula.generosAceptados()
            }
        }
    } 
    validarCalificacion(calificacion){
        if(this.validarNumero("Calificacion",calificacion))
            return (calificacion<0 || calificacion > 10)
            ?console.error(`La calificacion noe sta en el reango de entre 0 y 10`)
            :this.calificacion = calificacion.toFixed(1)
    }
    fichaTecnica(){
        console.info(`Ficha tecnica\nTítulo:"${this.titulo}"\nDirector:"${this.director}"\nAños:"${this.estreno}"\nPais:"${this.pais.join("-")}\nGeneros:"${this.generos.join(", ")}"\nCalificacion:"${this.calificacion}"\nIMDB id:"${this.id}"`)
    }
}

// Pelicula.generosAceptados()
// const peli = new Pelicula({
// id: "aa1597223",
// titulo: "macarena",
// director:"sfddsfds",
// estreno: 1232,
// pais: ["casa","Francia"],
// generos: ["Comedy","Sport"],
// calificacion: 4.35

// })
// peli.fichaTecnica()

const misPelis = [
    {
    id: "aa1597223",
    titulo: "macarena",
    director:"sfddsfds",
    estreno: 1232,
    pais: ["casa","Francia"],
    generos: ["Comedy","Sport"],
    calificacion: 4.35

    },
    {
    id: "at1597223",
    titulo: "macarena",
    director:"sfddsfds",
    estreno: 1232,
    pais: ["casa","Francia"],
    generos: ["Comedy","Sport"],
    calificacion: 4.35
    },
    {
    id: "as1597223",
    titulo: "macarena",
    director:"sfddsfds",
    estreno: 1232,
    pais: ["casa","Francia"],
    generos: ["Comedy","Sport"],
    calificacion: 4.35
    }


]
misPelis.forEach(el => new Pelicula(el).fichaTecnica())