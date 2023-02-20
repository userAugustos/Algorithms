//Você deve alterar o conteudo desta funcao para processar as entradas de acordo.
function processarLinha(linha) {
    return linha;
}



//Este e um exemplo de processamento de entradas (inputs), sinta-se a vontade para altera-lo conforme necessidade da questao.
function main(entradas) {
    const linhas = entradas.trim().split("\n"); //separa as entradas por linha e converte em um ARRAY de STRINGS.

    console.debug(linhas)
    for (let i=0; i < linhas.length; i++) {
        let linha_entrada;
        try {
            linha_entrada = eval(linhas[i]); //tenta converter a string pra inteiro ou array se falhar, cai no catch.
        } catch {
            linha_entrada = linhas[i]; //mantem como string porque o eval falhou em converter pra inteiro ou array.
        }
        if (!linha_entrada || linha_entrada !== "") {
            const resultado_processado = processarLinha(linha_entrada);
            if (resultado_processado) {
                console.log("resultado", resultado_processado);
            }
        }
    }
}

//o codigo abaixo nao deve ser alterado, só serve pra processar os inputs.
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
process.stdin.on("data", function (input) {
    stdin_input += input;
});
process.stdin.on("end", function () {
    main(stdin_input);
});
