## Data Structures



### Stacks







### Sets

Sets são similares a stacks, diferenciando que eles não possuem items duplicados, e não existe uma ordem predefinida para eles.

Um uso comum desse tipo de metódo de data structure, é para checar se existe um item em um vetor.

> ES6 ou versões superiores possuem build-in sets objects, mas não contém todos possiveis.
>
> No `sets.js` você pode encontrar todos os métodos.

*"Mas se o collection do MySet é um array, como não pode ter itens duplicados?"*

> Bom, se ver no `sets.js` vai ver a implementação do has, onde verificamos se existe aquele item no nosso collection:
>
> ```js
> has = (element) => {
>     return this.collection.indexOf(element) !== -1;
> };
> ```

