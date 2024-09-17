/* Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades. */

const estoques = [
    {produto: "Notebook", quantidade: 12, minimo: 5},
    {produto: "Smartphone", quantidade: 8, minimo: 10},  
    {produto: "TV 4K", quantidade: 2, minimo: 3},        
    {produto: "Cadeira Gamer", quantidade: 15, minimo: 7},
    {produto: "Fone de Ouvido", quantidade: 50, minimo: 20},
    {produto: "Tablet", quantidade: 3, minimo: 5},       
    {produto: "Monitor", quantidade: 20, minimo: 6},
    {produto: "Teclado Mecânico", quantidade: 30, minimo: 10},
    {produto: "Mouse Gamer", quantidade: 40, minimo: 15},
    {produto: "Impressora", quantidade: 2, minimo: 3},   
    {produto: "SSD 500GB", quantidade: 35, minimo: 10},
    {produto: "HD Externo 1TB", quantidade: 22, minimo: 5},
    {produto: "Placa de Vídeo", quantidade: 1, minimo: 2},
    {produto: "Fonte 600W", quantidade: 14, minimo: 5},
    {produto: "Headset Gamer", quantidade: 28, minimo: 10}
];

let atualizarQuant = {};

estoques.forEach(estoque => {
    const quant = estoque.quantidade
    const min = estoque.minimo

    if(quant < min){
        atualizarQuant[estoque] = quant * 2;
        console.log(`Produto: (${estoque.produto}) => Quantidade (${estoque.quantidade}) < Minimo (${estoque.minimo}) = Valor Duplicado (${atualizarQuant[estoque]})`)
    }
});