so we have a list, that has a value, and a pointer to another List
```typescript
type List<T> = {
  element: T,
  next: List<T>
} | null
```

empty case
```typescript
const empty: List<null> = null
```
list is null is just to be declarative that, the function returns true if the list is null and false otherwhise
```typescript
const isEmpty = <A>(list: List<A>): list is null => list === null
```
adding one element to this list
```typescript
const list: List<Number> = {
  element: 1,
  next: empty
}
```
creating an append func
```typescript
const append = <T>(element: T, list: List<T> = null,): List<T> => ({
  element,
  next: list
})
```

```typescript
console.debug(append<number>(2, append<number>(1, empty)))
```

Uma função MAP procura um elemento e retorna outro, tratato de acordoo com a função que quer tratar aquele element

então, um map, visualizando seria como:

função executada no map
```typescript
const func = (x: number) => x + 1

//array inicial
const arrX = [1, 2, 3]

//array para visualizarmos o map:
const arrMap = [func(arrX[0]), func(arrX[1]), func(arrX[2])]
```

então repare que, fazemos um loop sobre o array inicial, aplicando uma função para cada elemento dele, e o novo array é um resultado da função aplicada sobre cada elemento do array inicial

map function
```typescript
const map = <A, B>(func: (el: A) => B, list: List<A>): List<B> => {
  base case, if the list is null, the map is null
  if(isEmpty(list)) {
    return empty
  }

  // pega o elemento da list atual na recursão e aplica a func 
  const element = func(list.element)
  // usa recursão para chegar ao próximo elemento
  const next = map(func, list.next)

  // quando chegarmos ao return do empty, retornamos a stack da recursão adicionando cada elemento alterado a linkedList inicial
  return append(element, next)
}
```