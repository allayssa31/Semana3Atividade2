// declara uma constante chamada 'letras' que armazena uma matriz (array de arrays)
// cada subarray contém letras individuais
// sintaxe: uso de 'const' para criar uma variável constante
// semântica: representa conjuntos de letras que serão analisados
const letras = [
  ['a', 'b', 'c'],
  ['c', 'd', 'f'],
  ['d', 'f', 'g'],
];

// declara uma variável chamada 'resultado' que vai receber o resultado do processamento
// primeiro, o método flat() "achata" a matriz, transformando em um só array
// sintaxe: letras.flat() cria ['a','b','c','c','d','f','d','f','g']
// semântica: simplifica a estrutura para facilitar a contagem das letras
let resultado = letras
  .flat()

  // reduce percorre cada elemento do array e acumula resultados em um único objeto
  // sintaxe: reduce((acumulador, elementoAtual) => { ... }, valorInicial)
  // aqui, 'objeto' é o acumulador e 'letra' é cada elemento do array
  // semântica: vamos construir um objeto que conta quantas vezes cada letra aparece
  .reduce((objeto, letra) => {

    // verifica se a letra já existe como chave no objeto
    // sintaxe: objeto[letra] acessa agilmente a propriedade do objeto
    // semântica: se a letra já foi contada antes, incrementa o valor
    if (objeto[letra]) {
      objeto[letra] += 1; // Incrementa a contagem da letra existente
    } else {
      // caso a letra ainda não tenha sido registrada, cria a chave e inicia com 1
      objeto[letra] = 1;
    }

    // retorna o objeto atualizado para a próxima iteração do reduce
    return objeto;
  }, {}); // Valor inicial do acumulador: objeto vazio {}



console.log(resultado);
// exibe no console o objeto 'resultado', mostrando cada letra da matriz e quantas vezes ela apareceu

  