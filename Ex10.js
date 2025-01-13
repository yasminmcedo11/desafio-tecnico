let lista = ["Joao", "Rafael", "Yasmin", "Luisa", "Julia"]
let opcao
do {
    let listaExibicao = lista.map((cliente, index) => `${index + 1}° ${cliente}`).join(", ")
    alert(`Fila de Espera \n
        ${listaExibicao}
        Digite 1: Adicionar Novo Cliente 
        Digite 2: Atender Cliente
        Digite 3: Sair`)
    opcao = Number(prompt("Digite a opção que desejar: "))
    switch (opcao) {
        case 1:
            let nome = String(prompt("Digite o nome do cliente: "))
            lista.push(nome)
            break
        case 2:
            alert(`Cliente sendo atendido: ${lista[0]}`)
            lista.shift()
            break
        case 3:
            alert("Fim do Programa")
            break
    }
} while (opcao !== 3)

