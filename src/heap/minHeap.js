// 本类实现一个最小堆

let data;
let count;

function shiftUp (k) {
	while (k > 1 && data[k] < data[parseInt(k/2)]) {
		// 和父节点交换位置
		[data[k],data[parseInt(k/2)]] = [data[parseInt(k/2)],data[k]];
		k = parseInt(k/2);
	}
}

function shiftDown (k) {
	// 还有左节点
	while (2*k <= count) {
		let j = 2*k;
		// 还有🈶右节点
		if (j+1 <= count && data[j+1] < data[j]) {
			j = j + 1;
		}
		if (data[k] <= data[j]) break;
		[data[j],data[k]] = [data[k],data[j]];
		k = j;
	}
}
export default class MinHeap {
	constructor () {
		data = [];
		count = 0;
	}
	insert (el) {
		data[count+1] = el;
		count++;
		shiftUp(count);
	}
	extractMin () {
		let ret = data[1];
		[data[1],data[count]] = [data[count],data[1]];
		count--;
		shiftDown(1);

		return ret;
	}
	getMinValue () {
		return data[1];
	}
	count () {
		return count;
	}
	isEmpty () {
		return count === 0;
	}
}