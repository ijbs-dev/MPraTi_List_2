/* Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console. */

const pessoas = [
    { nome: "Carlos", idade: 30, sexo: "M", cidade: "São Paulo", estado: "SP" },
    { nome: "Ana", idade: 25, sexo: "F", cidade: "Rio de Janeiro", estado: "RJ" },
    { nome: "Pedro", idade: 40, sexo: "M", cidade: "Belo Horizonte", estado: "MG" },
    { nome: "Maria", idade: 35, sexo: "F", cidade: "Curitiba", estado: "PR" }
];

let i = 0;

for (const pessoa of pessoas) {
    console.log(`${i}) Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Sexo: ${pessoa.sexo}, Cidade: ${pessoa.cidade}, Estado: ${pessoa.estado} `);
    i++
}
