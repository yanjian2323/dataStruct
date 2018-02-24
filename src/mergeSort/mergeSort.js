function merge (arr, l, middle, r) {
	let aux = [];
	for (let i = l; i <= r; i++) {
		aux.push(arr[i]);
	}
	let i = l, j = middle + 1;
	for (let k = l; k <= r; k++) {
		if (i > middle) {
			arr[k] = aux[j - l];
		} else if (j > r) {
			arr[k] = aux[i - l];
		}
		else if (aux[i - l] > aux[j - l]) {
			arr[k] = aux[j - l];
			j++;
		} else {
			arr[k] = aux[i - l];
			i++;
		}
	}
}

function _mergeSort (arr, l, r) {
	if (l >= r) {
		return;
	}
	let middle = (l + r) / 2;
	_mergeSort(arr, l, middle);
	_mergeSort(arr, middle + 1, r);
	merge(arr, l, middle, r);
}

function mergeSort (arr) {
	_mergeSort(arr, 0, arr.length - 1);
}

export default mergeSort;