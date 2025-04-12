let list = []
let sel = document.getElementById("sel")
let res = document.getElementById("res")

function adicionar(){
    res.innerHTML = "Calculando..."
    let input = document.getElementById("num")
    let num = Number(input.value)

    if(num > 100 || num < 1){
        alert("[ERROR] Somente números entre 0 e 100")
        input.value = ''
        input.focus()
    }else{
        list.push(num)

        let item = document.createElement("option")
        item.text = `Valor adicionado: ${num}`
        sel.appendChild(item)

        input.value = ''
        input.focus()       
    }
    
}

function finalizar(){
    if(list.length == 0){
        alert("Impossível finalizar, por favor adicione valores a lista!")
    }else{
        // let ultimoNumero = list.at(-1)
        let maiorNumero = Math.max(...list) //usando uma função
        
        let menorNumero = list[0]// usando a lógica 'hehe'
        for(let i = 0; i <= list.length; i++){
            if(list[i] < menorNumero){
                menorNumero = list[i]
            }
        }

        let soma = 0
        for(let num of list){
            soma += num
        }
        res.innerHTML = `Foram cadastrados ${list.length} números.<br>`
        res.innerHTML += `<br>O MAIOR valor informado foi ${maiorNumero}<br>`
        res.innerHTML += `<br>O MENOR valor informado foi ${menorNumero}<br>`
        res.innerHTML += `<br>A soma de todos os valor é igual a ${soma}<br>`
        res.innerHTML += `<br>A média dos valores é ${(soma/list.length).toFixed(2)}`       
        
    }
  


}