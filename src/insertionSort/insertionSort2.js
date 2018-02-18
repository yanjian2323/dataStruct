function insertionSort2 (arr) {
	for (let i = 1; i < arr.length; i++) {
		let t = arr[i];
		let j = i;
		for (; j >= 1 && t < arr[j - 1]; j--) {
			arr[j] = arr[j - 1];
		}
		arr[j] = t;
	}
}

export default insertionSort2;