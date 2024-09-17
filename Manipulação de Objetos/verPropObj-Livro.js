/* Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto. */

const livro ={
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899,
    genero: "Romance"
}

let cont = '1';
let editoraNew = true;

for (let verifica in livro){       
    console.log(`${cont}) ${verifica}: ${livro[verifica]} `)
    cont++
    if (!livro.editora) {
        editoraNew = false;
    }
    
}

if (!editoraNew) {
    livro.editora = "FTD";
    console.log(`${cont}) editora: ${livro.editora}`)
}

