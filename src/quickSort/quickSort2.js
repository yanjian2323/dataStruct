/*
	2路快速排序的实现
*/
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
// 更改边界的定义，相应的代码可能会稍有不同
function partition22(arr, l, r) {
  let randomIndex = parseInt(Math.random() * ((r - l) + 1) + l, 10);
  [arr[l], arr[randomIndex]] = [arr[randomIndex],arr[l]];
  let v = arr[l];
  // [l+1, i] <=v
  // [j, r] >=v
  let i = l;
  let j = r + 1;
  while(true){
    while(i+1 <=r && arr[i+1]<v) i++;
    while(j-1 >= 0 && arr[j-1]>v) j--;
    if(i+1>=j-1) break;//注意： 这个地方不是i>=j
    [arr[i+1],arr[j-1]] = [arr[j-1],arr[i+1]];
    i++;
    j--;
  }
  [arr[l],arr[i]] = [arr[i],arr[l]];
  return i;
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