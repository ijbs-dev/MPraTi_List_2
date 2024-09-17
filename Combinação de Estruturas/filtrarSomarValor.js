/* Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas. */

const transacoes = [
    { tipo: "entrada", valor: 1000.25 },
    { tipo: "saída", valor: 200.97 },
    { tipo: "entrada", valor: 500 },
    { tipo: "saída", valor: 150.45 },
    { tipo: "entrada", valor: 2000 },
    { tipo: "saída", valor: 700.64 }
];

let saldoFinal = 0;

transacoes.forEach(transacao => {
    if (transacao.tipo === "entrada") {
        saldoFinal += transacao.valor;  
    } else if (transacao.tipo === "saída") {
        saldoFinal -= transacao.valor;  
    }
});

console.log(`Saldo Final: R$ ${saldoFinal.toFixed(2)}`);
