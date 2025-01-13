let anoAtual = Number(prompt("Digite o ano atual: "))
let anosDeNascimento = [1960, 1985, 2008, 2005, 2012, 2002, 2006, 1998]
let idades = verificarIdades(anosDeNascimento, anoAtual)
imprimirDados(idades)

function verificarIdades(anosDeNascimento, anoAtual) {
    let idades = []
    anosDeNascimento.forEach(numero => {
        let idade = anoAtual - numero
        idades.push(idade)
    })
    return idades
}

function imprimirDados(idades) {
    idades.forEach((numero, indice) => {
        if (numero < 18) {
            console.log(`Pessoa ${indice}: Menor de Idade`)
        }
        else {
            console.log(`Pessoa ${indice}: Maior de Idade`)
        }
    })
}