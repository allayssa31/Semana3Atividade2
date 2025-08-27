// sintático: declaração de constante com array de objetos
// semântico: define os funcionários com nome, salário e departamento
const funcionarios = [
  { nome: 'João', salario: 30000, departamento: 'TI' },
  { nome: 'Janete', salario: 70000, departamento: 'RH' },
  { nome: 'Sofia', salario: 100000, departamento: 'RH' },
];

// sintático: reduce com arrow function (acumulador, itemAtual) e valor inicial {}
// semântico: agrupa os funcionários em um objeto por departamento
const funcionariosPorDepartamento = funcionarios.reduce(
  (acumulador, funcionario) => {
    // sintático: atribuição de variável a partir da propriedade do objeto
    // semântico: pega o departamento do funcionário atual
    const departamento = funcionario.departamento;

    // sintático: if verifica se a propriedade não existe no objeto
    // semântico: cria um array vazio para o departamento se ainda não existir
    if (!acumulador[departamento]) {
      acumulador[departamento] = [];
    }

    // sintático: push adiciona o elemento no array
    // semântico: adiciona o funcionário ao array do departamento
    acumulador[departamento].push(funcionario);

    // sintático: return retorna o objeto acumulador
    // semântico: mantém o objeto acumulador atualizado para a próxima iteração
    return acumulador;
  },
  {}, // sintático: valor inicial do reduce
  // semântico: começa com um objeto vazio
);

// sintático: Object.keys cria um array das chaves do objeto, map itera sobre elas
// semântico: calcula a média salarial para cada departamento
const mediasSalarioPorDepartamento = Object.keys(funcionariosPorDepartamento).map(
  (departamento) => {
    // sintático: reduce soma os salários do array de funcionários
    // semântico: calcula o total de salários do departamento
    const total = funcionariosPorDepartamento[departamento].reduce(
      (acumulador, funcionario) => acumulador + funcionario.salario,
      0, // valor inicial da soma
    );

    // sintático: return retorna um objeto com duas propriedades
    // semântico: cria um objeto com nome do departamento e média salarial
    return {
      departamento: departamento,
      media: total / funcionariosPorDepartamento[departamento].length,
    };
  },
);

// sintático: filter itera sobre o array e aplica uma condição booleana
// semântico: cria um novo array com departamentos cuja média salarial > 65.000
const maioresPagamentos = mediasSalarioPorDepartamento.filter(
  (departamento) => departamento.media > 65000,
);
