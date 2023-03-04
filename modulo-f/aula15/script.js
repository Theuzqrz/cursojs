let num = [10, 20, 30, 40]
num[4] = 50
num.push(60)


console.log(`nosso vetor é: ${num}`)
console.log(`nosso vetor tem ${num.length} posições`)
num.sort()// coloca em ordem crescente
console.log(`o primeiro valor do vetor é o ${num[0]}`)

let pos= num.indexOf(4)

if(pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}


// let valores = [8, 1, 7, 4, 2]


// for(let pos = 0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${valores}`)
// }

// jeito mais fácil:

for(let pos in num){ //para cada posição em num //in em pos só serve em arrays
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// num.indexOf(7) : mostrar em que posição está o número 7 // se não hover o número, aparece o valor -1


