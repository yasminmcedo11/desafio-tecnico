let frase = (String(prompt("Digite a frase que deseja analisar: "))).toLowerCase()
let fraseDividida = frase.split(" ").join("")
let fraseInvertida = fraseDividida.split("").reverse().join("")
if (fraseDividida == fraseInvertida) {
    console.log("É palíndromo!")
} else {
    console.log("Não é palíndromo!")
}