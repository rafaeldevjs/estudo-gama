class Carro{
    velocidadeAtual: number = 0;
    constructor(
        public marca: string,
        public modelo: string,
        private vMaxima: number = 220
    ){}
    acelerar(){
        const aceleracao = 5;
        this.velocidadeAtual += aceleracao;
    }
}
const prisma = new Carro('Fiat','Punto', 250);
prisma.acelerar();
prisma.acelerar();
prisma.acelerar();
prisma.acelerar();
prisma.acelerar();
prisma.acelerar();
console.log(prisma.velocidadeAtual);
