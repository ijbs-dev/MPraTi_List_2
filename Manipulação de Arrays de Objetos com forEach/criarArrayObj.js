/* Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes. */

const filmes = [
    {titulo: "Gladiador", diretor: "Ridley Scott", anoLancamento: 2000},
    {titulo: "O Senhor dos Anéis: A Sociedade do Anel", diretor: "Peter Jackson", anoLancamento: 2001},
    {titulo: "Forrest Gump", diretor: "Robert Zemeckis", anoLancamento: 1994},
    {titulo: "A Vida é Bela", diretor: "Roberto Benigni", anoLancamento: 1997},
    {titulo: "Cidade de Deus", diretor: "Fernando Meirelles", anoLancamento: 2002},
    {titulo: "Harry Potter e a Pedra Filosofal", diretor: "Chris Columbus", anoLancamento: 2001},
    {titulo: "Mad Max: Estrada da Fúria", diretor: "George Miller", anoLancamento: 2015}
];

console.log("O novo array como nome arrayTitulos, recebe apenas os titulos:\n")
let i = 0;

filmes.forEach(filme => {
    arrayTitulos = filme.titulo;
    console.log(`${i}) ${filme.titulo}`)
    i++;
});
