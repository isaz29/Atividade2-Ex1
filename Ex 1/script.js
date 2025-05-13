let dolarAtual = document.querySelector("#dolarAtual");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcular(){
    let dolar = Number(dolarAtual.value);

    //Calcular se esse valor se subisse 1%
    let subir1 = dolar * (1 + 1 / 100);

    //Calcular se esse valor se subisse 2%
    let subir2 = dolar * (1 + 2 / 100);

    //Calcular se esse valor se subisse 2%
    let subir5 = dolar * (1 + 5 / 100);

    //Calcular se esse valor se subisse 2%
    let subir10 = dolar * (1 + 10 / 100);

h3Resultado.innerHTML = "Se esse valor se subisse 1%: " + subir1 + "<br>" + 
"Se esse valor subisse 2%: " + subir2 + "<br>" + 
"Se esse valor subisse 5%: " + subir5 + "<br>" + 
"Se esse valor subisse 10%: " + subir10;

}

btCalcular.onclick = function(){
    calcular();

}