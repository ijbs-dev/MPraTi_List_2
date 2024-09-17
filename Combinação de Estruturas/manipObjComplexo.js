/* Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence. */

const empresa = {
    departamentos: [
        {
            nome: "Recursos Humanos",
            funcionarios: ["Alice", "Bruno", "Carla"]
        },
        {
            nome: "Desenvolvimento",
            funcionarios: ["Daniel", "Eduardo", "Fernanda"]
        },
        {
            nome: "Marketing",
            funcionarios: ["Gabriela", "Henrique", "Isabela"]
        },
        {
            nome: "Vendas",
            funcionarios: ["João", "Karla", "Lucas"]
        }
    ]
};

for (let i in empresa.departamentos) {
    const departamento = empresa.departamentos[i];

    for (const funcionario of departamento.funcionarios) {
        console.log(`Departamento: ${departamento.nome}, Funcionário: ${funcionario}`);
    }
}

