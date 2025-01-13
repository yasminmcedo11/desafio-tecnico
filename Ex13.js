let listaDeJogadores = []
let opcao

do {
    alert(`Menu Interativo \n
        Digite 1: Adicionar Jogador
        Digite 2: Buscar por Posição
        Digite 3: Listar Time
        Digite 4: Calcular Pontuação Média
        Digite 5: Sair`)
        opcao = Number(prompt("Digite a opção desejada: "))
        switch (opcao) {
            case 1: 
                let nome = String(prompt("Digite o nome: "))
                let idade = Number(prompt("Digite a idade: "))
                let posicao = String(prompt("Digite a posição: ")).toLowerCase()
                let pontuacao = Number(prompt("Digite a pontuação: "))
                adicionarJogador(listaDeJogadores, nome, idade, posicao, pontuacao)
                break
            case 2:
                let buscaPosicao = String(prompt("Digite a posição que deseja procurar: ")).toLowerCase()
                let listaPosicao = buscarPorPosicao(buscaPosicao, listaDeJogadores)
                if (listaPosicao.length == 0) {
                    alert("Não há jogadores dessa posição cadastrados")
                } else {
                    listaPosicao.forEach(numero => console.log(numero))  
                }
                break
            case 3:
                listarTime(listaDeJogadores)
                break
            case 4:
                let pontuacaoMedia = calcularPontuacaoMedia(listaDeJogadores) 
                console.log(pontuacaoMedia.toFixed(2))
                break
            case 5:
                alert("Fim do Programa")
                break
        }
} while (opcao != 5)


function adicionarJogador (listaDeJogadores, nome, idade, posicao, pontuacao) {
    let jogador = {}
    jogador.Nome = nome
    jogador.Idade = idade
    jogador.Posicao = posicao
    jogador.Pontuacao = pontuacao
    listaDeJogadores.push(jogador)
}

function buscarPorPosicao (posicao, listaDeJogadores) {
    let listaPosicao = []
    listaDeJogadores.forEach(numero => {
        if (numero.Posicao == posicao){
            listaPosicao.push(numero.Nome)
        } 
    })
    return listaPosicao
}

function listarTime (listaDeJogadores) {
    listaDeJogadores.forEach(numero => console.log(numero.Nome))
}

function calcularPontuacaoMedia (listaDeJogadores) {
    let totalPontuacao = listaDeJogadores.reduce((soma, item) => {
        return soma + item.Pontuacao
    }, 0)
    totalPontuacao = totalPontuacao/listaDeJogadores.length
    return totalPontuacao
}