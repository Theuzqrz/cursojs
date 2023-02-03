

function contar(){
    let ini = document.querySelector('input#number1')
    let fim = document.querySelector('input#number2')
    let passo = document.querySelector('input#passo')
    let cont = document.querySelector('div#cont')


    if(ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght){
        cont.innerHTML = 'Impossível contar!'
       // window.alert('ERROOOU!! faltam dados caralhooooooooo!')
    } else {
        cont.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inválido! considerando passo 1')
            p = 1
        }
        if(i < f) {
            //contagem crescente
            for(let c = i; c <= f; c += p) {
            }
        } else {
            //contagem regressiva
            for(let c = i; c => f; c -= p) {
            }
            cont.innerHTML += ` ${c}`
        }
    }
}