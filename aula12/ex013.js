var horaAtual = new Date().getHours(); //pegar hora atual


if (idade >= 18 && idade < 65) {
    console.log("Maior de idade, e o voto obrigatório");
}else if (idade >= 16 && idade < 18) {
    console.log("Menor de idade, e o voto opcional");
}
else if (idade >= 65) { 
    console.log("A partir de 65 anos o voto é opcional");
}else{
    console.log("Menor de idade, não vota");
}