function merge (arr, l, middle, r) {
	let aux = [];
	for (let i = l; i <= r; i++) {
		aux.push(arr[i]);
	}
	// i左边数组当前比较的元素
	// j后边数组当前比较的元素
	// k表示arr数组中下标位置,不断的往k索引放址元素，然后k++
	let i = l, j = middle + 1;
	for (let k = l; k <= r; k++) {
		if (i > middle) {
			arr[k] = aux[j - l];
			j++;
		} else if (j > r) {
			arr[k] = aux[i - l];
			i++;
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
	let middle = parseInt((l + r) / 2);
	_mergeSort(arr, l, middle);
	_mergeSort(arr, middle + 1, r);
	// 输出,便于了解整个递归的过程
	console.log('left:', arr.slice(l, middle+1),'right:', arr.slice(middle+1, r+1));
	// 当第一个数组最后一个元素<=第二个数组第一个元素的时候不需要排序，否则才需要
	// if (arr[middle] > arr[middle+1]) {
		merge(arr, l, middle, r);
	console.log('currentSort:', arr);
	// }
}

function mergeSort (arr) {
	_mergeSort(arr, 0, arr.length - 1);
}

export default mergeSort;