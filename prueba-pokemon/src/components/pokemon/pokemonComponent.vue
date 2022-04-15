<template>
    <div class="principal-pokemon-detalle" v-bind:class="{
      'rojo': pokemon['color']==='red',
      'verde': pokemon['color']==='green',
      'amarillo': pokemon['color']==='yellow',
      'azul': pokemon['color']==='blue'
    }">
      <HeaderPokemonComponent :pokemon="pokemon"></HeaderPokemonComponent>
      <div class="pokemon-detalle">
        <EncabezadoPokemonComponent :pokemon="pokemon" ></EncabezadoPokemonComponent>

        <div class="pokemon-detalle-info">
          <div v-bind:class="{activar: estado==='cargando', desactivar: estado !== 'cargando'}">
              <CargandoPokemonComponent></CargandoPokemonComponent>
          </div>
          
          <div v-bind:class="{activar: estado!=='cargando', desactivar: estado === 'cargando'}">
            <div class="pokemon-detalle-info-especificacion">
              <div class="pokemon-detalle-info-especificacion-opciones evolucion-activo">
                  <p v-on:click="estado = 'pokemon' ">Pokémon</p>
                  <p v-on:click="estado = 'evolucion'">Evolución</p>
              </div>
              <div v-bind:class="{activar: estado==='pokemon', desactivar: estado !== 'pokemon'}">
                <EspecificacionPokemonComponent :pokemon="pokemon"></EspecificacionPokemonComponent>
              </div>
              <div v-bind:class="{activar: estado==='evolucion', desactivar: estado !== 'evolucion' }">
                <EvolucionPokemonComponent :evolucion="evolucion"></EvolucionPokemonComponent>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
</template>
<script>
import axios from 'axios';

import HeaderPokemonComponent from '../header-pokemon/headerPokemonComponent';
import EncabezadoPokemonComponent from '../encabezado-pokemon/encabezadoPokemonComponent';

import CargandoPokemonComponent from '../cargando-pokemon/cargandoPokemonComponent';
import EspecificacionPokemonComponent from '../especificacion-pokemon/especificacionPokemonComponent';
import EvolucionPokemonComponent from '../evolucion-pokemon/evolucionPokemonComponent';
// Modelo de representacion
import Pokemon from '../../models/pokemon';

// URLs
const urlPokedex = 'https://pokeapi.co/api/v2/pokemon-species';
const urlInfo = 'https://pokeapi.co/api/v2/pokemon';

// Estados del componente
let estados = ['cargando', 'pokemon', 'evolucion']

//let id = '';
export default {
  name: 'PokemonComponent',
  props: {
    
  },
  components: {
    HeaderPokemonComponent,
    EncabezadoPokemonComponent,
    CargandoPokemonComponent,
    EspecificacionPokemonComponent,
    EvolucionPokemonComponent
  },
  // Hooks
  mounted(){
    // Valores en el inicio del componente
    //id = this.$router.params.id;
    this.getPokemon();
  },
  data(){
    return {
      estado: '',

      id: this.$route.params['id'],
      nombre: '',
      imagen: '',
      color: '',
      descripcion: '',
      categoria: '', 
      altura: '',
      peso: '',
      habilidad: '',
      tipos: '',
      debilidades: '',

      pokemon: '',

      nombreEvolucion: '',
      imagenEvolucion: '',
      tiposEvolucion: '',

      evolucion: ''
  
    };
     
  },
  methods: {
    // Definicion de metodos
    async getPokemon(){
      this.estado = estados[0];

      let nuevaUrl = urlInfo+'/'+this.id;

      await axios.get(nuevaUrl).then(response=>{
            console.log('inicio 1');
            this.nombre = response['data']['name'];
            this.imagen = response['data']['sprites']['front_default'];
            this.altura = response['data']['height'];
            this.peso = response['data']['weight'];
            this.habilidad =  response['data']['abilities'][0]['ability']['name']
            this.tipos = new Array(response['data']['types']);

            this.imagenEvolucion = response['data']['sprites']['front_shiny'];
            
            console.log('termino 1');
      });

      let urlContada = urlPokedex +"/"+this.id;
      await axios.get(urlContada).then(response=>{
        console.log('inicio 2');
        this.color = response['data']['color']['name'];
        this.descripcion = response['data']['flavor_text_entries'][34]['flavor_text'];
        this.categoria = response['data']['egg_groups'][1]['name'];

        console.log('termino 2');
      });

      const tamano = this.tipos[0]['length'];
      for(let i =0; i<tamano; i++){
          const urlTipo = this.tipos[0][i]['type']['url'];

        await axios.get(urlTipo).then((response)=>{
          this.debilidades = new Array(response['data']['damage_relations']['double_damage_from']);
        }); // termina la peticion ajax
        
      }

      // Ya tiene todo cargado

      // Creamos un nuevo pokemon y lo agregamos al arreglo
      let nuevoPokemon = new Pokemon(this.id, this.nombre, this.color, this.imagen, this.descripcion, 
                        this.categoria, this.altura, this.peso, this.habilidad, this.tipos, this.debilidades);
      this.pokemon = nuevoPokemon;

      let urlEvolucion = "https://pokeapi.co/api/v2/evolution-chain/"+this.id;
      await axios.get(urlEvolucion).then(response=>{
        this.nombreEvolucion = response['data']['chain']['evolves_to'][0]['species']['name'];
        const urlImagen = response['data']['chain']['evolves_to'][0]['species']['url'];

        axios.get(urlImagen).then(response=>{
          this.tiposEvolucion = response['data']['egg_groups'];
        });
      });

      let evolucionPokemon = new Pokemon(this.id, this.nombreEvolucion, this.color, this.imagenEvolucion, '',
                            '', '', '', '', this.tipos, '');
      this.evolucion = evolucionPokemon;

      setTimeout(()=>{
        this.estado = estados[1];
      }, 3000);
            
    },
    estadoPokemon(){

    },
    estadoEvolucion(){

    }
  }
}
</script>
<style scoped>
    @import './pokemonComponent.css';
</style>