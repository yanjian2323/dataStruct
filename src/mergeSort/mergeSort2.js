function merge (arr, l, mid, r) {
	// 分别定义要合并的2个数组
	let arrL = [], arrR = [];
	let (let i = l; i <= r; i++) {
		if (i <= mid) {
			arrL.push(arr[i]);
		} else {
			arrR.push(arr[i]);
		}
	}
	let i = 0, j = 0;
	for (let k = l; k <= r; k++) {
		if (i > mid) {
			arr[k] = arr[j++];
		} else if (j > r) {
			arr[k] = arr[i++];
		}else if (arr[i] > arr[j]) {
			arr[k] = arr[j++];
		} else {
			arr[k] = arr[i++];
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
	// 当第一个数组最后一个元素<=第二个数组第一个元素的时候不需要排序，否则才需要
	if (arr[middle] > arr[middle+1]) {
		merge(arr, l, middle, r);
	}
}

function mergeSort (arr) {
	_mergeSort(arr, 0, arr.length - 1);
}

export default mergeSort;