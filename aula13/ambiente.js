let a = [2, 3, 4, 6, 7, 9, 3]
/*for(let c = 0; c <= a.length; c++){
    console.log(a[c])
}
a.push(22)
console.log(a)

console.log(`Meu vetor é ${a.sort().reverse()}`) //em java for(Integer n : a){ sout(n)}

for(let n in a){
    console.log(a[n])
}

console.log(a.indexOf(3)) // retorna a posição do valor 3, nesse array posição 1, 
                        // se não houver esse valor, retorna -1


function parImpar(numero){
   if (numero % 2 == 0){
    return "Par"
   }else{
    return "Impar"
   }
}

console.log(parImpar(81))

function soma(n1, n2){
    return n1+n2
}
*/
function fatorial(n){
    var ret = 1;
    for(var i = n; i > 1; i--){
        ret *= i
    }
    return ret
}
console.log(fatorial(5))
