<template>
     <header class="header">
            <section class="header-texto">
                <router-link to="/" class="link"><h2>Pokedex</h2></router-link>
            </section>
            <section class="header-imagen">
               <img src="../../assets/img/normal/bars-solid.svg" v-on:click="activar" alt="Menu ">
            </section>
      </header>
</template>
<script>

// El Menu esta activo
let activoBol = false;

export default {
  name: 'HeaderHomeComponent',
  props: {
    
  },
  created(){
    
  },
  data(){
    
    return {
      
      activo: activoBol


    }
  },
  methods:{
    activar(){
      if(activoBol==true){
        activoBol= false;
        this.$emit('mensajeHeader', false);
      }
      else{
        activoBol = true;
        this.$emit('mensajeHeader', true);
      }
    }
    
  }
}
</script>
<style scoped>
    @import './headerHomeComponent.css';
</style>
