function bubbleSort2 (arr) {
	let n = arr.length;
	let swapped = true;
	do{
		swapped = false;
		for (let i = 0; i < n - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				swapped = true;
			}
		}
		n--;
	}while(swapped)
}

export default bubbleSort2;