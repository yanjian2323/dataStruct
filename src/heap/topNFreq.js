import MinHeap from './minHeap';

// 查找top k大的元素，返回top k大的元素组成的数组
function topNFreq (arr, k) {
	if (k <= 0 || k > arr.length) return [];
	let ret = [];
	let minHeap = new MinHeap();
	let currMinValue;
	for (let el of arr) {
		// 最小堆已经放满
		if (minHeap.count() === k) {
			currMinValue = minHeap.getMinValue();
			if (el > currMinValue) {
				minHeap.extractMin();
				minHeap.insert(el);
			}
		} else {
			minHeap.insert(el);
		}
	}
	while (!minHeap.isEmpty()) {
		ret.push(minHeap.extractMin());
	}
	
	return ret;
}