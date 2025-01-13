function encontrarElementoUnico(lista) {
    let listaAnexa = []
    for (let i = 0; i < lista.length; i++) {
        if (listaAnexa.includes(lista[i])) {
            listaAnexa = listaAnexa.filter(element => element != lista[i])
        } else {
            listaAnexa.push(lista[i])
        }
    }
    return listaAnexa
}

lista = [2, 2, 5, 3, 3, 1, 1, 4, 4, 6, 5]
let valor = encontrarElementoUnico(lista)
console.log(valor[0])