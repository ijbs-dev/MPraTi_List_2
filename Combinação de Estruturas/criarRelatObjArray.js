/* Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos. */

const vendas = [
    {produto: "Notebook", quantidade: 2, valorR$: 5200.00},
    {produto: "Smartphone", quantidade: 5, valorR$: 1500.99},  
    {produto: "TV 4K", quantidade: 3, valorR$: 3200.00},
    {produto: "Cadeira Gamer", quantidade: 4, valorR$: 900.75}, 
    {produto: "Fone de Ouvido", quantidade: 10, valorR$: 200.00},
    {produto: "Tablet", quantidade: 6, valorR$: 1200.49},       
    {produto: "Monitor", quantidade: 7, valorR$: 800.00},
    {produto: "Teclado Mecânico", quantidade: 8, valorR$: 400.50}, 
    {produto: "Mouse Gamer", quantidade: 12, valorR$: 300.00},
    {produto: "Impressora", quantidade: 3, valorR$: 1000.25}    
];

let valTotalVendas = 0;
let i = 0;

vendas.forEach(venda => {    
    const vendaProduto = venda.quantidade * venda.valorR$;
    valTotalVendas = valTotalVendas + vendaProduto; 

    console.log(`${i}) Produto(${venda.produto}) => Valor (R$${venda.valorR$}) x Num Vendas (${venda.quantidade}) = Valor (R$${vendaProduto.toFixed(2)})`)
    i++
});

console.log(`\nValor Total das Vendas: R$${valTotalVendas}`)