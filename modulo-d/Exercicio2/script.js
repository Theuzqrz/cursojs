function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('Erro! Digite um ano válido e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'img')

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 9){
                //criança
                img.setAttribute('src', 'criançaM.png')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'jovemM.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            } if (idade >= 0 && idade < 9){
                //criança
                img.setAttribute('src', 'criançaF.png')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'jovemF.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`
        res.appendChild(img)
    }
}