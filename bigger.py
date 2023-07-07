def findBiggerSmaller(arr, i, bigger, smaller):
  if (i == len(arr)):
    return bigger, smaller
  
  if(arr[i] > bigger):
    bigger = arr[i]
  if(arr[i] < smaller):
    smaller = arr[i]
  
  return findBiggerSmaller(arr, i + 1, bigger, smaller)

arr = [2,3,4,18]

print(findBiggerSmaller(arr, 0, arr[0], arr[0]))
  
  
  
    