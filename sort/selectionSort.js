let vector = [2, 6, 5, 64, 25, 12, 22, 11];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    // Find the minimum element in unsorted array
    for (let nextIndex = i + 1; nextIndex < arr.length; nextIndex++) {
      if (arr[nextIndex] < arr[min]) {
        min = nextIndex;
      }
    }

    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
}

console.debug(selectionSort(vector));
