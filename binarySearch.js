const arr = [1,3,8,14,25,29,36,42, 52];

function binarySearch(arr, left, right, value) {
	if(left > right	) {
		console.debug(arr)
		return -1
	}

	let m =  Math.round((left + right) / 2)

	if(arr[m] == value){
		return `index: ${m} value ${arr[m]}`
	}

	if(arr[m] < value) {
		return binarySearch(arr, m + 1, right, value)
	}else {
		return binarySearch(arr, left, m -1, value)
	}
}

console.debug(binarySearch(arr,0, arr.length -1, 42))