const data = require("./data");
const readline = require("readline-sync");

let opcao = '';
while (opcao.toLowerCase() !== 'x') {
    opcao = readline.question("Deseja buscar uma categoria ( S / N ) ou X para sair? ");
  switch (opcao.toLowerCase()) {
    case "s":
        selectCategory(data);
        opcao = 'x';
      break;
    case "n":
      console.table(data.sort((a, b) => a.pages - b.pages));
      break;
    case 'x':
        console.log('Obrigado!!!');
        break;
    default:
      console.log("Opcao invalida");
  }
}
function selectCategory(data){
    let selectBooks = null;
    console.log('Categorias: \n1-Psicologia \n 2-Historia \n 3-Literatura');
    const category = readline.question('Digite a categoria desejada: ')
    switch (category){
        case '1':
            selectBooks = data.filter(({categoria})=>categoria.toLowerCase() === 'psicologia' ); 
            console.table(selectBooks.sort((a,b)=>a.pages - b.pages));
            break;
        case '2':
            selectBooks = data.filter(({categoria})=>categoria.toLowerCase() === 'historia' ); 
            console.table(selectBooks.sort((a,b)=>a.pages - b.pages));
            break;
        case '3':
            selectBooks = data.filter(({categoria})=>categoria.toLowerCase() === 'literatura' ); 
            console.table(selectBooks.sort((a,b)=>a.pages - b.pages));
            break;
        default:
            console.log('Categoria nao disponivel!!!');
            selectCategory(data);
            break;
    }
}