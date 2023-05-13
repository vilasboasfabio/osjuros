function calcularAumento() {

    let sal = Number(document.getElementById("salario").value);
    let aumento;
    let porcentagem;
    let final;

    if (sal < 3000) {
        alert("Digite o valor mínimo");
    } else if (sal > 2999 && sal <= 6000) {
        aumento = sal * 0.08;
        final = sal + aumento;
        porcentagem = 8;
    }else if (sal >= 6001 && sal <= 10000) {
        aumento = sal * 0.06;
        final = sal + aumento;
        porcentagem = 6;
    }else if (sal >= 10001 && sal <= 15000) {
        aumento = sal * 0.04;
        final = sal + aumento;
        porcentagem = 4;
    }else if(sal > 15000 && sal < 40000){
        aumento = sal * 0.03;
        final = sal + aumento;
        porcentagem = 3;
    }else{
        alert("O que você quer de mim criatura?")
    }
    document.getElementById("sa").innerHTML = `Seu salário atual é: ${sal}`;
    document.getElementById("por").innerHTML = `Seu aumento será de: ${porcentagem}%`;
    document.getElementById("amt").innerHTML = `O valor do seu aumento em dinheiro será de: R$${aumento}`;
    document.getElementById("final").innerHTML = `Seu salário final será de: R$${final}`;

}
