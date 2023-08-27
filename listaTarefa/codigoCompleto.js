const readlineSync = require('readline-sync');

const tarefas = [];

function colorirTexto(texto, cor) {
    const cores = {
        reset: '\x1b[0m',
        preto: '\x1b[30m',
        vermelho: '\x1b[31m',
        verde: '\x1b[32m',
        amarelo: '\x1b[33m',
        azul: '\x1b[34m',
        magenta: '\x1b[35m',
        ciano: '\x1b[36m',
        branco: '\x1b[37m'
    };

    if (cores[cor]) {
        return cores[cor] + texto + cores.reset;
    } else {
        console.error(`Cor inválida: ${cor}`);
        return texto;
    };
};

const listaDeTarefasAdd = () => {
    const nameTarefa = readlineSync.question('Titulo da Tarefa: ');
    const item = readlineSync.question('Adicione uma nova tarefa: ');

    if(nameTarefa === ''){
        console.clear();
        console.log(colorirTexto('Preencha o campo do Titulo :)\n', 'vermelho'));
        return listaDeTarefasAdd();
    };

    if(item === ''){
        console.clear();
        console.log(colorirTexto('Digite algo, para ser adicionado :)\n','vermelho'));
        return listaDeTarefasAdd();
    };


    const tarefa = {
        nameTarefa,
        item
    };

    tarefas.push(tarefa);

    console.log(colorirTexto('\nTarefa adicionada com sucesso.\n','verde'));
    console.clear();

    const continuarTrefa = readlineSync.keyInYN('Deseja adiciona outra tarefa? ');

    if(continuarTrefa){
        return listaDeTarefasAdd();
    }else{
        console.log(colorirTexto(`\nTarefas criadas ${tarefas.length}\n`,'verde'));
    };
};

const mostraTarefas = () => {

    if(tarefas == ''){
        console.log(colorirTexto('\nNenhuma tarefa registrada :)\n','vermelho'));
    }else{
        console.log(colorirTexto('\nTarefas registradas', 'verde'));
        console.log('--------------');

        tarefas.forEach((tarefa, index) => {

            console.log(`Item: ${index + 1}\nTitulo: ${tarefa.nameTarefa}\nConteudo: ${tarefa.item}\n--------------`);
        });
        
    };
};

const removeTarefa = () => {
    const removeTarefa = readlineSync.questionInt('\nQual item deseja remover? ');

    const remove = removeTarefa - 1;

    tarefas.splice(remove,1);
    console.log(`\nItem ${removeTarefa} removido com sucesso\n`);
};

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