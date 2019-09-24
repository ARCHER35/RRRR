// TAREA: HACER UNA CLASE QUE SE LLAME 
//"Auto" el cual reciba como parametros (ruedas, color, puertas, marca, modelo)
export class Auto {
    color: string;
    marca: string;
    modelo: string;
    puertas: number;
    ruedas: number;
    constructor(color,marca,modelo,puertas,ruedas) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.puertas = puertas;
        this.ruedas =ruedas;
    }
}
let coche: Auto = new Auto("Azul","Toyota","Marino",5,4);
console.log(coche);
