        // Crie um programa de cadastro de uma biblioteca (utilizando array como base de dados ex: 
        // baseDeLivros: [ob1, obj2,]).  O programa deve implementar as funcionalidades descritas 
        // na figura abaixo:
       
        // (1) - Cadastrar;
        // (2) - Pesquisar;
        // (3) - Excluir;
        // (4) - Alterar; (desafio)
        // (5) - Filtrar livros por categoria (desafio)
        // (0) - Sair;

        // O cadastro dos livros deve solicitar  código, título, categoria. O programa deve respeitar as seguintes restrições:
        // ⦁ Não se pode cadastrar um livro com mesmo código;
        // ⦁ A pesquisa deve ser feita pelo código;
        // ⦁ A exclusão deve ser feita pelo código do livro;

        //Variáveis universais: 
        
        let livros = [];
        let livro = {};


menuInicial() // iniciamos nosso menu, e nosso sistema nesta linha.




// Função de Menu inicial: 
// =======================
function menuInicial(){
    let opt = prompt(`
    (1) Cadastrar
    (2) Pesquisar
    (3) Excluir
    (4) Alterar
    (5) Fillivros
    (0) Sair
`)

    if(opt == "1"){ // Cadastrar livro
        cadastraLivro()
    } else if (opt == "2"){ // PEsquisar livro
        pesquisaLivro()
    } else if (opt == "3"){ // Excluir
        excluirLivro()
    } else if (opt == "4"){ // Alterar
        alteraLivro()    
    } else if (opt == "5"){ // Filtrar livro por categoria
        filtrarLivro()        
    } else if (opt == "0"){ // Filtrar livro por categoria
        alert("Volte Sempre")
    } 

}
// -----------------------------------------------------------------


// Função de (1) Cadastrar Livros:  OK
// ====================================
    function cadastraLivro(){
        let codigo = prompt('Digite o código do livro: ')
        let titulo = prompt('Digite o título do livro: ')
        let categoria = prompt('Digite o categoria do livro: ')

        livro = {
            codigo: codigo,
            titulo: titulo,
            categoria: categoria,
        }
    livros.push(livro)
menuInicial()
}
// -----------------------------------------------------------------


// Função de (2) Pesquisar Livros: 
// ================================
function pesquisaLivro(){
    let codigoPesquisa = prompt('Digite o codigo do livro que quer procurar: ')
    for (let i = 0; i < livros.length; i++) {
        let livro = livros[i];
        
    if (codigoPesquisa == livro.codigo) {
        alert(`
            Codigo: ${livro.codigo}
            Título: ${livro.titulo}
            Categora ${livro.categoria}
        `)
        menuInicial()
        }
    }   
    alert("Livro não cadastrado!")
    menuInicial()     
}
// -----------------------------------------------------------------


// Função de (3) excluirLivro: OK      
// ===============================
    function excluirLivro(){
        let codigoPesquisa = parseInt(prompt('Digite o codigo do livro que quer excluir: '))
        for (let i = 0; i < livros.length; i++) {
            let livro = livros[i];
            
        if (codigoPesquisa == livro.codigo) {
            livros.splice(livro, 1)
            menuInicial
            }
        }   
        alert(`Não pode deletar o livro! ${i}`)
    menuInicial()
}        
// -----------------------------------------------------------------

// Função de (4) alteraLivro: 
// ================================================================= 
function alteraLivro(){

}        
// -----------------------------------------------------------------


// Função de (5) filtrarLivro:
// =================================================================
function filtrarLivro(){

}        
// -----------------------------------------------------------------




