// cria uma constante 'estudantes' que guarda uma lista de objetos
// sintaxe: 'const' define uma variável que não pode ser trocada
// semântica: cada objeto representa um estudante, com seu nome e suas notas
const estudantes = [
 { nome: 'Alice', notas: [100, 60, 92] },
 { nome: 'João', notas: [75, 30, 85] },
 { nome: 'Charles', notas: [90, 95, 85] },
 { nome: 'Paulo', notas: [100, 100, 100] },
];

// cria um novo array 'estudantesMedias' usando map()
// sintaxe: 'map()' percorre cada estudante e cria um novo array com o que for retornado
// semântica: para cada estudante, vamos calcular a média das notas e criar um objeto com nome e média
const estudantesMedias = estudantes.map((estudante) => {
    
 // calcula a soma das notas do estudante usando reduce()
 // sintaxe: reduce() percorre o array de notas e acumula a soma
 // semântica: somamos todas as notas para depois calcular a média
 const total = estudante.notas.reduce((soma, nota) => soma + nota);

 // pega apenas o nome do estudante
 // sintaxe: desestruturação do objeto para criar a variável 'nome'
 // semântica: queremos usar o nome no novo objeto final
 let {nome} = estudante;

 // retorna um objeto com o nome e a média das notas
 // sintaxe: retorna um objeto literal { nome, media: ... }
 // semântica: dividimos a soma das notas pelo número de notas para calcular a média
 return { nome, media: total / estudante.notas.length };
});

// filtra os estudantes que têm média maior que 90 
// sintaxe: filter() percorre cada estudante e mantém apenas os que passam na condição
// semântica: seleciona apenas os estudantes com média alta, acima de 90
const melhoresMedias = estudantesMedias.filter(
 (student) => student.media > 90,
);
