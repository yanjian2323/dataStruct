function partition (arr, l, r) {
	let v = arr[l];
	let j = l;
	// [l+1...j] < v
	// [j+1...i) >= v

	for (let i = l + 1; i <= r; i++) {
		if (arr[i] < v) {
			[arr[i],arr[j+1]] = [arr[j+1],arr[i]];
			j++;
		}
	}
	[arr[l],arr[j]] = [arr[j],arr[l]];
	return j;
}

function _partition2 (arr, l, r) {
	let v = arr[l];
	// [l+1...i) <= v
  	// (j,r] >= v
  	let i = l + 1,j = r;
	while(true) {
		while (i<=r && arr[i] < v) {
			i++;
		}
		while (i>=0 && arr[j] > v) {
			 j--;
		}
		if (i > j) {// i>=j也可以
			break;
		}
		[arr[i], arr[j]] = [arr[j], arr[i]];
		i++;
		j--;
	}
	// [arr[l], arr[j]] = [arr[j], arr[l]];
	// return j;
	// 或者可以这么写
	[arr[l],arr[i-1]] = [arr[i-1],arr[l]];
	return i - 1;
}

// 注意：不能用3路快速排序实现partition

function _findTopK (arr, l, r, top) {
	// 永远不会出现l>r的情况，思考为什么？
	if (l === r) return arr[l];
	let p = _partition2(arr, l, r);
	if (p === top) {
		return arr[p];
	} else if (top < p) {
		return _findTopK(arr, l, p - 1, top);
	} else {
		return _findTopK(arr, p + 1, r, top);
	}
}

// 查找arr第k小的元素,k是在arr的索引
// 这个算法找的是第k个元素，也就是有序的arr中k索引的元素
// 为了查找k位置的元素，查找的过程中对arr中某些元素进行了移动，使得arr变化了，是不是有更好的办法？直接找到k索引的元素，不改变arr
export default function findTopK (arr, top) {
	return _findTopK(arr, 0, arr.length - 1, top);
}