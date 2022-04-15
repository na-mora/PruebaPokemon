<template>
    <div>
      <div class="pokemon-detalle-info-especificacion-evolucion-fondo"></div>

        <div class="pokemon-detalle-contenido">
            <img :src="evolucion['imagen']" alt="">
            <div class="pokemon-detalle-contenido-info">
                <p class="pokemon-nombre-evolucion">{{evolucion['nombre'] | capitalize}} <span class="pokemon-numero-evolucion">N.°00{{evolucion['id']}}</span></p>
                <div class="tipos-evolucion" v-for="elemento in evolucion['tipos']" :key="elemento['']">
                    <div class="tipo-evolucion" v-bind:class="{
                        'rojo': elemento[0]['type']['name']==='fire',
                        'azul': elemento[0]['type']['name']==='water',
                        'cafe': elemento[0]['type']['name']==='ground',
                        'amarillo': elemento[0]['type']['name']==='electric',
                        'morado': elemento[0]['type']['name']==='psychic'}">
                        <p>{{elemento[0]['type']['name'] | capitalize}}</p>
                    </div>
                    
                </div>
            </div>
        </div>
</div>
</template>
<script>
export default {
  name: 'EvolucionPokemonComponent',
  props: [
      'evolucion'
  ]
}
</script>
<style scoped>
    @import './evolucionPokemonComponent.css';
</style>