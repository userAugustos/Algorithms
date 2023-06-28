## Dividir Para Conquistar

Para trabalhar com DC (Dividir para conquistar) precisamos pensar recursivamente, já que os algoritmos DC são recursivos, então pense nos dois principais aspectos para um algoritmo recursivo:
    - Descubra o caso-base, que deve ser o caso mais simples possível
    - Divida ou diminua o seu problema até que chegue no caso base

Então pensando nisso, com a estratégia DC, você deve diminuir o seu problema a cada recursão (Veja o exemplo na pag 71, para ver o exemplo com terreno)

### Algoritmo de Euclides
 NO livro não tem uma explicação direta sobre esse algoritmo, mas eu vou deixar uma aqui.

### Quicksort

O Quicksort é um algoritimo de ordenação que funciona dividindo o input em inputs menores, ordenando com a mesma sequência e então juntando de novo, essa estrátégia é ótima para grande masas de dados, já que com a seleção média de index, ela performa em: `O(n*logn)`.
- O QuickSort foi criado pelo cientista da computação britânico: Tony Hoare
