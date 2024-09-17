/* ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades. */

const produto = {
    nome: "Impressora",
    marca: "Hp",
    ano: "2020",
    valorR$: 2100
};

function filtrandoProp(obj, valorMinimo){

    const novoObjeto = {};

    for(let propriedade in obj){
        const valor = obj[propriedade];
        if (typeof valor === 'number' && valor > valorMinimo){
            
            novoObjeto[propriedade] = valor; 
        }
    }

    return novoObjeto;
}

const consulta = filtrandoProp(produto,2000)
console.log(consulta)
