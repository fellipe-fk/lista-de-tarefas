const readlineSync = require('readline-sync');
const {colorirTexto} = require('./cores')
const tarefas = [];

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



module.exports = {
    listaDeTarefasAdd,
    mostraTarefas,
    removeTarefa,
};