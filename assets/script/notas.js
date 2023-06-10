let iniciar = prompt("Olá, deseja adicionar algum aluno?")
let nome = prompt("Insira o nome do aluno")
let nota = ("Insira a nota do aluno")
let soma;
let média;
let maior;
let menor;
let contador = 0;
let alunos = [];
let notas = [];
let continuar = true;

while(continuar){
    alunos.push(nome)
    notas.push(nota)
    soma += nota;
    contador++;
    if(contador == 1){
        maior = nota;
        menor = nota;
    }else{
        if(nota > maior){
            maior = nota;
        }
        if(nota < menor){
            menor = nota;
        }
    }
    média = soma / contador;
    continuar = confirm("Deseja continuar?")
    if(continuar){
        nome = prompt("Insira o nome do aluno")
        nota = prompt("Insira a nota do aluno")
    }
}
console.log("A maior nota é: " + maior)
console.log("A menor nota é: " + menor)
console.log("A média da turma é: " + média)
console.log("Os alunos são: " + alunos)
console.log("As notas são: " + notas)

