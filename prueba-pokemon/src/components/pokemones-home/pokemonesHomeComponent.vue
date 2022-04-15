<template>
    <section class="pokemones" v-bind:class="{pokemones: activo, desactivar: activo===false}">

      <div v-for="elemento in pokemones" v-bind:key="elemento['id']">
        <router-link :to="'/pokemon/'+elemento['id']"><PokemonHomeComponent :pokemon="elemento"></PokemonHomeComponent></router-link>
      </div>
       
    </section>
</template>
<script>
import PokemonHomeComponent from '../pokemon-home/pokemonHomeComponent';
import axios from 'axios';

// Modelo de representacion
import Pokemon from '../../models/pokemon';

// URLs
const urlPokedex = 'https://pokeapi.co/api/v2/pokemon-species';
const urlInfo = 'https://pokeapi.co/api/v2/pokemon';

// Numero de pokemones a mostrar en la pantalla de inicio
const numeroPokemonesMostrar = 9;

export default {
  name: 'PokemonesHomeComponent',
  props: [
    /* Valor que define la lista de pokemones esta activa*/
    'activo'
  ],
  mounted(){
    // Cargamos los pokemones despues de montar el componente
    this.getPokemones();
  },
  components: {
    PokemonHomeComponent
  },
   methods: {
     /**
      * Metodo engargado de cargar un numero definido de pokemones 
      * desde el api y guardarlos en el arreglo 'pokemones' con todas
      * sus atributos
      */
      async getPokemones(){
        for(let index = 1; index<(numeroPokemonesMostrar+1); index++){
            let rutaNueva = urlInfo+"/"+index;
            let respuesta = await axios.get(rutaNueva).then(response=>{
              // Extraemos los datos
              this.id = response['data']['id'];
              this.nombre = response['data']['name']
              this.imagen = response['data']['sprites']['front_default'];
              this.descripcion ='';
              this.categoria = '';
              this.altura = response['data']['height']
              this.peso = response['data']['weight'];
              this.habilidad =  response['data']['abilities'][0]['ability']['name']
              this.tipos = new Array(response['data']['types']);
        
              // Sacando las debilidades
              const tamano = this.tipos[0]['length'];
              for(let i =0; i<tamano; i++){
                 const urlTipo = this.tipos[0][i]['type']['url'];

                axios.get(urlTipo).then((response)=>{
                  this.debilidades = new Array(response['data']['damage_relations']['double_damage_from']);
                }); // termina la peticion ajax
          
              }// end-for 0 a tamano

              // Sacando el color, descripcion y categoria
              let urlContada = urlPokedex +"/"+index;
              axios.get(urlContada).then((response)=>{
                this.color = response['data']['color']['name'];
                this.descripcion = response['data']['flavor_text_entries'][34]['flavor_text'];
                this.categoria = response['data']['egg_groups'][1]['name'];
              }); // termina la peticion ajax

              // Creamos un nuevo pokemon y lo agregamos al arreglo
              let nuevoPokemon = new Pokemon(this.id, this.nombre, this.color, this.imagen, this.descripcion, 
                                  this.categoria, this.altura, this.peso, this.habilidad, this.tipos, this.debilidades);
                                  
              this.pokemones.push(nuevoPokemon);

            }); // Termina la peticion ajax
            console.log(respuesta);
        }// end_for-principal de 1 a 7
      }, // end_getPokemones

   },
    data(){
      return {
          id: '',
          nombre: '',
          color: '', 
          imagen: '',
          descripcion: '',
          categoria: '',
          altura: '',
          peso: '',
          habilidad: '',
          tipos: [] ,
          debilidades: [], 

          // Arreglo con todos los pokemones
          pokemones : []
      }
    }
}
</script>
<style scoped>
    @import './pokemonesHomeComponent.css';
</style>
