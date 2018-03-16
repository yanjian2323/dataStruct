import MinHeap from './minHeap';

export function heap1 (arr) {
	let minHeap = new MinHeap();
	for (let item of arr) {
		minHeap.insert(item);
	}
	// console.log(minHeap.size());
	for (let i = 0; i < arr.length; i++) {
		arr[i] = minHeap.extractMin();
	}
	
}

export function heap2 (arr) {
	let minHeap = new MinHeap(arr);
	// console.log(minHeap.size());
	for (let i = 0; i < arr.length; i++) {
		arr[i] = minHeap.extractMin();
	}
	
}

function _shiftDown (k, arr, count) {
	while (2*k+1 < count) {
		let j = 2*k+1;
		if (j + 1 < count && arr[j + 1] > arr[j]) {
			j++;
		}
		if (arr[k] >= arr[j]) {
			break;
		}
		[arr[k],arr[j]] = [arr[j],arr[k]];
		k = j;
	}
}

// 在原来的数组上进行最小堆的操作
export function heap3 (arr) {
	// 对数组进行heapify
	for (let i = parseInt((arr.length - 1)/2); i >= 0; i--) {
		_shiftDown(i, arr, arr.length);
	}
	for (let i = arr.length - 1; i > 0; i--) {
		[arr[0],arr[i]] = [arr[i],arr[0]];
		_shiftDown(0, arr, i);
	}
}