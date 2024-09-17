/* Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média. */

const alunos = [
    {nome: "Ismael", nota1: 8, nota2: 10},
    {nome: "Renata", nota1: 4, nota2: 7},
    {nome: "Carla", nota1: 7, nota2: 7},
    {nome: "Rafael", nota1: 4, nota2: 3}
];

for (const aluno of alunos){
    const soma = aluno.nota1 + aluno.nota2;
    const media = soma / 2;
    console.log(`O aluno(a) ${aluno.nome} tem as notas ${aluno.nota1} e ${aluno.nota2}, logo sua média será ${media}`);
}