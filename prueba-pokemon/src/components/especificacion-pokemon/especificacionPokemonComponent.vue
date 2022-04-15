<template>
    <div class="pokemon-detalle-info-especificacion-pokemon">
      <table class="pokemon-detalle-info-especificacion-tabla">
          <tbody>
              <tr>
                  <td class="casilla-titulo">Categoria</td>
                  <td class="casilla-contenido">{{pokemon['categoria'] | capitalize}}</td>
              </tr>
              <tr>
                  <td class="casilla-titulo">Altura</td>
                  <td class="casilla-contenido">0.{{pokemon['altura']}}m</td>
              </tr>
              <tr>
                  <td class="casilla-titulo">Peso</td>
                  <td class="casilla-contenido">{{pokemon['peso']}} kg</td>
              </tr>
              <tr>
                  <td class="casilla-titulo">Habilidad</td>
                  <td class="casilla-contenido">{{pokemon['habilidad'] | capitalize}}</td>
              </tr>
          </tbody>
      </table>

      <p>Tipo</p>
      <div class="tipos" v-for="elemento in pokemon['tipos']" :key="elemento['']" >
          <div class="tipo" v-bind:class="{
                  'rojo': elemento[0]['type']['name']==='fire',
                  'azul': elemento[0]['type']['name']==='water',
                  'cafe': elemento[0]['type']['name']==='ground',
                  'amarillo': elemento[0]['type']['name']==='electric',
                  'morado': elemento[0]['type']['name']==='psychic'}">
              <p>{{elemento[0]['type']['name'] | capitalize}}</p>
          </div>
      </div>

      <p>Debilidad</p>
      <div class="debilidades" v-for="element in pokemon['debilidades']" v-bind:key="element['name']" >
          <div v-for="x in element" :key="x">
              <div class="debilidad" v-bind:class="{
                  'rojo': x['name']==='fire',
                  'azul': x['name']==='water',
                  'cafe': x['name']==='ground',
                  'amarillo': x['name']==='electric',
                  'morado': x['name']==='psychic'}"
                  >
              <p>{{x['name'] | capitalize}}</p>
            </div>
          </div>
          
          
      </div>
  </div>
</template>
<script>
export default {
  name: 'EspecificacionPokemonComponent',
  props: [
      'pokemon'
  ]
}
</script>
<style scoped>
    @import './especificacionPokemonComponent.css';
</style>