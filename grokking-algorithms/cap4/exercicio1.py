# Só alguns pensamentos, de que, até como podemos ler mais pra frente no livro, recursividade não necessariamente é a melhor opção
# nesse caso, até me soa estranho usar recursividade, um loop seria mais legivel

from typing import List
# import numpy as np

def sumAllNumberInArray(arr: List[int]):
    result = 0
    if len(arr) == 0:
        return result
    if len(arr) == 1:
        result = arr[0]
        return result

    result = arr.pop(0) + sumAllNumberInArray(arr) # isso aqui chega ser bonito
    return result

print(sumAllNumberInArray([1,2,3]))