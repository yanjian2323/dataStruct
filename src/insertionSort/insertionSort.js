function insertionSort (arr) {
	for (let i = 1; i < arr.length; i++) {
		for (let j = i; j >= 1 && arr[j] < arr[j - 1]; j--) {
			// 交换
			[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
		}
	}
}

function partition(arr, l, r) {
	let v = arr[l];
	// [l+1,i] < v
	// [i + 1, j) >= v
	let i = l;
	for (let j = l; j <= r; j++) {
		if (arr[j] < v) {
			[arr[i+1],arr[j]] = [arr[j],arr[i+1]];
			i++;
		}
	}
	[arr[l],arr[i]] = [arr[i],arr[l]];
	return i;
}
// 从数组中寻找第top k的元素
function findTopK(arr, l, r, k) {
	if (l >= r) return null;
	let p = partition(arr, l, r);
	// 找到了
	if (p - l + 1 === k) {
		return arr[p-l];
	}else if (p - l + 1 > k) {
		// 从右边继续寻找
		return findTopK(arr, p + 1, r, p - l + 1 - k);
	} else {// 左边寻找
		return findTopK(arr, l, p - 1, k);
	}
}

findTopK([1,2,3,4,5], 0, 4, 3);

export default insertionSort;