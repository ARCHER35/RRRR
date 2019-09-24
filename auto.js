"use strict";
exports.__esModule = true;
// TAREA: HACER UNA CLASE QUE SE LLAME 
//"Auto" el cual reciba como parametros (ruedas, color, puertas, marca, modelo)
var Auto = /** @class */ (function () {
    function Auto(color, marca, modelo, puertas, ruedas) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.puertas = puertas;
        this.ruedas = ruedas;
    }
    return Auto;
}());
exports.Auto = Auto;
var coche = new Auto("Azul", "Toyota", "Marino", 5, 4);
console.log(coche);
