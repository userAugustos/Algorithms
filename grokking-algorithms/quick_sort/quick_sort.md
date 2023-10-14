##### Let's dive into QuickSort

As i goes into studying it, i just know that i can understand something, in a way, that i didn't actually understand it, so i need to dive deep in my reads and try to expalin it, so i can really learn



**Basic Approach**

```python
def quicksort(arr):
	if(len(arr) < 2):
		return arr

  pivot = arr[len(arr) // 2] # we catch the pivot in the middle of the array


  left_arr = []
  right_arr = []

	for i in arr:
		if(i < pivot):
			left_arr.append(i)
		if(i > pivot):
			right_arr.append(i)
	
	return quicksort(left_arr) + [pivot] quicksort(right_arr)

```
So in this basic approach, we define two arrays, to be: left = less than the pivot; rigth: bigger than the pivot
Then we go on with the algorithm:
	If we receive an array like: [1,3,2]

first of pivot it's gonna be `3`

left_arr it's empty
right_arr it's empty

when the for loop starts, we gonna go with the first index value which is 1 [index 0]

so `if(1 < 3)` then puts 1 in the left_arr
so now, left_arr is `lengt 1` [1]

second loop, goes to the second index value which is 3 [index 1]

and 3 is equal to 3, so does nothing and keep in the loop

thrid loop, goes to the third index value which is 2 [index 2]

so `if(2 < 3)` then puts 2 in the left_arr
so now, left_arr is `lengt 2` [1,2]

So now, as we get to the last loop of the arr, and 3 isn't bigger or smaller than 3, we get to your recursion step, where we pass *left_arr + pivot + rigth_arr* that in your case, as you can see from the explanation before, is: `[1,2] + [3] + []`

Se now, we gonna entry the hole loop again, for each side of the array, until it reaches an array with 1 of length, and it will come back, regruping from the stack

#### But this is not the best solution!

We have a solution where we make a partition on the array, and change positions in the same array, consuming less memory and going FAST!!

