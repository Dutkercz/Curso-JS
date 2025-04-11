function tabuada(){
    var numero = document.getElementById("ini")
    var select = document.getElementById("sel")

    if(numero.value.length < 1){
        alert("[ERROR] Não foi digitado nenhum numero")
    }else{
        for(var c = 1; c <= 10; c++){
            var item = document.createElement("option")
            item.text = `${numero.value} x ${c} = ${numero.value * c}`
            select.appendChild(item)
        }


    }
    
}