### Selection Sort

O Algoritmo de ordenação por seleção, é um dos mais simples, mas com ele podemos compreender quais as possiveis estratégias que podemos usar pra resolver problemas de ordenação

imagine o vetor:

```js
const vector = [3, 0, 2, 6, 5];
```

neste array, para ordenar com selection sort, pensaremos no seguinte caminho:

```js
for (let i = 0; i < arr.length; i++) {
  let min = i;

  for (let nextMin = i + 1; nextMin < arr.length; nextMin++) {
    if (arr[nextMin] < arr[min]) {
      min = nextMin;
    }
  }

  if (min != i) {
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
}
```

Então no fluxo do selection sort, é importante estarmos comparando o valor atual de onde iniciamos (`index 0`) com o proximo valor do array, para estarmos sempre redefinindo o valor minimo no array.

Então usamos um loop para passar por cada elemento a partir do **minimo_atual + 1**, então dentro desse loop verificamos se esse valor no indice a frente do minimo_atual é maior que ele, se for, atualizamos o valor minimo.

Depois verificamos se o minimo_atual foi atualizado, já que no inicio desse array, ele era:

```js
min = i;
```

se tiver sido atualizado, atualizamos as posições no array
