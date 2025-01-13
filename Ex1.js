let a = Number(prompt("Digite o coeficiente A: "))
let b = Number(prompt("Digite o coeficiente B: "))
let c = Number(prompt("Digite o coeficiente C: "))
let x1, x2, x
let delta = b**2 - 4*a*c
if(delta > 0) {
    x1 = (-b + Math.sqrt(delta))/(2*a)
    x2 = (-b - Math.sqrt(delta))/(2*a)
    alert(`As raízes são ${x1} e ${x2}`)
} else if(delta == 0) { 
    x = (-b)/(2*a)
    alert(`A função possui raiz única, de valor ${x}`)
} else {
    alert("A função não possui raízes reais")
}