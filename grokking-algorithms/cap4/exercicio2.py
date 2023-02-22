from typing import List

def length(arr: List[any], qtd: int = 0):
    if not arr:
      return qtd
    arr.pop(0)

    return length(arr, qtd+1)
    
print(length([1,2,3,4,34]))
