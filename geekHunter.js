
//Este e um exemplo de processamento de entradas (inputs), sinta-se a vontade para altera-lo conforme necessidade da questao.
function main(entradas) {
    const linhas = entradas.trim().split("\n"); //separa as entradas por linha e converte em um ARRAY de STRINGS.
    const sales = []
    for (let i=0; i < linhas.length; i++) {
        let linha_entrada;
        try {
            linha_entrada = eval(linhas[i]); //tenta converter a string pra inteiro ou array se falhar, cai no catch.
        } catch {
            linha_entrada = linhas[i]; //mantem como string porque o eval falhou em converter pra inteiro ou array.
        }
        if (linha_entrada?.length > 1) {
             sales.push(linha_entrada.split(" ").map(number => Number(number)))
        }
    }

    const orderedSales = orderSales(sales[0]) // index 0 will be the numbers of all sales
    const carlosSales = sales[1]

    for (let i in carlosSales) {
        let newArr = orderSales([...orderedSales, carlosSales[i]])

        const position = newArr.findIndex(value => value === carlosSales[i]) - 1

        console.debug(position)
    }
}

function orderSales(sales) {
    for (let i = 0; i < sales.length - 1; i++) {
        for (let j = 0; j < sales.length - i - 1; j++) {
            if (sales[j] < sales[j + 1]) {
                // troca os elementos de posição
                let temp = sales[j];
                sales[j] = sales[j + 1];
                sales[j + 1] = temp;
            }
        }
    }
    return sales
}

main("7\n" +
    "\n" +
    "55 100 100 40 100 50 35\n" +
    "\n" +
    "20 60 40 10")


