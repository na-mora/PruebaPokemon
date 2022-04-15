<template>
    <div>
        <div class="pokemon-detalle-encabezado">
            <h2>{{pokemon['nombre'] | capitalize}}</h2>
            <p>N.°00{{pokemon['id']}}</p>
        </div>
        <div class="pokemon-detalle-descripcion">
            <p>{{pokemon['descripcion']}}</p>
            <div class="pokemon-detalle-descripcion-imagen">
                <img :src="pokemon['imagen']" alt="Pokemon ">
            </div>
            
        </div>
    </div>
    
</template>
<script>
export default {
  name: 'EncabezadoPokemonComponent',
  props: [
    'pokemon'
  ]
}
</script>
<style scoped>
    @import './encabezadoPokemonComponent.css';
</style>