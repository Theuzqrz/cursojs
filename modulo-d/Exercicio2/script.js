function verificar() { // função
    var data = new Date() //data atual
    var ano = data.getFullYear() //ano atual
    var fano = document.getElementById('txtano') // ano digitado pelo usuario
    var res = document.querySelector('div#res') // transformar res em variavel.
    if (fano.value.length == 0 || Number(fano.value) > ano ) { //Para uma string vazia, length é 0. Se o valor digitado pelo usuario(fano)transformado em number(Number) for maior que o ano atual.
        window.alert('Errou')
 
    } else {
        var fsex = document.getElementsByName('radsex') //existe a opção [0] e [1].
        var idade = ano - Number(fano.value) //ano atual menos ano digitado pelo usuario.
        var genero = '' // string vazia
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //igual criar no html  a tag <img id = "foto">.
 
        if (fsex[0].checked ) {
            genero = 'homen'
            if (idade >=0 && idade <15){
                img.setAttribute('src','criancaM.png')
                document.body.style.background=`#FF665A`
            } else if (idade < 19 ) {
                img.setAttribute('src','jovemM.png')
                document.body.style.background=`#705E78`
            } else if (idade < 50) {
                img.setAttribute('src','adulto.png') 
                document.body.style.background=`#FFF587`
            }else{
                img.setAttribute('src','idoso.png')
                document.body.style.background=`#A3A1A8`
            }
 
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade <15){
                img.setAttribute('src','criancaF.png')
                document.body.style.background=`#FF8C64`
            } else if (idade < 19) {
                img.setAttribute('src','jovemF.png')
                document.body.style.background=`#A5AAA3`
 
            } else if (idade <50) {
                img.setAttribute('src','adulta.png')
                document.body.style.background=`#812F33`
            }else {
                img.setAttribute('src','idosa.png')
                document.body.style.background=`#FEA443`
            }
        }
 
        res.style.textAlign = 'center' // colocado estilo diretamente.
        res.innerHTML = `Detectamos genero ${genero} com idade ${idade} anos.`
        res.appendChild(img)
 
    }
 
 }