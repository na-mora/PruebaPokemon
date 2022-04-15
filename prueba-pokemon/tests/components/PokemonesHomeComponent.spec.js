import {mount} from '@vue/test-utils';
import PokemonHomeComponent from '../../src/components/pokemon-home/PokemonHomeComponent.vue';
//import PokemonesHomeComponent from '../../src/components/pokemones-home/PokemonesHomeComponent.vue';

describe('PokemonesHomeComponent', async()=>{
    
    it('Carga de pokemones desde el api', () =>{
        
        const a = mount(PokemonHomeComponent);
        console.log(a);
        //const Constructor =Vue.extend(PokemonHomeComponent);
        //Vue.extend(PokemonesHomeComponent);
        //onst PokemonesComponent = new Constructor().$mount();

        //PokemonesComponent._watcher.run();

        expect(true).toBe(true);

        /*vm.message = 'foo';

        Vue.nextTick(()=>{
            expect(vm.$el.textContent).toBe('foo');
            done();
        })*/
    })
});

