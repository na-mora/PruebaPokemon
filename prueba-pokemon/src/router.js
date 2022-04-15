import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeComponent from './components/home/homeComponent.vue';
import PokemonComponent from './components/pokemon/pokemonComponent';
import errorNoEncontrado from './views/ErrorNoEncontrado/errorNoEncontrado';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', name: '', component: HomeComponent},
        {path: '/home', name: 'home', component: HomeComponent},
        {path: '/pokemon/:id', name: 'pokemon', component: PokemonComponent},
        {path: '*', name: '404', component: errorNoEncontrado}
    ]
});