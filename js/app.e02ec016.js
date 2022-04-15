(function(){"use strict";var e={6744:function(e,o,t){var a=t(8935),n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{attrs:{id:"app"}},[t("main",{staticClass:"contenedor"},[t("router-view")],1)])},i=[],s={name:"app",components:{}},r=s,c=t(1001),l=(0,c.Z)(r,n,i,!1,null,null,null),p=l.exports,m=t(2809),d=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("HeaderHomeComponent",{on:{mensajeHeader:e.estaActivo}}),t("PokemonesHomeComponent",{attrs:{activo:e.menuActivo}})],1)},u=[],h=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("header",{staticClass:"header"},[a("section",{staticClass:"header-texto"},[a("router-link",{staticClass:"link",attrs:{to:"/"}},[a("h2",[e._v("Pokedex")])])],1),a("section",{staticClass:"header-imagen"},[a("img",{attrs:{src:t(8215),alt:"Menu "},on:{click:e.activar}})])])},v=[];let k=!1;var f={name:"HeaderHomeComponent",props:{},created(){},data(){return{activo:k}},methods:{activar(){1==k?(k=!1,this.$emit("mensajeHeader",!1)):(k=!0,this.$emit("mensajeHeader",!0))}}},g=f,C=(0,c.Z)(g,h,v,!1,null,"fa8ddaec",null),A=C.exports,b=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"pokemones",class:{pokemones:e.activo,desactivar:!1===e.activo}},e._l(e.pokemones,(function(e){return t("div",{key:e["id"]},[t("router-link",{attrs:{to:"/pokemon/"+e["id"]}},[t("PokemonHomeComponent",{attrs:{pokemon:e}})],1)],1)})),0)},_=[],y=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"pokemon",class:{"fondo-rojo":"red"===e.pokemon["color"],"fondo-azul":"blue"===e.pokemon["color"],"fondo-amarillo":"yellow"===e.pokemon["color"],"fondo-verde":"green"===e.pokemon["color"]}},[t("div",{staticClass:"pokemon-descripcion"},[t("h3",[e._v(e._s(e._f("capitalize")(e.pokemon["nombre"])))]),e._l(e.pokemon["tipos"],(function(o,a){return t("div",{key:o[a]["type"]["name"],staticClass:"pokemon-texto"},[t("div",[t("p",[e._v(e._s(e._f("capitalize")(o[a]["type"]["name"])))])])])}))],2),t("div",{staticClass:"pokemon-imagen"},[t("p",[e._v(" N°00"+e._s(e.pokemon["id"]))]),t("img",{attrs:{src:e.pokemon["imagen"],alt:"Imagen Pokemon"}})])])},E=[],P={name:"PokemonHomeComponent",props:["pokemon"],filters:{capital(e){return e.charAt(0).toUpperCase()+e}},data(){return{}}},w=P,x=(0,c.Z)(w,y,E,!1,null,"3b8a897a",null),z=x.exports,S=t(6166),O=t.n(S);class H{constructor(e,o,t,a,n,i,s,r,c,l,p){this.id=e,this.nombre=o,this.color=t,this.imagen=a,this.descripcion=n,this.categoria=i,this.altura=s,this.peso=r,this.habilidad=c,this.tipos=l,this.debilidades=p}toString(){const e=",";let o=this.id+e+this.nombre+e+this.color+e+this.imagen+e+this.descripcion+e+this.categoria+e+this.altura+e+this.peso+e+this.habilidad+e;return o}}const j="https://pokeapi.co/api/v2/pokemon-species",D="https://pokeapi.co/api/v2/pokemon",F=9;var I={name:"PokemonesHomeComponent",props:["activo"],mounted(){this.getPokemones()},components:{PokemonHomeComponent:z},methods:{async getPokemones(){for(let e=1;e<F+1;e++){let o=D+"/"+e,t=await O().get(o).then((o=>{this.id=o["data"]["id"],this.nombre=o["data"]["name"],this.imagen=o["data"]["sprites"]["front_default"],this.descripcion="",this.categoria="",this.altura=o["data"]["height"],this.peso=o["data"]["weight"],this.habilidad=o["data"]["abilities"][0]["ability"]["name"],this.tipos=new Array(o["data"]["types"]);const t=this.tipos[0]["length"];for(let e=0;e<t;e++){const o=this.tipos[0][e]["type"]["url"];O().get(o).then((e=>{this.debilidades=new Array(e["data"]["damage_relations"]["double_damage_from"])}))}let a=j+"/"+e;O().get(a).then((e=>{this.color=e["data"]["color"]["name"],this.descripcion=e["data"]["flavor_text_entries"][34]["flavor_text"],this.categoria=e["data"]["egg_groups"][1]["name"]}));let n=new H(this.id,this.nombre,this.color,this.imagen,this.descripcion,this.categoria,this.altura,this.peso,this.habilidad,this.tipos,this.debilidades);this.pokemones.push(n)}));console.log(t)}}},data(){return{id:"",nombre:"",color:"",imagen:"",descripcion:"",categoria:"",altura:"",peso:"",habilidad:"",tipos:[],debilidades:[],pokemones:[]}}},N=I,Z=(0,c.Z)(N,b,_,!1,null,"5745dd43",null),U=Z.exports;let B=!0;var V={name:"HomeComponent",props:{},data(){return{menuActivo:B}},components:{HeaderHomeComponent:A,PokemonesHomeComponent:U},methods:{estaActivo(e){this.menuActivo=e}}},M=V,K=(0,c.Z)(M,d,u,!1,null,"f65db0de",null),Q=K.exports,W=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"principal-pokemon-detalle",class:{rojo:"red"===e.pokemon["color"],verde:"green"===e.pokemon["color"],amarillo:"yellow"===e.pokemon["color"],azul:"blue"===e.pokemon["color"]}},[t("HeaderPokemonComponent",{attrs:{pokemon:e.pokemon}}),t("div",{staticClass:"pokemon-detalle"},[t("EncabezadoPokemonComponent",{attrs:{pokemon:e.pokemon}}),t("div",{staticClass:"pokemon-detalle-info"},[t("div",{class:{activar:"cargando"===e.estado,desactivar:"cargando"!==e.estado}},[t("CargandoPokemonComponent")],1),t("div",{class:{activar:"cargando"!==e.estado,desactivar:"cargando"===e.estado}},[t("div",{staticClass:"pokemon-detalle-info-especificacion"},[t("div",{staticClass:"pokemon-detalle-info-especificacion-opciones evolucion-activo"},[t("p",{on:{click:function(o){e.estado="pokemon"}}},[e._v("Pokémon")]),t("p",{on:{click:function(o){e.estado="evolucion"}}},[e._v("Evolución")])]),t("div",{class:{activar:"pokemon"===e.estado,desactivar:"pokemon"!==e.estado}},[t("EspecificacionPokemonComponent",{attrs:{pokemon:e.pokemon}})],1),t("div",{class:{activar:"evolucion"===e.estado,desactivar:"evolucion"!==e.estado}},[t("EvolucionPokemonComponent",{attrs:{evolucion:e.evolucion}})],1)])])])],1)],1)},G=[],Y=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("section",{staticClass:"header-pokemon-detalle"},[a("div",{staticClass:"header-pokemon-trazado"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:t(9910),alt:"Imagen trazado"}})])],1),a("div",{staticClass:"header-pokemon-logout"},[a("img",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.informacion,expression:"informacion",arg:"copy"}],attrs:{src:t(9653),alt:"Imagen Logout"}})])])},T=[],X={name:"HeaderPokemonComponent",props:["pokemon"],created(){},data(){return{informacion:this["pokemon"].toString()}},methods:{}},L=X,q=(0,c.Z)(L,Y,T,!1,null,"7b995a0e",null),R=q.exports,J=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("div",{staticClass:"pokemon-detalle-encabezado"},[t("h2",[e._v(e._s(e._f("capitalize")(e.pokemon["nombre"])))]),t("p",[e._v("N.°00"+e._s(e.pokemon["id"]))])]),t("div",{staticClass:"pokemon-detalle-descripcion"},[t("p",[e._v(e._s(e.pokemon["descripcion"]))]),t("div",{staticClass:"pokemon-detalle-descripcion-imagen"},[t("img",{attrs:{src:e.pokemon["imagen"],alt:"Pokemon "}})])])])},$=[],ee={name:"EncabezadoPokemonComponent",props:["pokemon"]},oe=ee,te=(0,c.Z)(oe,J,$,!1,null,"4dc29838",null),ae=te.exports,ne=function(){var e=this,o=e.$createElement;e._self._c;return e._m(0)},ie=[function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"pokemon-detalle-info-cargando"},[a("img",{staticClass:"rotate",attrs:{src:t(5207),alt:"Pokebola"}})])}],se={name:"CargandoPokemonComponent",props:{}},re=se,ce=(0,c.Z)(re,ne,ie,!1,null,"07bd1b36",null),le=ce.exports,pe=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"pokemon-detalle-info-especificacion-pokemon"},[t("table",{staticClass:"pokemon-detalle-info-especificacion-tabla"},[t("tbody",[t("tr",[t("td",{staticClass:"casilla-titulo"},[e._v("Categoria")]),t("td",{staticClass:"casilla-contenido"},[e._v(e._s(e._f("capitalize")(e.pokemon["categoria"])))])]),t("tr",[t("td",{staticClass:"casilla-titulo"},[e._v("Altura")]),t("td",{staticClass:"casilla-contenido"},[e._v("0."+e._s(e.pokemon["altura"])+"m")])]),t("tr",[t("td",{staticClass:"casilla-titulo"},[e._v("Peso")]),t("td",{staticClass:"casilla-contenido"},[e._v(e._s(e.pokemon["peso"])+" kg")])]),t("tr",[t("td",{staticClass:"casilla-titulo"},[e._v("Habilidad")]),t("td",{staticClass:"casilla-contenido"},[e._v(e._s(e._f("capitalize")(e.pokemon["habilidad"])))])])])]),t("p",[e._v("Tipo")]),e._l(e.pokemon["tipos"],(function(o){return t("div",{key:o[""],staticClass:"tipos"},[t("div",{staticClass:"tipo",class:{rojo:"fire"===o[0]["type"]["name"],azul:"water"===o[0]["type"]["name"],cafe:"ground"===o[0]["type"]["name"],amarillo:"electric"===o[0]["type"]["name"],morado:"psychic"===o[0]["type"]["name"]}},[t("p",[e._v(e._s(e._f("capitalize")(o[0]["type"]["name"])))])])])})),t("p",[e._v("Debilidad")]),e._l(e.pokemon["debilidades"],(function(o){return t("div",{key:o["name"],staticClass:"debilidades"},e._l(o,(function(o){return t("div",{key:o},[t("div",{staticClass:"debilidad",class:{rojo:"fire"===o["name"],azul:"water"===o["name"],cafe:"ground"===o["name"],amarillo:"electric"===o["name"],morado:"psychic"===o["name"]}},[t("p",[e._v(e._s(e._f("capitalize")(o["name"])))])])])})),0)}))],2)},me=[],de={name:"EspecificacionPokemonComponent",props:["pokemon"]},ue=de,he=(0,c.Z)(ue,pe,me,!1,null,"45778c00",null),ve=he.exports,ke=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("div",{staticClass:"pokemon-detalle-info-especificacion-evolucion-fondo"}),t("div",{staticClass:"pokemon-detalle-contenido"},[t("img",{attrs:{src:e.evolucion["imagen"],alt:""}}),t("div",{staticClass:"pokemon-detalle-contenido-info"},[t("p",{staticClass:"pokemon-nombre-evolucion"},[e._v(e._s(e._f("capitalize")(e.evolucion["nombre"]))+" "),t("span",{staticClass:"pokemon-numero-evolucion"},[e._v("N.°00"+e._s(e.evolucion["id"]))])]),e._l(e.evolucion["tipos"],(function(o){return t("div",{key:o[""],staticClass:"tipos-evolucion"},[t("div",{staticClass:"tipo-evolucion",class:{rojo:"fire"===o[0]["type"]["name"],azul:"water"===o[0]["type"]["name"],cafe:"ground"===o[0]["type"]["name"],amarillo:"electric"===o[0]["type"]["name"],morado:"psychic"===o[0]["type"]["name"]}},[t("p",[e._v(e._s(e._f("capitalize")(o[0]["type"]["name"])))])])])}))],2)])])},fe=[],ge={name:"EvolucionPokemonComponent",props:["evolucion"]},Ce=ge,Ae=(0,c.Z)(Ce,ke,fe,!1,null,"7e624a75",null),be=Ae.exports;const _e="https://pokeapi.co/api/v2/pokemon-species",ye="https://pokeapi.co/api/v2/pokemon";let Ee=["cargando","pokemon","evolucion"];var Pe={name:"PokemonComponent",props:{},components:{HeaderPokemonComponent:R,EncabezadoPokemonComponent:ae,CargandoPokemonComponent:le,EspecificacionPokemonComponent:ve,EvolucionPokemonComponent:be},mounted(){this.getPokemon()},data(){return{estado:"",id:this.$route.params["id"],nombre:"",imagen:"",color:"",descripcion:"",categoria:"",altura:"",peso:"",habilidad:"",tipos:"",debilidades:"",pokemon:"",nombreEvolucion:"",imagenEvolucion:"",tiposEvolucion:"",evolucion:""}},methods:{async getPokemon(){this.estado=Ee[0];let e=ye+"/"+this.id;await O().get(e).then((e=>{console.log("inicio 1"),this.nombre=e["data"]["name"],this.imagen=e["data"]["sprites"]["front_default"],this.altura=e["data"]["height"],this.peso=e["data"]["weight"],this.habilidad=e["data"]["abilities"][0]["ability"]["name"],this.tipos=new Array(e["data"]["types"]),this.imagenEvolucion=e["data"]["sprites"]["front_shiny"],console.log("termino 1")}));let o=_e+"/"+this.id;await O().get(o).then((e=>{console.log("inicio 2"),this.color=e["data"]["color"]["name"],this.descripcion=e["data"]["flavor_text_entries"][34]["flavor_text"],this.categoria=e["data"]["egg_groups"][1]["name"],console.log("termino 2")}));const t=this.tipos[0]["length"];for(let s=0;s<t;s++){const e=this.tipos[0][s]["type"]["url"];await O().get(e).then((e=>{this.debilidades=new Array(e["data"]["damage_relations"]["double_damage_from"])}))}let a=new H(this.id,this.nombre,this.color,this.imagen,this.descripcion,this.categoria,this.altura,this.peso,this.habilidad,this.tipos,this.debilidades);this.pokemon=a;let n="https://pokeapi.co/api/v2/evolution-chain/"+this.id;await O().get(n).then((e=>{this.nombreEvolucion=e["data"]["chain"]["evolves_to"][0]["species"]["name"];const o=e["data"]["chain"]["evolves_to"][0]["species"]["url"];O().get(o).then((e=>{this.tiposEvolucion=e["data"]["egg_groups"]}))}));let i=new H(this.id,this.nombreEvolucion,this.color,this.imagenEvolucion,"","","","","",this.tipos,"");this.evolucion=i,setTimeout((()=>{this.estado=Ee[1]}),3e3)},estadoPokemon(){},estadoEvolucion(){}}},we=Pe,xe=(0,c.Z)(we,W,G,!1,null,"e09600c8",null),ze=xe.exports,Se=function(){var e=this,o=e.$createElement;e._self._c;return e._m(0)},Oe=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"errorNoEncontrado"},[t("h2",[e._v("Pagina no encontrada")]),t("p",[e._v("Error 404")])])}],He={},je=(0,c.Z)(He,Se,Oe,!1,null,"681eb300",null),De=je.exports;a.Z.use(m.Z);var Fe=new m.Z({mode:"history",routes:[{path:"/",name:"",component:Q},{path:"/home",name:"home",component:Q},{path:"/pokemon/:id",name:"pokemon",component:ze},{path:"*",name:"404",component:De}]}),Ie=t(9523),Ne=t.n(Ie),Ze=t(3727),Ue=t.n(Ze);a.Z.config.productionTip=!1,a.Z.use(Ne()),a.Z.use(Ue()),new a.Z({router:Fe,render:e=>e(p)}).$mount("#app")},8215:function(e,o,t){e.exports=t.p+"img/bars-solid.a00fe2a7.svg"},5207:function(e,o,t){e.exports=t.p+"img/pokeball.b6b21a19.svg"},9653:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAuCAYAAABTTPsKAAAABHNCSVQICAgIfAhkiAAAAsVJREFUWEftmTFSAzEMRdkeDgAHgB7ogZ7Qk/RATQ5A0hN6oIce0hN6OEByADgA9OH/HSfjdeSs7PWGgVnPeGCMbb2VZUkW2VrCNp1O97DdJfoO+hj9PsuyUUIRa1mqzQDbwl5Xwn59QD+nkpMEeAnsjDMZdGVgBWxS6ErAgN0GzYNw3EOMHQvj5zCP9yrmEQ0M2A0IfkLnT7vlx+/R/BcmdvD3j1joKsDULDVstyFgerMBQHfx+6kzh97jAvMIH9yigAFyBknsdpsAou0SYO4AYwfO+CPmcjy4BQN77PYbkluS1ozp3AqnEWXPMcCSKbQBO/Gpy/ORY6zphKo4CNhzke4g+K5MMNbSXBgF7aZaay9QA3u8widgGeFUDXvww3atybx4JyEXMARYumhBdmhyDdpztJZVwB7tvkIzdFtBDXv1sMAOKkFa1gIzC3M1Q39K78Ag8IlOV7XgW83H0hdvom+hr6Mzm7Ob+qS0wL4QbAsVb71gt9KJpAWmBAiW3FlBODS879Jg3VuJzYgBx7dGpWEDzOO8RnfD8XzvCGD67t4yH+6Cq4FnC6ExgtMeaYcFv6oEvsE62j9dYnASFAxsf7F73BpgaU6JyRTNLmRymX02wII2M2OTtEUm4oOQC1C3SZikicGJ/p15x4TADAgMDGxfGDzSmskKgF+MIomU+3kCu35yaaq4qksnpaS8IxKwOurUqWEpUWqAU7q1RsO8fH/ehukrBZdYKAdoQ/NKTELjv38b2H1UljGrc9+6NMzcmNB89pQ1Pqe60LCqGFgLsLl4zI/5qFx4bVhfwGjKups6/60NuEytsX9vgGM1p13XaFirqdh5/1rDLJiMYjWTcN0h9ipU9Gf5sFTSTyg32VZ58ZEvDqnQl0xKwo3yl1BeSPFU1hPKqrxVH7D5v3/nlR/z3GdZ1C2FVpZWYQOG8ge79PADcYDrPoi/XL4AAAAASUVORK5CYII="},9910:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAjCAYAAACHIWrsAAAABHNCSVQICAgIfAhkiAAAAqFJREFUSEvtlruLGlEUxp0ZFCw0G8EHgoWNlib+CSkCeSxCys1uE0PIA/wLrALp7PKw2mCSTbnNYkKKlFsKQlJYCHYiisSAja9ozhnmyNk7d8a5s7BFyILce90785vvO989jha44j/tinmB/0Anx92c2biVSdVScT9fiyApWAXI9+Jc63Q6e/l8/hTme/1+/1Ymk/kNcw6yQb0Cad92bLVa14vF4ndN0wpo4WazOdN1/YEFJJAvIIeZyvCzWq2ODcM4onrNZrPH4XD4AwNKobsUymD6YrE4DgaDhwSbTqdPotHoR1ivLSCNpngeIjegJ9hkMnkai8UQhjdGEH2UFW7ts2y0KRuPx8/i8fiJAOIqPSvk6nS4ygYbjUbPk8nkZ6bsj1+FopUIe89r1u127+dyuXOJjb4sJSAqw7kBkR/CeA39WS6X56FQaN8KAgFk6rCGno4Frx1CDTjgN+GAf4MzF0XQfD7/UqvVXlSr1QksCUYjhcdWP/xCllICmrVDII7tdvtGoVD4SlA4hz/r9frdSqXCoa4JVQEi1Oj1evvZbPYTnav1ev2j0WjcKZfLvyylpE6p03BLTXWWSnMOPfNhOp1+w6HNZvN2qVRCpZdSiGBuK8E1FygqpXOoFBqy+0IdLaWmA4PB4CCVSr0lpZDeE0jvIwFoC45TaAjIVW4DRGEbDocHiUTiHW6G5v0KmvdLBkSlnoA8TASkEW3l3wXA3nuRSCQDzfu1FRzRUl/Nm5oAWUzrbXZYYHwDua1iMxCBFBCeUiVL6cmlP76WrfQQVCcO5Qn1bKkMKlPNg0EgPtJ9zHHXL74I5UDxet5dlDrNhScSFuLLlGyvI0xFIb+xF1ccX4a9XOykWHat61u3X4Vulu/832UU7ry5bMO/D/wLAjocMzeywV8AAAAASUVORK5CYII="}},o={};function t(a){var n=o[a];if(void 0!==n)return n.exports;var i=o[a]={exports:{}};return e[a].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(o,a,n,i){if(!a){var s=1/0;for(p=0;p<e.length;p++){a=e[p][0],n=e[p][1],i=e[p][2];for(var r=!0,c=0;c<a.length;c++)(!1&i||s>=i)&&Object.keys(t.O).every((function(e){return t.O[e](a[c])}))?a.splice(c--,1):(r=!1,i<s&&(s=i));if(r){e.splice(p--,1);var l=n();void 0!==l&&(o=l)}}return o}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[a,n,i]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var a in o)t.o(o,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:o[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){t.p="/PruebaPokemon/"}(),function(){var e={143:0};t.O.j=function(o){return 0===e[o]};var o=function(o,a){var n,i,s=a[0],r=a[1],c=a[2],l=0;if(s.some((function(o){return 0!==e[o]}))){for(n in r)t.o(r,n)&&(t.m[n]=r[n]);if(c)var p=c(t)}for(o&&o(a);l<s.length;l++)i=s[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(p)},a=self["webpackChunkprueba_pokemon"]=self["webpackChunkprueba_pokemon"]||[];a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(6744)}));a=t.O(a)})();
//# sourceMappingURL=app.e02ec016.js.map