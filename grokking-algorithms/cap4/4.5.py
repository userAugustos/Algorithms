from typing import List

def print_every_item(arr: List[any]):
  if(len(arr) < 2):
    print(arr[0])
    return 'all printed'
  print(arr[len(arr) - 1])
  arr.pop()
  return print_every_item(arr)

print(print_every_item([1,14,4,8,6, 3]))