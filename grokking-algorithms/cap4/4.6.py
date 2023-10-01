from typing import List


def double_num(arr: List[int], i = 0):
  if((len(arr) - 1) == i):
    arr[i] = arr[i] * 2
    return arr
  arr[i] = arr[i] * 2
  return double_num(arr, i + 1)

print(double_num([1,2,3, 6, 7]))