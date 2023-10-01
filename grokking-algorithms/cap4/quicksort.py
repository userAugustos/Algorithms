from typing import List


arr = [1,56,738,2,10,7,28,18]


def quicksort(array: List[int]):
  if(len(array) < 2):
    return array
  
  left_arr = []
  right_arr = []
  
  pivo = array[len(array) // 2]

  for i in array:
    if i < pivo:
      left_arr.append(i)
    if i > pivo:
      right_arr.append(i)
    
  return quicksort(left_arr) + [pivo] + quicksort(right_arr)

print(quicksort(arr))
# print(len([1,56,738,2,10,7,28,18]) // 2)

# Então a diferença essencial entre as duas abordagens é que nesse algoritimo a baixo, estou trocando as posições diretamente no mesmo array, no algoritimo a cima, eu divido em dois arrays: left & right


def find_pivot_index(array, start, end):
  pivot=array[end] #escolhe o ultimo elemento do array como pivot
  index=start #index é o que usamos para ir da esquerda para a direita passando pelo array
  
  # iter é o J
  # o index é o q
  
  for iter in range(start, end):
    if array[iter] <= pivot:
      temp = array[index]
      array[index] = array[iter]
      array[iter] = temp
      index+=1
  temp = array[index]
  array[index] = pivot
  array[end] = temp
  return index

def quick_sort(arr, start,end):
  if start<end:
    pivot_index=find_pivot_index(arr,start,end)
    print("------------------", arr)
    quick_sort(arr,start,pivot_index-1)
    quick_sort(arr, pivot_index+1, end)

print(quick_sort(arr, 0, len(arr) -1 ))

array_input = []
num_items=int(input("Quantos valores vai querer no seu array?:"))
for x in range(0, num_items):
    num=int(input("Digite um valor:"))
    array_input.append(num)
print("array original:", array_input)     
quick_sort(array_input, 0, num_items-1)
print("array ordenado:", array_input)

# exemplo de tuple unpacking

lista = [2, 7, 10, 18, 56]
index = 0
item_index = 3 # 18

print("atual", lista)

lista[index], lista[item_index]=lista[item_index], lista[index]

# então após essas alterações o valor de item_index vai parar na posição do index e vice e versa
print("após alteração", lista)