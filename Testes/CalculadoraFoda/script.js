function clicar(){
    var n1 = document.querySelector('input#n1')
    var n2 = document.querySelector('input#n2')
    var resultado = document.querySelector('div#resultado')
    var nn1 = Number(n1.value)
    var nn2 = Number(n2.value)
    var s = nn1 + nn2
    resultado.innerHTML = `A soma de ${nn1} + ${nn2} é igual a ${s}.`
}