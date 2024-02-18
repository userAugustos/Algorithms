// so we have a list, that has a value, and a pointer to another List
type List<T> = {
  element: T,
  next: List<T>
} | null

// empty case
const empty: List<null> = null

// list is null is just to be declarative that, the function returns true if the list is null and false otherwhise
const isEmpty = <A>(list: List<A>): list is null => list === null

// adding one element to this list
const list: List<Number> = {
  element: 1,
  next: empty
}

// creating an append func
const append = <T>(element: T, list: List<T> = null,): List<T> => ({
  element,
  next: list
})

console.debug(append<number>(2, append<number>(1, empty)))

// Uma função MAP procura um elemento e retorna outro, tratato de acordoo com a função que quer tratar aquele element

// então, um map, visualizando seria como:

// função executada no map
const func = (x: number) => x + 1

// array inicial
const arrX = [1, 2, 3]

// array para visualizarmos o map:
const arrMap = [func(arrX[0]), func(arrX[1]), func(arrX[2])]

// então repare que, fazemos um loop sobre o array inicial, aplicando uma função para cada elemento dele, e o novo array é um resultado da função aplicada sobre cada elemento do array inicial

// map function

const map = <A, B>(func: (el: A) => B, list: List<A>): List<B> => {
  // base case, if the list is null, the map is null
  if(isEmpty(list)) {
    return empty
  }

  const element = func(list.element)
  const next = map(func, list.next)

  return append(element, next)
}

const toMapList = append(3, append(2, append(1, empty)))
const mappedList = map(x => x + 1, toMapList)

console.debug(toMapList)
console.debug(mappedList)