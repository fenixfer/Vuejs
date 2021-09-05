// EL Vue que se ve en la siguiente linea viene del CDN declarado en index.html en el script
const app = Vue.createApp({
    data(){
        return {
            titulo: 'El Banco de Fer con Vue.js',
            cantidad: 1000,
            enlace: 'https://youtube.com/blueeweb',
            estado: true,
            servicios: ['transferencias','pagos','giros','cheques'],
            desactivar: false
        }
    },
    //para interactuar con botones utilizamos methods
    methods: {
        agregarSaldo() {
            this.cantidad = this.cantidad + 100
        },
        //si tenemos más de un método es como una propiedad solo ponemos ,
        //TODO: Utilizando parametros
        quitarSaldo(varlorparametros){
            if (this.cantidad ===0) {
                //desactivamos el button con this.desactivar
                this.desactivar = true 
                alert('saldo en cero')
                //si llega a 0 el saldo entonces ya mandamos el return para que ya no siga bajando o de el -100 -200
                return
            }
            //utilizando parametros 
            this.cantidad = this.cantidad - varlorparametros
        }
    },
    //TODO: Utilizando clases computadas como en el index en el título h2
    //! Al utilizar clases computadas siempre tiene que retornar algo
    computed: {
        colorCantidad(){
            //El text-success y danger es el atributo de bootstap
            return this.cantidad > 500 ? 'text-success' : 'text-danger'  
        },
        mayusculasTexto(){
            return this.titulo.toUpperCase()
        }
    }
})

//TODO: Vue es reactivo, reactivo es si hago cambios en cualquier cosa o propiedad de aqui se visualiza en el sitio web o app
//TODO: Ya sea si hacemos cambios aquí o en el HTML siempre es reactivo