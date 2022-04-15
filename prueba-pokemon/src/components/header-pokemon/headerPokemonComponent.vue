<template>
      <!-- Header Pokemon -->
      <section class="header-pokemon-detalle">
          <div class="header-pokemon-trazado">
              <router-link to="/"><img src="../../assets/img/normal/trazado/Trazado 308.png" alt="Imagen trazado"></router-link>
          </div>

          <div class="header-pokemon-logout">
              <img src="../../assets/img/normal/logout/Logout@2x.png" alt="Imagen Logout" 
                v-clipboard:copy="informacion"
              >
          </div>
          
      </section>
</template>
<script>
export default {
  name: 'HeaderPokemonComponent',
  props: [
      'pokemon'
  ],
  created(){
      
  },
  data(){
      return{
          informacion: this['pokemon'].toString()
      }
  },
  methods:{
      
  }
}
</script>
<style scoped>
    @import './headerPokemonComponent.css';
</style>
