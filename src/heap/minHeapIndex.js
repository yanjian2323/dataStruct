let data;//保存数据
let count;//数据个数
let indexs;//存放索引的堆
let revs;//反向索引，存储data[i]中i索引在indexs中的索引位置

function shiftUp (k) {
	// 注意：比较的是真实元素的值，交换的是索引
	while (k > 1 && data[indexs[k]] < data[indexs[parseInt(k/2)]]) {
		// 交换的是索引
		[indexs[k],indexs[parseInt(k/2)]] = [indexs[parseInt(k/2)],indexs[k]];
		revs[indexs[k]] = k;
		revs[indexs[parseInt(k/2)]] = parseInt(k/2);
		k = parseInt(k/2);
	}
}

function shiftDown (k) {
	while (2*k <= count) {
		let j = 2*k;
		if (j+1 >= count && data[indexs[j+1]] < data[indexs[j]]) {
			j += 1;
		}
		if (data[indexs[k]] <= data[indexs[j]]) break;
		[indexs[k],indexs[j]] = [indexs[j],indexs[k]];
		revs[indexs[k]] = k;
		revs[indexs[j]] = j;
		k = j;
	}
}

// 最小索引堆的实现
export default class MinHeapIndex () {
	constructor () {
		data = [];
		indexs = [];
		revs = [];
		count = 0;
	}
	// 在索引位置插入一个元素
	insert (i, el) {
		data[i] = el;
		indexs[count+1] = i;
		revs[i] = count+1;
		count++;
		shiftUp(count);
	}
	// 从最小堆中得到最小值
	extractMin () {
		let ret = data[indexs[count]];
		[indexs[1],indexs[count]] = [indexs[count],indexs[1]];
		revs[indexs[1]] = 1;
		revs[indexs[count]] = count;
		count--;
		shiftDown(1);

		return ret;
	}
	// 修改某个索引的值
	change (i, el) {
		data[i] = el;
		// 遍历找到i在indexs的位置,O(n)的复杂度，效率太低
		// for (let index = 0; index < indexs.length; index++) {
		// 	if (indexs[index] === i) {
		// 		shiftDown(index);
		// 		shiftUp(index);
		// 	}
		// }
		// 反向索引技术,O(1)的复杂度
		shiftDown(revs[i]);
		shiftUp(revs[i]);
	}
	getItem (i) {
		return data[i];
	}
}