import MaxHeap from './maxHeap';

export function heap1 (arr) {
	let maxHeap = new MaxHeap();
	for (let i = 0; i < arr.length; i++) {
		maxHeap.insert(arr[i]);
	}
	for (let n = arr.length - 1; n >= 0; n--) {
		arr[n] = maxHeap.extractMax();
	}
}

export function heap2 (arr) {
	let maxHeap = new MaxHeap(arr);
	for (let n = arr.length - 1; n >= 0; n--) {
		arr[n] = maxHeap.extractMax();
	}
}

function _shiftDown (arr, n, k) {
	while (2*k + 1 < n ) {//还有左节点
		// 左节点索引是2*k+1
		// 右节点索引是2*k+2
		let j = 2*k + 1;
		if (j + 1 < n && arr[j + 1] > arr[j]) {
			j++;
		}
		if (arr[k] >= arr[j]) {
			break;
		}
		[arr[k], arr[j]] = [arr[j], arr[k]];
		k = j;
	}
}

// 数组原地进行最大堆，不额外开辟新空间
export function heap3 (arr) {
	// 数组进行heapify
	for (let i = parseInt((arr.length - 1 - 1) / 2); i >= 0; i--) {
		_shiftDown(arr, arr.length, i);
	}
	// 开始排序
	for (let n = arr.length - 1; n > 0; n--) {
		[arr[0], arr[n]] = [arr[n], arr[0]];
		_shiftDown(arr, n, 0);
	}
}