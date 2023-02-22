function calcularConta(mesa) {
    console.debug(mesa);
    // Separar as informações da mesa em variáveis
    const [numClientes, numItens, ...itensConsumidos] = mesa.split('\n').filter(Boolean);
    const itensDesconsiderados = itensConsumidos.pop().split(' ');

    let valorTotal = 0;
    let valorDesconsiderado = 0;
    for (const item of itensConsumidos) {
        const [nome, valor] = item.split(' ');
        if (itensDesconsiderados.includes(nome)) {
            valorDesconsiderado += parseInt(valor);
        }

        valorTotal += parseInt(valor);
    }

    const valorPorCliente = Math.floor((valorTotal - valorDesconsiderado) / numClientes);

    return [
        parseInt(valorTotal),
        parseInt(valorPorCliente),
        parseInt(valorDesconsiderado)
    ]
}

console.log(calcularConta("3\n" +
    "\n" +
    "7\n" +
    "\n" +
    "item01 200\n" +
    "\n" +
    "item02 40\n" +
    "\n" +
    "item03 60\n" +
    "\n" +
    "item04 80\n" +
    "\n" +
    "item05 100\n" +
    "\n" +
    "item06 80\n" +
    "\n" +
    "item07 35\n" +
    "\n" +
    "item03 item04 item07"));
