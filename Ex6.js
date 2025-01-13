let numero = Number(prompt("Digite a quantidade de números da sequência de Fibonacci que deseja saber: "))
let contador = 0
while (contador < numero) {
    console.log(fibonacci(contador))
    contador++
}
function fibonacci(n) {
    if (n == 0) {
        return 0
    } else if (n == 1) {
        return 1
    } 
    return fibonacci(n-1) + fibonacci(n-2)
     
}