do {
    numero = entradaDados()
    resultado = calcularFatorial(numero)
    alert(`Fatorial = ${resultado}`)
    resposta = String(prompt("Deseja continuar?"))
} while (resposta == "s" || resposta == "S")

function calcularFatorial (numero) {
    let fatorial = 1
    for (let i = 1; i <= numero; i++){
        fatorial *= i
    }
    return fatorial
}

function entradaDados () {
    let numero
    do {
        numero = Number(prompt("Digite um número: "))
        if (!Number.isInteger(numero) || numero < 0) {
            alert("Erro: número inválido. Tente novamente.")
            numero = null
        }    
    } while (numero == null)
    return numero
}