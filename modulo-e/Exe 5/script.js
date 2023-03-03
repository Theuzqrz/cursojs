function contar() {
    let ini = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let passo = document.querySelector('#txtp')
    let res = document.querySelector('#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = "Impossível contar!"
       // window.alert('ERROOOU!! faltam dados /caralhooooooooo!')
    } else {
        res.innerHTML = 'Contando: <br>'
        document.body.style.background = 'green';
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('passo invalído. Considerando passo 1!')
        }
        if (i < f) {
            //cont crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} `
            }
        } else {
            //cont regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    } 
}