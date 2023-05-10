function calcularJurosSimples() {
    let capital = parseFloat(document.getElementById("capital").value);
    let taxa = parseFloat(document.getElementById("taxa").value);
    let tempo = parseFloat(document.getElementById("tempo").value);

    if(isNaN(capital)||isNaN(tempo)||isNaN(taxa)){
        alert("Digite algum valor!")
    }else{

    let jurosSimples = capital * taxa/100 * tempo;

    let montanteSimples = capital + jurosSimples;

    let resultadoSimples = document.createElement("p");
    resultadoSimples.appendChild(document.createTextNode("Juros Simples: R$" + jurosSimples.toFixed(2)));

    let montante = document.createElement("p");
    montante.appendChild(document.createTextNode("Montante: R$" + montanteSimples.toFixed(2)));

    let resultadoAumentoSimples = document.createElement("p");
    resultadoAumentoSimples.appendChild(document.createTextNode("Aumento mensal: R$" + (jurosSimples/tempo).toFixed(2)));

    let resultadoDiv = document.getElementById("resultadoJurosSimples");
    resultadoDiv.innerHTML = "";
    resultadoDiv.appendChild(resultadoSimples);
    resultadoDiv.appendChild(montante);
    resultadoDiv.appendChild(resultadoAumentoSimples);
}
}

function calcularJurosCompostos() {
    let capital = parseFloat(document.getElementById("capital").value);
    let taxa = parseFloat(document.getElementById("taxa").value);
    let tempo = parseFloat(document.getElementById("tempo").value);

    let jurosCompostos = capital * (multiplicacaoRepetida((1 + taxa/100), tempo) - 1);

    let montanteCompostos = capital * multiplicacaoRepetida((1 + taxa/100), tempo);

    let resultadoCompostos = document.createElement("p");
    resultadoCompostos.appendChild(document.createTextNode("Juros Compostos: R$" + jurosCompostos.toFixed(2)));

    let montante = document.createElement("p");
    montante.appendChild(document.createTextNode("Montante: R$" + montanteCompostos.toFixed(2)));

    let resultadoAumentoCompostos = document.createElement("p");
    resultadoAumentoCompostos.appendChild(document.createTextNode("Aumento mensal: R$" + ((montanteCompostos - capital) / tempo).toFixed(2)));

    let resultadoDiv = document.getElementById("resultadoJurosCompostos");
    resultadoDiv.innerHTML = "";
    resultadoDiv.appendChild(resultadoCompostos);
    resultadoDiv.appendChild(montante);
    resultadoDiv.appendChild(resultadoAumentoCompostos);
}

function multiplicacaoRepetida(numero, expoente) {
    let resultado = 1;
    for(let i=0; i<expoente; i++) {
        resultado *= numero;
    }
    return resultado;
}
