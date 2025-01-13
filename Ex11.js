let qtd = Number(prompt("Digite a quantidade de números que deseja inserir: "))
let lista = []
let contador = 0
for (let i = 0; i < qtd; i++) {
    let numero = prompt("Digite o número: ")
    lista.push(numero)
}
for (let i = 0; i < qtd; i++) {
    if (lista[i] < lista[i+1]) {
        contador++
    }
}
console.log(contador)