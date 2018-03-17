/*
	二分查找,必须是有序的数组
*/

// 二分查找迭代的实现
export function binarySearch (arr, el) {
	let l = 0, r = arr.length - 1;
	while (l <= r) {
		// 这个写法容易溢出
		// let mid = parseInt((l + r) / 2);

		// 找到中间的下标
		let mid = l + parseInt((r - l) / 2);
		if (arr[mid] === el) {
			return mid;
		}
		if (el < arr[mid]) {
			r = mid - 1;
		}else {
			l = mid + 1;
		}
	}
	return -1;
}

function _binarySearchByRecursion (arr, l, r, el) {
	if (l > r) {
		return -1;
	}
	let mid = l + parseInt((r - l) / 2);
	if (arr[mid] === el) {
		return mid;
	}
	if (el < arr[mid]) {
		r = mid - 1;
	} else {
		l = mid + 1;
	}
	return _binarySearchByRecursion(arr, l, r, el);
}

// 二分查找递归的实现
export function binarySearchByRecursion (arr, el) {
	return _binarySearchByRecursion(arr, 0, arr.length - 1, el);
}