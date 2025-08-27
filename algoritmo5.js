const a = [1, 2, 3, 4, 5];
const b = [6, 7, 8, 9, 10];

const somaA = a.reduce((somaParcial, valor) => somaParcial + valor, 0);

const somaB = b.reduce((somaParcial, valor) => somaParcial + valor, 0);

const somaTotal = somaA + somaB;
console.log("Soma total:", somaTotal);
