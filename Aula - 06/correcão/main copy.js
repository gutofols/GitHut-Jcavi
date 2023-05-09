let carros = [];

//Validar se placa tem 8 "mev-1234"
//Validar se carros apartir de 2018
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

// Pesquise carro por Placa
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


//pesquisarCarrosAno: 
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
} else if(acao == "2") {
pesquisarCarro()
}
}

executarMenu()