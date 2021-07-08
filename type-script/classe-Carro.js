"use strict";
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, vMaxima) {
        if (vMaxima === void 0) { vMaxima = 220; }
        this.marca = marca;
        this.modelo = modelo;
        this.vMaxima = vMaxima;
        this.velocidadeAtual = 0;
    }
    Carro.prototype.acelerar = function () {
        var aceleracao = 5;
        this.velocidadeAtual += aceleracao;
    };
    return Carro;
}());
var prisma = new Carro('Fiat', 'Punto', 250);
prisma.acelerar();
prisma.acelerar();
prisma.acelerar();
prisma.acelerar();
prisma.acelerar();
prisma.acelerar();
console.log(prisma.velocidadeAtual);
