/*
3路快速排序的实现
*/

function _partition3 (arr, l, r) {
	let v = arr[l];
	let lt = l, gt = r + 1, i = lt + 1;
	while(i < gt) {
		if (arr[i] < v) {
			[arr[lt + 1], arr[i]] = [arr[i], arr[lt + 1]];
			lt++;
			i++;
		}else if (arr[i] === v) {
			i++;
		} else { // arr[i] > v
			[arr[i], arr[gt - 1]] = [arr[gt - 1], arr[i]];
			gt--;
		}
	}
	[arr[l], arr[lt]] = [arr[lt], arr[l]];
	return [lt, gt];
}

function _quickSort3 (arr, l, r) {
	if (l >= r) {
		return;
	}
	let arr_p = _partition3(arr, l, r);
	_quickSort3(l, arr_p[0] - 1);
	_quickSort3(arr_p[1], r);
}

function quickSort3 (arr) {
	_quickSort3(arr, 0, arr.length - 1);
}

export default quickSort3;