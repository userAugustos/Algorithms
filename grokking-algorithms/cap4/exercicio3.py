from typing import List

def high_value(arr: List[int], index: int = 0, value = 0):
    if index == len(arr) - 1:
        print('reached highest value')
        return value

    if value < arr[index]:
        value = arr[index]
    
    return high_value(arr, index + 1, value)
        
print(high_value([1,14,4,8,6, 3]))