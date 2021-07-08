// boolean
const contaPaga: boolean = false;

// number
const idade: number = 23;
const avalicao: number = 5.1;

// string
const nome: string = "Rafael";

// array
const idades: number[] = [23, 28, 45];
const idades2: Array<number> = [56, 45, 78]; // Usando a Interface de Array

// tuple
let jogadores: [string, string, string];
jogadores = ["vitor", "fulano", "ciclano"];

let jogadores2: [string, number, boolean];
jogadores2 = ["vitor", 5, false];

// enum
enum StatusAprovacao {
  Aprovado = "001",
  Pendente = "002",
  Rejeitado = "003",
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// any
const retornoDaApi = [123, "rafael", false];
const retornoDaApi2 = [{ id: 123, name: "rafael", valid: false }];

// void
function printNaTela(msg: string): void {
  console.log(msg);
}

// null e undefined
const und: undefined = undefined;
const nu: null = null;

// object
function criar(objecto: object) {}
criar({ name: "vitor" });

// never
function loop(): never {
  while (true) {}
}

// union types
function exibirNota(nota: number) {
  console.log("nota e " + nota);
}
//exibirNota('10'); gera erro
// exibirNota(10);
const nota: number | string = 5;
function exibirNota2(nota: number | string) {
  console.log("nota e " + nota);
}
// type alias
type Funcionarios = {
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
};
const funcionarios: Funcionarios[] = [
  { nome: "vitor", sobrenome: "fulano", dataNascimento: new Date() },
];
function tratarFuncionarios(funcionarios: Funcionarios[]){
    for(let funcionario of funcionarios){
        console.log('Nome do funcionario: ', funcionario.nome);
        
    }
}

interface Clientes{
    nome: string;
    sobrenome: string;
    idade: number;
};
const cliente01 : Clientes = {nome: 'rafael', sobrenome: 'silva', idade: 31}