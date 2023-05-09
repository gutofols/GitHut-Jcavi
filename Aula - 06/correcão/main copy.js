//String
//Numeber
//Array
//Boolean

//Object


// let carro = {
//     marca: 'vw',
//     ano: 2020,
//     cor: 'vermelho'
// }
// carro.ano = 2019
// alert(carro)


let carros = [];

//Validar se placa tem 8 "mev-1234"
//Validar se carros apartir de 2018
function cadastrarCarro() {
    let placa = prompt('Digite a placa')
    let cor = prompt('Digite a cor')
    let ano = prompt('Digite a ano')

    debugger
    let carro = {
        placa,
        cor: cor,
        ano: ano,
    }
    
    let msgErro = validarCarro(carro)
    if(msgErro == '') {
        carros.push(carro)
    } else {
        alert(msgErro)
    }
    
    executarMenu()
}

function validarCarro(carro) {
    debugger
    let msg = ''
    if(carro.placa.length != 8) {
        msg += 'Placa deve ter 8 dígitos'
    }
    return msg
}

//
function pesquisarCarro() {
    let placaPesquisa = prompt('Digite a placa de pesquisa!')
    
    for (let i = 0; i < carros.length; i++) {
       let carro = carros[i]
        if(placaPesquisa == carro.placa) {
            alert(`
                Placa: ${carro.placa}
                Cor: ${carro.cor}
                Ano: ${carro.ano}
            `)
            executarMenu()
        }
    }
    alert('Carro não encontrado!')
    executarMenu()
}

function pesquisarCarrosAno() { 
    let ano = prompt('Digite o ano de pesquisa!')
    let msg = ''

    for (let i = 0; i < carros.length; i++) {
        const carro = carros[i];
        if(carro.ano == ano) {
            msg += `Placa: ${carro.placa}/Cor: ${carro.cor}/Ano: ${carro.ano} \r\n`
        }
    }

    alert(msg)
    executarMenu()
}

function executarMenu() {
    let acao = prompt(`
        (1) Cadastrar automóvel
        (2) Pesquisar automóvel
        (3) Pesquisar carros por ano 
        (4) Excluir
        (5) Atualizar
        (6) Sair
    `)

    if(acao == "1") {
        cadastrarCarro()
    } else if(acao == "2") {
        pesquisarCarro()
    } else if(acao == "3") {
        pesquisarCarrosAno()
    }
}

executarMenu()
