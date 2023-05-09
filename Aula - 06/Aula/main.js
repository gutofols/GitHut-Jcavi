// String
// Number
// Array
// Boolean

// Object Usa Chaves {} para descrever seu interior

// =================================================================

// let carro = {
//     marca: 'vw',
//     ano: 2020,
//     cor: 'Branco',
//     ativo: true,
// }
// carro.modelo = "Gol"
// alert(carro.modelo)

// =================================================================

let carros = [];
executarMenu()

    // Temos que validar se a Placa está de acordo com as regras de transito brasileiro:
    // LLL-9999
    // Na minha loja, Somente carros mais novos que 2018


// =================================================================================
  // Cadastrar carro:
    function cadastrarCarro() {
        let placa = prompt('Digite a placa')
        let cor = prompt('Digite a cor')
        let ano = prompt('Digite a ano')
        
            let carro = {
                placa,
                cor: cor,
                ano: ano,
            }
        carros.push(carro)
    executarMenu()
}

// =================================================================================
  // Busca carro por placa:
function buscarCarro() {
    let placaPesquisa = prompt('Digite a placa para pesquisa: ')
    for (let i = 0; i < carros.length; i++) {
        let carro = carros[i];
        
        if(placaPesquisa == carro.placa){
            alert(`
                Placa: ${carro.placa}
                Cor: ${carro.cor}
                Ano: ${carro.ano}
            `)
        executarMenu()
        }
    }
    alert("Carro não encontrado:")
    executarMenu()
}


// =================================================================================
  // Buscar carro por Ano:

  function buscarAno() {
    let placaPesquisa = prompt('Digite o ano para pesquisa: ')
    for (let i = 0; i < carros.length; i++) {
        let carro = carros[i];
        
        if(placaPesquisa == carro.ano){
            alert(`
                Placa: ${carro.placa}
                Cor: ${carro.cor}
                Ano: ${carro.ano}
            `)
        executarMenu()
        }
    }
    alert("Carro não encontrado:")
    executarMenu()
}


// =================================================================================
  // Executar o MENU INICIAL
    function executarMenu() {
        let acao = prompt(`
        (1) Cadastrar Automóvel
        (2) Pesquisar
        (3) Sair
        `)

        if(acao == "1"){
            cadastrarCarro()
        } else if(acao == "2"){
            oQueBuscar()
        } else if (acao == "3"){
        
        }
}

// =================================================================================
  // Executa o Menu de busca
    function oQueBuscar(){
        let oqb = prompt(`
            (1) Buscar por placa
            (2) Buscar por ano
            (3) Sair
        `)
        if(oqb == "1"){
            buscarCarro()
        } else if(oqb == "2"){
            buscarAno()
        } else if (oqb == "3"){
            executarMenu()
        }
    }