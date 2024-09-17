/* Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho. */

const carrinhos = [
    {
        itens: [
            {nome: "Notebook", quantidade: 1, precoUnitario: 5200.00},
            {nome: "Smartphone", quantidade: 2, precoUnitario: 1500.99},
            {nome: "Cadeira Gamer", quantidade: 1, precoUnitario: 900.75},
            {nome: "Monitor", quantidade: 2, precoUnitario: 800.00},
            {nome: "Teclado Mecânico", quantidade: 1, precoUnitario: 400.50},
            {nome: "Mouse Gamer", quantidade: 3, precoUnitario: 300.00},
            {nome: "Fone de Ouvido", quantidade: 4, precoUnitario: 200.00},
            {nome: "Tablet", quantidade: 1, precoUnitario: 1200.49},
            {nome: "Impressora", quantidade: 1, precoUnitario: 1000.25},
            {nome: "SSD 500GB", quantidade: 2, precoUnitario: 350.00},
            {nome: "HD Externo 1TB", quantidade: 1, precoUnitario: 500.00},
            {nome: "Placa de Vídeo", quantidade: 1, precoUnitario: 2500.00},
            {nome: "Fonte 600W", quantidade: 1, precoUnitario: 400.00},
            {nome: "Headset Gamer", quantidade: 2, precoUnitario: 350.00},
            {nome: "Cabo HDMI", quantidade: 3, precoUnitario: 50.00},
            {nome: "Carregador Universal", quantidade: 1, precoUnitario: 150.00},
            {nome: "Pen Drive 64GB", quantidade: 5, precoUnitario: 80.00}
        ]
    }
];

let valTotalCarrinho = 0;
let i = 1;

carrinhos.forEach(carrinho => {
    console.log("Carrinho de Compras:");

    carrinho.itens.forEach(item => {
        const itemProduto = item.quantidade * item.precoUnitario;
        valTotalCarrinho = valTotalCarrinho + itemProduto; 
    
        console.log(`${i}) Nome(${item.nome}) => Valor (R$${item.precoUnitario}) x Num items (${item.quantidade}) = Valor (R$${itemProduto.toFixed(2)})`)
        i++
    });
});

console.log(`\nValor Total do Carrinho: R$${valTotalCarrinho}`)