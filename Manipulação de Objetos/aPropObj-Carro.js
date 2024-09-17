/* Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console.
 */

const carro ={
    marca: "Fiat Uno Way 1.0",
    modelo: "Fiat",
    ano: 2013,
    cor: "azul"
}

let cont = 1;

for (let propriedades in carro){    
    console.log(`${cont}) ${propriedades}: ${carro[propriedades]}`)
    cont++
}

