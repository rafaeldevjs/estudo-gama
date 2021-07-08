"use strict";
// boolean
var contaPaga = false;
// number
var idade = 23;
var avalicao = 5.1;
// string
var nome = "Rafael";
// array
var idades = [23, 28, 45];
var idades2 = [56, 45, 78]; // Usando a Interface de Array
// tuple
var jogadores;
jogadores = ["vitor", "fulano", "ciclano"];
var jogadores2;
jogadores2 = ["vitor", 5, false];
// enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
// any
var retornoDaApi = [123, "rafael", false];
var retornoDaApi2 = [{ id: 123, name: "rafael", valid: false }];
// void
function printNaTela(msg) {
    console.log(msg);
}
// null e undefined
var und = undefined;
var nu = null;
// object
function criar(objecto) { }
criar({ name: "vitor" });
// never
function loop() {
    while (true) { }
}
// union types
function exibirNota(nota) {
    console.log("nota e " + nota);
}
//exibirNota('10'); gera erro
// exibirNota(10);
var nota = 5;
function exibirNota2(nota) {
    console.log("nota e " + nota);
}
var funcionarios = [
    { nome: "vitor", sobrenome: "fulano", dataNascimento: new Date() },
];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionario: ', funcionario.nome);
    }
}
;
var cliente01 = { nome: 'rafael', sobrenome: 'silva', idade: 31 };
