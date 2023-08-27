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

module.exports = {
    colorirTexto
};