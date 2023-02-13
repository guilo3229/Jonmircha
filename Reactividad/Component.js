// Aqui nos olvidaremos de las arrow fucntion ya que sera necesario usar el this
const Component = (function(){
    // Creamos el Constructor del componente
    const Constructor = function(options){
        this.el = options.el;
        this.data = options.data;
        this.template = options.template;
    }

    //Agregaremos los métodos al prototipo del construco del componente


    //Render UI-no necesita paso de valor
    Constructor.prototype.render = function(){
        const $el =d.querySelector(this.el)
        if(!$el)return;
        $el.innerHTML = this.template(this.data)

        console.log(this.data)
    }
    //Actualizar el State de forma reactiva-necesita paso de valor
    Constructor.prototype.setState =function(obj){

        for(let key in obj){
            if(this.data.hasOwnProperty(key)){
                this.data[key] = obj[key]
            }
        }

        this.render()
    }
    //Obtendremos una copia inmutable del State-no necesita paso de valor
    Constructor.prototype.getState = function (){
       return JSON.parse(JSON.stringify(this.data))
    }
    return Constructor
})()