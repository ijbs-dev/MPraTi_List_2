/* Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço. */

const produtos = [
    {nome: "Notebook", precoR$: 5200.98, descontoR$: 0},
    {nome: "Camisa", precoR$: 310, descontoR$: 0},
    {nome: "Tenis", precoR$: 487.05, descontoR$: 0},
    {nome: "Bike", precoR$: 2450, descontoR$: 0}
]

produtos.forEach(produto => {

    const valorOriginal = produto.precoR$
    const desconto = produto.precoR$ * 0.10;
    produto.precoR$ = produto.precoR$ - desconto;
    produto.descontoR$ = desconto; // Atualizando o campo desconto

    console.log(`${produto.nome} => Preço Original (${valorOriginal}) - Desconto (${produto.descontoR$}) = Valor Final (${produto.precoR$.toFixed(2)})`)
});
