// TODO: El app es es la constante app del main.js que instancia ya con el vue
//Lo utilizamos conforme como declaramos la constante en el main.js
//footer-banco es su nombre (opcional) y seguido pasa un objeto puede tener una data(), methods, propiedades computadas o templates
//Llevamos el HTML en el template
//! NOTA: No se peude utilizar camelCase en el nombre del componente porque no lo reconoce
// !Es mejor todo en minusculas y si son 2 palabras separado con un guión
app.component('footer-banco',{
    //El comando /*html*/ hace que pinte el código de html ocupando la extensón es6-string-html
    // se utilizan comillas invertidas `` para los templates
    template: /*html*/`
    <div class="bg-dark py-3 mt-2 text-white">
    <!-- No utilizamos this.texto porque es un código de html aqui en componentes -->
            <h3>{{texto}} - {{cantidad}}</h3>
    </div>
    `,
    data() {
        return {
            texto: 'Footer de mi sitio web en componentes',
            cantidad: 1000
        }
    },
})