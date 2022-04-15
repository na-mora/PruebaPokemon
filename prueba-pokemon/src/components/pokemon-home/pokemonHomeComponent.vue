<template>
    <div class="pokemon" v-bind:class="{
        'fondo-rojo': pokemon['color']==='red',
        'fondo-azul': pokemon['color']==='blue',
        'fondo-amarillo': pokemon['color']==='yellow',
        'fondo-verde': pokemon['color'] ==='green'
    }">
        <div class="pokemon-descripcion">
            <h3>{{ pokemon['nombre'] | capitalize }}</h3>
            <div v-for="(elemento, index) in pokemon['tipos']" :key="elemento[index]['type']['name']" class="pokemon-texto">
                <div>
                    <p>{{elemento[index]['type']['name'] | capitalize}}</p>
                </div>
            </div>
             
        </div>
        <div class="pokemon-imagen">
            <p> N°00{{pokemon['id']}}</p>
            <img :src="pokemon['imagen']" alt="Imagen Pokemon">
        </div>
    </div>
</template>
<script>
export default {
  name: 'PokemonHomeComponent',
  props: [ 
   'pokemon' 
  ],
  filters: {
      capital(valor){
          return valor.charAt(0).toUpperCase() + valor;
      }
  },
  data(){
      return {

      }
  }
}
</script>
<style scoped>
    @import './pokemonHomeComponent.css';
</style>
