import 'regenerator-runtime/runtime';
import 'core-js/stable';

import './css/style.css';

class Carro {
    constructor(modelo, cor) {
        this.modelo = modelo;
        this.cor = cor;
    }


    static trocaCor(color) {
        this.cor = color;
    }
}