function contar(){
    var numeroInicial = document.getElementById("ini")
    var numeroFinal = document.getElementById("fim")
    var passo = document.getElementById("pas")
    var botao = document.getElementById("btn1")

    var div2 = document.getElementById("div2")
    if(numeroInicial.value.length == 0 || numeroFinal.value.length == 0){
        alert("[ERROR] Faltam dados.")
        div2.innerHTML = "Impossível contar"
        
    }else{
        
        var i = Number(numeroInicial.value)
        var f = Number(numeroFinal.value)
        var p = Number(passo.value)

        if(p <= 0){
            p = 1
            alert("[PASSO INVÁLIDO] Considerando PASSO = 1")
        }

        div2.innerHTML = "Contando... <br>"
        if(i < f){
            for (var c = i; c <= f; c+= p ){
            div2.innerHTML += `${c} \u{1F449} `
            }
            
        }else{
            for (var c = i; c >= f; c-= p ){
                div2.innerHTML += `${c} \u{1F449} `
            }
        }
        div2.innerHTML += '\u{1f3c1}'

    }
    
}
