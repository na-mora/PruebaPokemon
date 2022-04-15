<template>
    <div>
      <HeaderHomeComponent @mensajeHeader="estaActivo"></HeaderHomeComponent>
      <PokemonesHomeComponent 
        :activo="menuActivo"
      ></PokemonesHomeComponent>
    </div>
    
</template>
<script>
import HeaderHomeComponent from '../header-home/headerHomeComponent';
import PokemonesHomeComponent from '../pokemones-home/pokemonesHomeComponent';

let menuActivo=  true;
export default {
  name: 'HomeComponent',
  props: {
    
  },
  data(){
    return{
      menuActivo
    }
  },
  components: {
    HeaderHomeComponent,
    PokemonesHomeComponent
  },
   methods:{
     estaActivo(value){
       this.menuActivo = value;
       
     }
   }
}
</script>
<style scoped>
    @import './homeComponent.css';
</style>