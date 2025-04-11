var res = document.getElementById("res")
var numero = document.getElementById("ini")
function tabuada(){
    for(var c = 1; c <= 10; c++){
        res.innerHTML = `${numero} x ${c} = ${numero * c}`
    }
}