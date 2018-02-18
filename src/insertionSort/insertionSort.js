function insertionSort (arr) {
	for (let i = 1; i < arr.length; i++) {
		for (let j = i; j >= 1 && arr[j] < arr[j - 1]; j--) {
			// 交换
			[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
		}
	}
}

export default insertionSort;