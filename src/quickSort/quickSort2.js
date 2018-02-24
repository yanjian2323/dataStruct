/*
	2路快速排序的实现
*/
function _partition2 (arr, l, r) {
	let i = l + 1,j = r;
	let v = arr[l];
	while(true) {
		while (arr[i] < v) {
			i++;
		}
		while ( arr[j] > v) {
			 j--;
		}
		if (i > j) {
			break;
		}
		[arr[i], arr[j]] = [arr[j], arr[i]];
		i++;
		j--;
	}
	[arr[l], arr[j]] = [arr[j], arr[l]];
	return j;
}

function _quickSort2 (arr, l, r) {
	if (l >= r) {
		return;
	}
	let p = _partition2(arr, l, r);
	_quickSort2(arr, l, p - 1);
	_quickSort2(arr, p + 1, r);
}

function quickSort2 (arr) {
	_quickSort2(arr, 0, arr.length - 1);
}

export default quickSort2;