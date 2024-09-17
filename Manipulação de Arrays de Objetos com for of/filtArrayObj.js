/* Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico. */

const funcionarios = [
    {nome: "Carlos", cargo: "Analista de Dados", salarioR$: 5000},
    {nome: "Isaque", cargo: "FullStack Javascript", salarioR$: 6800},
    {nome: "Renata", cargo: "Administradora", salarioR$: 4900},
    {nome: "Fabiana", cargo: "Gerente de Projetos", salarioR$: 7400},
]

function filtrarArray (funcionarios, valorMinimo){
    
    const funcFiltrados = [];

    for (funcionario of funcionarios){
        if(typeof funcionario.salarioR$ === "number" && funcionario.salarioR$ >= valorMinimo){
            funcFiltrados.push(funcionario);
        }
    }

    return funcFiltrados;
}

const query = filtrarArray(funcionarios, 6800)
console.log(query) 