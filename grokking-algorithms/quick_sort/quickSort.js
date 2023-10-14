
const arr = [1,56,738,2,10,7,28,18]

function partition(arr, start, end) {
	let pivot = arr[end] // 18
	let index = start // 1

	for (let iter = 0; start <= end; iter++) {
		if(arr[iter] <= pivot){
			let temp = arr[index]
			arr[index] = arr[iter]
			arr[iter] = temp
			index+=1
		}
	}
	let temp = arr[index]
	arr[index] = pivot
	arr[end] = temp
	return index
}


function quickSort(arr, start, end) {
	if(start >= end)return

	let pivot = partition(arr, start, end)
	console.debug('current state:', arr)
	quickSort(arr, start, pivot-1)
	quickSort(arr, pivot+1, end)
}

console.debug(quickSort(arr, 0, arr.length-1 ))