function verificar(){

    var data = new Date;
    var anoAtual = data.getFullYear();
    var anoEntrada = document.getElementById("anoNasc")
    var resultado = document.getElementById("div2") 
    var img = document.createElement("img")
    img.setAttribute("id", "foto")
    
    if(anoEntrada.value.length == 0 || anoEntrada.value > anoAtual){
        alert("[ERROR] Verifique os dados e tente novamente!")
    }else{
        var idade = anoAtual - anoEntrada.value
        var sex = document.getElementsByName("sex")
        var genero = ""

        if(sex[0].checked){
            genero = "Masculino"
            img.setAttribute("src", "")//definir path da img
        }else {
            genero = "Feminino"
            img.setAttribute("src", "")//definir path da img
        }
        
        resultado.innerHTML = `Sua idade é ${idade} do sexo ${genero}`
        resultado.appendChild(img) //para mostrar a imagem
    }


}