# Js anotações (curso guanabara)

 Alertas tipos (Dentro do script)

   * window.alert ('Alo')                                 // mensagem simples
   * window.confirm ('Alguma pergunta aleatória?')        // mensagem "ok" ou "cancelar"
   * window.prompt ('Qual é o seu nome?')                 // mensagem com uma caixa de texto

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
Sinal de = significa "recebe" comentário!

Node.js

    ctrl + shit + ' = abrir terminal.
    digitar "node" no terminal para abrir o terminal do node.js

    var n1 = 2
    var n2 = 10
    n1 + n2 = 12

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
Identificadores: (n1)

  * pode começar com letra, $ ou _ (e letras e números. ex: n1)

  * não pode começar com números
  * pode usar acentos e símbolos
  * não pode conter espaços
  * não podem ser palavras reservadas

Dicas:

   * Maiúsculas e minúsculas Fazem diferença
   * Tente escolher nomes coerentes

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
Javascript tipos de dados 

   * number: 5, 18, -12, 0.5, -15.9, 3.14, 8.0
    {Infinity e NaN(not an number)}
   * string: "google", 'javascript' e `maria ${x}`
   * boolean: true, false
   * Outros: null, object(array) undefined, function

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
   * Number.parseFloat(n) força uma string ser numero real
   * Number.parseInt(n) força uma string ser numero inteiro
   * Number(n) reconhece o tipo de numero colocado automaticamente

    Exemplo: 

    var n1 = Number(window.prompt('digite um número'))
    var n2 = Number(window.prompt('digite outro número'))

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
Formatando String:

   * Template string: melhor pra fazer a concatenação

    var idioma = 'portugues'

    'eu estou aprendendo' + idioma            // usa concatenação
    `eu estou aprendendo ${idioma}`           // usa template string

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
Conversão de letras

  * var x = 'nOMe'
    document.write(`Olá, ${x}!`)                     >> Olá, nOMe! 
    document.write(`Olá, ${x.toUpperCase}()!`)       >> olá, NOME!
    document.write(`Olá, ${x.toLowerCase}()!`)       >> olá, nome!


  * var x = window.prompt('Digite uma frase.')
    document.write(`A frase possui ${x.length} letras.`)
    document.write(`${x}`)

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
Formatar números no node:
    
    >var n1 = 1545.5 
    >n1
    1545.5

    (e se eu quiser com 2 casas decimais?) 
    >n1.tofixed(2)
    1545.50

    (e se eu quiser usar vírgula em lugar de ponto?)
    >n1.tofixed(2).replace('.', ',')
    1545,50

IMPORTANTE:

  * >n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    R$ 1,545.50

  * >n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
    US$ 1,545.50
   
  * >n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})
    € 1,545.50

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
Operadores(pt 1): Aritiméticos, Atribuição
Aritiméticos: 

    5 -  2   =   3
    5 +  2   =   7
    5 /  2   =   2.5
    5 *  2   =   10
    5 ** 2   =   25          // 5 elevado a 2
    5 %  2   =   1           // 5 dividido pra 2 não é número inteiro então resta 1

    5+3/2 = 6.5 (divisão primeiro)

Ordem de precedência: Importante

  * ()       >      **        >        *, /, %        >        +, - 

    var a = 5 + 3                    >   8
    var b = a % 5                    >   3
    var c = 5 * ((b ** 2))           >   45
    var d = 10 - ((a / 2))           >   6
    var e = ((6 * 2)) / d            >   2
    var f = ((b % e)) + ((4/e))      >   3

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
Autoatribuição:

    var n =  3
    n = n +  4     
    n = n -  5 
    n = n *  4
    n = n /  2
    n = n ** 2
    n = n %  5

Forma de simplificar:

    Se N receber ele mesmo(N) mais(+) 4: 
    N = N + 4             >          N += 4 ou N++ = 4

    Se receber outra variável :
    (não pode simplificar)

    N + M(outra variável) + 4    // não simplifica

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
Incremento:

    >var num = 8
    undefined 

    >num
    8

    >num += 2
    10

    >num
    10

    a variável muda e se atualiza.

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
Operadores de incremento:

  * var x = 5

    x = x + 1    ou    x += 1     ou   x++   >       6
    x = x - 1    ou    x -= 1     ou   x--   >       5

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
Operadores(pt 2): Relacionais, Lógicos, Ternário

  * Relacionais: (RESULTADO VALOR BOOLEANO)

    >, <, >=, <=, ==, !=, ===

    5 > 2       > true     (5 maior que 2?)
    7 < 4       > false    (7 menor que 4?)
    8 >= 8      > true     (8 é maior ou igual a 8?)
    9 <= 7      > false    (9 é menor ou igual a 4?)
    5 == 5      > true     (5 igual a 5?)
    4 != 4      > false    (4 diferente de 4?)

  * ATENÇÃO!!! IDENTIDADE.

    5 == 5 > true            (5 é igual ao número 5? (visualmente sim))
    5 == '5' > true          (5 é igual a string 5? (visualmente sim))

    5 === '5'   > FALSE    (são idênticos? ambos são números? não, são número e string)
    5 === 5     > TRUE     (são idênticos? ambos são números? sim)

  * ORDEM DE PRECEDÊNCIA:

    quem vier/aparecer primeiro.

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
Lógicos:

    ORDEM DE EXECUÇÃO :  primeiramente 'NÃO', segundamente 'E' e terceiramente 'OU'

    sempre que aparecer:   !   >  NEGAÇÃO.   (NÃO)
    sempre que aparecer:  &&   >  CONJUNÇÃO. (E)
    sempre que aparecer:  ||   >  DISJUNÇÃO. (OU)
-----
    ! true        >   false
    ! false       >   true
-----
    true  && true     >   true 
    true  && false    >   false
    false && true     >   false
    false && false    >   false
-----
    true  || true     >   true 
    true  || false    >   true 
    false || true     >   true 
    false || false    >   false

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
Importante:

    var a = 5
    var b = 8

    a > b && b % 2 == 0        // b % 2 == 0       >    é  true        1- Resolve os operadores Aritiméticos
    a > b && TRUE              // a > b            >    é falso        2- Resolve os operadores Relacionais
    FALSE && TRUE              // FALSE && TRUE    >    é falso        3- Resolve os operadores Lógicos

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
Revisão ordem de precedência: (descendo = v) 

  * Se tiver todos os operadores numa mesma expressão, resolve primeiramente:

    v>  1. Operadores Aritiméticos      (), **, *, /, %, +, - 
    v>  2. Operadores Relacionais       >, <, >=, <=, ==, !=, === (quem vier primeiro vai ser feito primeiro)
    v>  3. Operadores Lógicos           !, &&, || (NESTA ORDEM)

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
Operadores Ternário:

    é "?" e ":" dentro de uma mesma expressão

    TES * TE ? TRUE : FALSE

    -teste lógico qualquer- ? -vai acontecer se o teste for verdadeiro- : -vai acontecer se o teste for falso-
    -a média é >= 7.0- ? -aprovado- : -reprovado-

Nodejs

    > var média = 5.5
    undefined

    > média > 7?'aprovado':'reprovado'
    'reprovado'

    > média += 3
    8.5

    > média > 7?'aprovado':'reprovado'
    'aprovado'

    > var res = x % 2 == 0 ? 5 : 9 ((se x % 2 restar 0, ou seja, for número par, a variável res vai ser 5, caso não seja, vai ser 9))
    undefined

    > x 
    8

    > res
    5

    > var idade = 19
    undefined

    > var r = idade >= 18?'MAIOR' : 'MENOR'
    undefined
    
    > r
    'MAIOR' 

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
O que é DOM? (Aula 9)
   
  * DOM significa "Document Object Model"
    conjunto de objetos de objetos dentro do nav que vai dar acesso 
    aos componentes internos do website.

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # <<<<<<<<<<<<
Árvore DOM: Árvore hierárquica de ELEMENTOS.


            Window
              ....
location, document,  history,   etc
    .          .         .       .
               .          
              html
                ..
           .          . 
        head,          body
   .     .    .            .... 
meta, title, etc...           ....
                          .  .   .    .
                        h1,  p,  div,  etc...
                     . .     ..       .     .
                    p, etc     ..
                             .   .
                         strong, etc

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
5 MÉTODOS DE ACESSO:                   { Lembrando que os métodos ficam dentro de uma função   } 
                                       { e se o "Element" acabar com "Elements" com s, colocar }
                                       { dentro do [] o valor desejado. 0 é o primeiro.        }

1. selecionar método por marca (TagName)
    
    document.getElementsByTagName()[]                

>   ex: (<)div name = "mensagem"(>) ALO (</)div(>)
        (<)div name = "mensagem"(>) ALO ALO (</)div(>)

        var x = document.getElementsByTagName('mensagem')[0] << 0 = 1 div
        x.innerText = 'olá!'    

        > resultado: "ALO" se tornará "olá!"
-----------------
        var x = document.getElementsByTagName('mensagem')[1] << 1 = 2 div
        x.innerText = 'olá!'             

    > resultado: "ALO ALO" se tornará "olá!"
-------------------------------------------------------------------------------------------------
2. selecionar método por ID (ID)

    document.getElementByID()                

>   ex: (<)div id= "mensagem"(>) ALO (</)div(>)
    
        var x = document.getElementByID('div#mensagem')
        x.innerText = 'olá!'

    > resultado: "ALO" se tornará "olá!"
-------------------------------------------------------------------------------------------------
3. selecionar método por Nome (Name)

    document.getElementsByName()[]  

>   ex: (<)div name = "mensagem"(>) ALO (</)div(>)

        var x = document.getElementsByName('mensagem')[0]
        x.innerText = 'olá!'
        
    > resultado: "ALO" se tornará "olá!"
-------------------------------------------------------------------------------------------------
4. selecionar método por Classe (ClassName)

    document.getElementsByClassName()[]              

>   ex: (<)div class = "mensagem"(>) ALO (</)div(>)
        
        var x = document.getElementsByClassName('div.mensagem')[0]
        x.innerText = 'olá!'

    > resultado: "ALO" se tornará "olá!"
-------------------------------------------------------------------------------------------------
5. selecionar método por Seletor (querySelector) > método mais recente e recomendável

    document.querySelector()   

>  ex: (<)div class = "mensagem"(>) ALO (</)div(>)
        
        var x = document.querySelector('div.mensagem') - se div = id, seria ('div#mensagem')
        x.innerText = 'olá'
    
    > resultado: "ALO" se tornará "olá!"
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
Eventos DOM: (Aula 10)

   * Funções são um conjunto de linhas/códigos que vão ser executadas caso o evento ocorra
    
    >function "ação"(parâmetros opcionais){
    >
    >}

    exemplos de alguns eventos com o mouse:

    onmouseenter, onmouseout, onmouseup, onmousedown, onclick,
    

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
Usando o inspecionar pode-se descobrir os erros de digitação dentro do Js 
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
Revisão:
        
1. document.write(x.innerHTML) e ...(x.innerText) 
são diferentes. html pega as tags, text pega apenas o texto

2. Após chamar um evento, adicionar um método. ex:
        div id="area" onclick="clicar()"

        function clicar{
            var x = document.getElementByID('area') // dentro da área escolhida, o texto irar mudar pra "clicou"
            x.innerText = 'Clicou!' 
        }

3. Listenners são usados assim:

    div> class = "roupa" /div>

    var x = document.querySelector('div.roupa')

    x.addEventListener('click', clicar)
    x.addEventListener('mouseenter', entrar)
        
    function clicar() {
        x.innerText = 'Clicou!'
        x.style.background = 'black'
        x.style.color = 'green'
    }

    function entrar(){
        x.innerText = 'Entrou!'
        x.style.background = 'green'
        x.style.color = 'black'
    }


# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 

Estrutura condicional simples: IF 

  * Se (if) condição1 for VERDADEIRA, execute o Bloco A.

    Ilustração:
    if (condição1) {
    Bloco A
    }

    Se condição1 for TRUE, execute o bloco TRUE (Bloco A).
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
Estrutura condicional composta: IF/ELSE 

  * Se (if) condição1 for VERDADEIRA, execute o Bloco A.
    Senão (else), execute o Bloco B.

    Ilustração:
    if (condição1) {
    Bloco A
    } else {
    Bloco B
    }

  * Se condição1 for TRUE, execute o bloco TRUE (Bloco A).
    Senão for TRUE, execute o bloco FALSE (Bloco B).
    
    var idade = 22
    console.log(`Você tem ${idade} anos`.)

    if(idade < 16) {
    console.log('Não vota')
    } else if (idade < 18 || idade > 65){
      console.log('Voto opcional!')
    } else {
        console.log('Voto obrigatório!')
    } 
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
O método  console.log()  serve para ESCREVER (log) uma MENSAGEM no console.

    var pais = 'EUA'

    console.log(`Vivendo em ${pais}`)

    if(pais == 'Brasil'){
        console.log('Você é Brasileiro!')
    } else {
        console.log('Você é estrangeiro!')
    }
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
Pegar Hora atual do sistema (Node.js)

    var agora = new Date()
    var hora = agora.getHours() 
    console.log(`agora são exatamente ${hora} hora(s)`)

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
Expressão múltipla: (SWITCH CASE)

    Ex:  switch (Expressão) {
        case valor 1
            x
            break
        case valor 2
            x
            break
        case valor 3
            x 
            break
        default
            x
            break
    }
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
    Estruturas de Repetição:

  * while:
    ex: 
    
    var c = 1
    while (c <= 3) {
    console.log(`Passo ${c}`)
    c++
    } 
    > Passo 1, Passo 2, Passo 3


  * Do While:
    ex:

    var c = 1
    do{
    console.log(`Passo ${c}`)
    c++
    } while (c <= 3)
    > Passo 1, Passo 2, Passo 3


  * For:
    ex:

    for(var c = 1; c <= 3; c++) {
    console.log(`Passo ${c}`)
    }
    > Passo 1, Passo 2, Passo 3


