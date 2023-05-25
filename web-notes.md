### Just some randon notes i wanna save
Things i found curious or important, they will be in portiguese or english, it will depend of my mod

##### DOM
O DOM (document object model) é uma interface de programação que os navegadores utilizam para representar paginas na web. o DOM oferece um modelo de representação e intreação do documento HTML ou XML, esse modelo se estrutura em foramto de árvore, com vários galhos que indicam diferentes elementos da página.

**DOM real x DOM Vitural**
Para isso, precisamos aqui entender o DOM como o seu conceito, de estrutura e criação da arquitetura no que o HTML vai ter no browser.
Então, o DOM é real, ou só DOM, é a estrutura de objetos que representa a página HTML no navegar, montada quando o HTML é lido e transformado, podemos manipular esse cara, por meio de scripts.
Nesse caso, temos uma estrutura fixa e já montada, que pode ser manipulada, mas pense que sempre que precisamos alterar algo na DOM diretamente, estamos intrinsecamente indo a estrutura de objetos montada pelo navegador e recarregando ela diferente, ou seja, cada vez que um elemento é montado, removido ou alterado na DOM, o navegador precisa reavaliar o layout e a renderização de toda a página.
E pra isso que entramos com o conceito de VIRTUAL DOM, esse VIRTUAL DOM é uma representação virtual e leve da estrutura do DOM real.
O Vitural DOM é uma copia do DOM real, armazenada em memória, que vai servir para, ao finalizada e aplicadas alterações, se comparar com o DOM real e buscar apenas as alterações necessárias, uma estratégia chamada `reconciliação`, que é muito eficiente, já que é capaz de identificar as alterações específicas que precisam ser feitas no DOM real.

	Em resumo, a diferença entre o DOM real e o Virtual DOM é que o DOM real é a representação concreta da página HTML no navegador, enquanto o Virtual DOM é uma representação virtual e leve usada para otimizar as atualizações do DOM real, tornando-as mais eficientes e rápidas.