const readlineSync = require('readline-sync');
const { listaDeTarefasAdd, mostraTarefas, removeTarefa } = require('./dados/funcao.js');

const main = () => {
    console.log("Sistema de Tarefas\n");

    while(true){
        console.log("Opções:");
        console.log("1. Adicione uma tarefa");
        console.log("2. Mostra Tarefas");
        console.log("3. Remover tarefas");
        console.log("4. Sair");

        const myTarefa = readlineSync.questionInt("\nEscolha uma opçao: ");
        console.clear();
        switch(myTarefa){
            case 1:
                listaDeTarefasAdd();
                break;
            case 2:
                mostraTarefas();
                break;
            case 3:
                removeTarefa();
                break;
            case 4:
                console.log('Sistema encerrado :)');
                return;
            default:
                console.log('Opção inválida. Tente novamente.\n');
        };
    };
};

main();
