
let data = [];
let count = 0;
function shiftUp (k) {
	while (k > 1 && data[parseInt(k/2)] > data[k]) {
		[data[parseInt(k/2)],data[k]] = [data[k],data[parseInt(k/2)]];
		k = parseInt(k/2);
	}
}

function shiftDown (k) {
	// 还有左节点
	while (2*k <= count) {
		let j = 2*k;
		if (j+1 <=count && data[j+1]<data[j]) {
			j++;
		}
		if (data[k] <= data[j]) {
			break;
		}
		[data[k],data[j]] = [data[j],data[k]];
		k = j;
	}
}

/*最小堆*/
export default class MinHeap {
	constructor (arr) {
		data = [];
		count = 0;
		if (arr && arr.length) {
			this.init(arr);
		}
	}
	init (arr) {
		for (let [index,item] of arr.entries()) {
			data[index + 1] = item;
		}
		count = arr.length;
		// 进行heapify操作
		for (let i = count / 2; i >= 1; i--) {
			shiftDown(i);
		}
	}
	insert (el) {
		data[count + 1] = el;
		count++;
		shiftUp(count);
	}
	extractMin () {
		let minItem = data[1];
		[data[1],data[count]] = [data[count],data[1]];
		count--;
		shiftDown(1);
		return minItem;
	}
	size () {
		return count;
	}
	isEmpty () {
		return count === 0;
	}
}