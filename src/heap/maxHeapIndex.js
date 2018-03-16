let data = [];
// 索引堆
let indexs = [];
// 反向索引
let rev = [];
let count = 0;

function _shiftUp (k) {
	while (k > 1) {
		if (data[indexs[k]] > data[indexs[parseInt(k/2)]]) {
			[indexs[k],indexs[parseInt(k/2)]] = [indexs[parseInt(k/2)],indexs[k]];
			rev[indexs[k]] = k;
			rev[indexs[parseInt(k/2)]] = parseInt(k/2);
			k = parseInt(k/2);
		} else {
			break;
		}
	}
}

function _shiftDown (k) {
	while (2*k <= count) {
		let j = 2*k;
		if (j+1<=count && data[indexs[j+1]] > data[indexs[j]]) {
			j++;
		}
		if (data[indexs[k]] >= data[indexs[j]]) {
			break;
		}
		[indexs[j],indexs[k]] = [indexs[k],indexs[j]];
		rev[indexs[j]] = j;
		rev[indexs[k]] = k;
		k = j;
	}
}

// 索引堆
class MaxHeapIndex () {
	constructor () {
		indexs = [];
		data = [];
		rev = [];
		count = 0;
	}
	insert (i, item) {
		i += 1;
		data[i] = item;
		indexs[count + 1] = i;
		rev[i] = count + 1;
		count++;
		_shiftUp(count);
	}
	extractMax () {
		let ret = data[indexs[1]];
		[indexs[1], indexs[count]] = [indexs[count], indexs[1]];
		rev[indexs[1]] = 1;
		rev[indexs[count]] = 0;
		count--;
		_shiftDown(1);
		return ret;
	}
	extractMaxIndex () {
		let ret = indexs[1] - 1;
		[indexs[1], indexs[count]] = [indexs[count], indexs[1]];
		rev[indexs[1]] = 1;
		rev[indexs[count]] = 0;
		count--;
		_shiftDown(1);
		return ret;
	}
	getItem (i) {
		return data[i+1];
	}
	changeItem (i, item) {
		data[i + 1] = item;
		// for (let n = 1; n <= count; n++) {
		// 	if (indexs[n] === i) {
		// 		_shiftDown(n);
		// 		_shiftUp(n);
		// 		return;
		// 	}
		// }
		_shiftUp(rev[i]);
		_shiftDown(rev[i]);
	}
}