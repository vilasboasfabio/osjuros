let iniciar = prompt("Deseja adicionar algum aluno?");
let nome = prompt("Insira o Nome do aluno");
let nota = Number(prompt("insira a nota do aluno"));
let notas = [];
let alunos = [];
let media;
let soma;
let maior = 0;
let menor = 10;

while (true) {

    iniciar = prompt("Deseja adicionar algum aluno?").toLowerCase;
    nome = prompt("Insira o Nome do aluno");
    nota = Number(prompt("insira a nota do aluno"));
    if (iniciar === "não"){
        false;
        break;
    }else if(iniciar == "sim"){

        alunos.push(nome);
        let todas = notas.push(nota);

        for (let i = 0; i < todas.length; i++){
            soma += todas[i];
        }
        

    }
    console.log(alunos);
    console.log(soma);
}

