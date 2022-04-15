export default class Pokemon{

    //-----------------------------------------
    // Constructor
    //-----------------------------------------

    /**
     * Inicializa un pokemon con valores predeterminados
     * @param {*} pId 
     * @param {*} pNombre 
     * @param {*} pColor 
     * @param {*} pImagen 
     * @param {*} pDescripcion 
     * @param {*} pCategoria 
     * @param {*} pAltura 
     * @param {*} pPeso 
     * @param {*} pHabilidad 
     * @param {*} pTipos 
     * @param {*} pDebilidades 
     */
    constructor(pId, pNombre, pColor, pImagen, pDescripcion,pCategoria, pAltura, pPeso, pHabilidad, pTipos , pDebilidades ){
        this.id = pId;
        this.nombre = pNombre;
        this.color = pColor;
        this.imagen = pImagen;
        this.descripcion = pDescripcion;
        this.categoria = pCategoria;
        this.altura = pAltura,
        this.peso = pPeso; 
        this.habilidad = pHabilidad;
        this.tipos = pTipos;
        this.debilidades = pDebilidades;
    }   

    //-----------------------------------
    // Metodos
    //-----------------------------------

    /**
     * Metodo que retorna toda la informacion del pokemon 
     * en un string separado por comas
     * @returns Retorna un string con toda la informacion 
     */
    toString(){
        const separador = ",";

        let info = this.id+separador+this.nombre+separador+this.color+separador+
            this.imagen+separador+this.descripcion+separador+ this.categoria+ separador+
            this.altura+separador+this.peso+separador+this.habilidad+separador;

        return info;
    }
}