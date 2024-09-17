/* Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos. */

const clientes = [
    {nome: "João Silva", idade: 34, cidade: "São Paulo"},
    {nome: "Ana Costa", idade: 28, cidade: "Rio de Janeiro"},
    {nome: "Carlos Pereira", idade: 45, cidade: "Belo Horizonte"},
    {nome: "Maria Souza", idade: 52, cidade: "Curitiba"},
    {nome: "Bruno Lima", idade: 22, cidade: "Porto Alegre"},
    {nome: "Fernanda Alves", idade: 30, cidade: "Brasília"},
    {nome: "Paulo Mendes", idade: 40, cidade: "Salvador"}
];
let soma = 0;
clientes.forEach(cliente => {
    
    const maiorTrinta = cliente.idade    
    if(typeof maiorTrinta === 'number' && maiorTrinta > 30){
        soma += 1;
    }    
});

console.log(`Número de clientes com mais de 30 anos: ${soma}`);
