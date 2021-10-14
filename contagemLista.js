let numeroAlunos = 10; ///Dando número de alunos em uma lista

let listaAlunos = ["Mario", "Luigi", "Peach", "Daisy", "Bowser", "Toad", "Yoshi", "Rosalina", "Wario", "Waluigi"] ///lista de alunos

for (let i = 0; i < 10; i++){
    if (i == 0){
        console.log (`${i} : ZERO : ${listaAlunos[i]}`) /// Imprimindo as verificações de condições usando interpolação
    }else if (i % 2 == 1){
        console.log (`${i} : ÍMPAR : ${listaAlunos[i]}`)
    }else{
        console.log (`${i} : PAR : ${listaAlunos[i]}`)
    }
}