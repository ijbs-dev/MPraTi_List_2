/* Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente. */

const pedidos = [
    {cliente: "João Silva", produto: "Notebook", quantidade: 1},
    {cliente: "Ana Costa", produto: "Smartphone", quantidade: 2},
    {cliente: "Carlos Pereira", produto: "Notebook", quantidade: 1},
    {cliente: "João Silva", produto: "Teclado Mecânico", quantidade: 1},
    {cliente: "Ana Costa", produto: "Monitor", quantidade: 1},
    {cliente: "Bruno Lima", produto: "Mouse Gamer", quantidade: 3},
    {cliente: "Carlos Pereira", produto: "Impressora", quantidade: 1},
    {cliente: "Maria Souza", produto: "Smartphone", quantidade: 2},
    {cliente: "Fernanda Alves", produto: "Teclado Mecânico", quantidade: 2},
    {cliente: "Paulo Mendes", produto: "Notebook", quantidade: 1},
    {cliente: "Ana Costa", produto: "Mouse Gamer", quantidade: 1},
    {cliente: "João Silva", produto: "Monitor", quantidade: 2},
    {cliente: "Bruno Lima", produto: "Teclado Mecânico", quantidade: 1},
    {cliente: "Fernanda Alves", produto: "Impressora", quantidade: 1},
    {cliente: "Maria Souza", produto: "Notebook", quantidade: 1},
    {cliente: "Paulo Mendes", produto: "Monitor", quantidade: 1},
    {cliente: "Carlos Pereira", produto: "Mouse Gamer", quantidade: 2},
    {cliente: "Ana Costa", produto: "Notebook", quantidade: 1},
    {cliente: "Bruno Lima", produto: "Smartphone", quantidade: 2},
    {cliente: "Fernanda Alves", produto: "Monitor", quantidade: 1}
];

totalProdClientes = {};

pedidos.forEach(pedido => {
    
    const cliente = pedido.cliente;
    const quant = pedido.quantidade;
    
    if (totalProdClientes[cliente]){
        totalProdClientes[cliente] += quant;
    } else{
        totalProdClientes[cliente] = quant;
    }
});

console.log("Quantidade total de produtos por cliente:");
for (const cliente in totalProdClientes) {
    console.log(`${cliente}: ${totalProdClientes[cliente]} produtos`);
}