from typing import List

def length(arr: List[any]):
    qtd = 0
    if(arr[qtd:qtd+1] is False): #python keeps being crazy bruh
        qtd =+ 1
        return qtd
    arr.pop(qtd) # removing by index with qtd
    qtd =+ 1
    length(arr)
    
    print(length([1,2]))