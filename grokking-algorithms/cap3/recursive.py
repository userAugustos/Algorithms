keys = [
    {
        "name": 'User',
        "key": 'hashcode',
    }, {
        "name": '',
        "key": ''
    },
    {
        "name": '',
        "key": ''
    }
]

# So to talk about recursive, look at this code, right now, we only want to find one key, then we loop through the array, and through eack directorie, returning when we find the key
# the way i write it, it could be easly changed to return all keys finded in, but let's keep that, because in this example, we can see, how could be easily to write and read it in a recursive way

def search_key(box_of_keys: list[dict[str, str]]):
    stack = box_of_keys
    while len(stack) >= 0:
        for item in stack:
            if len(item["key"]) > 0:
                return item
    else:
        stack.remove(item)

# print(search_key(keys))
# recursive
# so as you can see, we can make some recursive codes, that looks better or fit better in some solution, there is no need to recursive code btw, since for every recursive code, we also had a loop approach, and also, is hard to meansure which one is faster or better (it depends on the solution), but most of the time, loops will have better performance
def recursive_search(box_of_keys: list[dict[str, str]]):
  if len(box_of_keys) <= 0:
    return
  else:
    for item in box_of_keys:
      if len(item["key"]) > 0:
        return item
      else:
        box_of_keys.remove(item)	
        recursive_search(box_of_keys)
        
print(recursive_search(keys))

# Exercise 3.2
# Se uma função recursiva entrar em loop infinito, a pilha, vai continuar a se encher de chamadas, guardando estado, e ocupando espaço na memória, até exceder o limite de memória da máquina

def EvenNums(n: int):
  if(n < 2): return;
  if(n % 2 == 0): print(n)
  return EvenNums(n - 1)
    
print(EvenNums(8))

def fibonacci(i):
  if(i < 2):
    return i;
  return fibonacci(i-1)+ fibonacci(i-2)

print(fibonacci(8))