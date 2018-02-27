class MaxHeap {
	constructor (arr) {
		this.data = [];
		this.count = 0;
		if (arr && arr.length) {
			this.init(arr);
		}
	}
	init (arr) {
		for (let i = 0; i < arr.length; i++) {
			this.data[i + 1] = arr[i];
		}
		this.count = arr.length;
		// 把数组变成最大堆，这个过程叫过heapify
		for (let i = parseInt(this.count / 2); i >= 1; i--) {
			this.shiftDown(i);
		}
	}
	shiftUp (k) {
		let index = parseInt(k/2);
		while (k > 1 && this.data[index] < this.data[k]) {
			[this.data[index], this.data[k]] = [this.data[k], this.data[index]];
			k = index;
			index = parseInt(k/2);
		}
	}
	shiftDown (k) {
		while (2*k <= this.count) {// 还有左节点就一直循环
			let j = 2*k;
			if (j+1<=this.count && this.data[j+1] > this.data[j]) {
				j++;
			}
			// 父节点大于子节点，直接跳出循环
			if (this.data[k] >= this.data[j]) {
				break;
			}
			[this.data[k], this.data[j]] = [this.data[j], this.data[k]];
			k = j;
		}
	}
	insert (item) {
		this.data[this.count + 1] = item;
		this.count++;
		this.shiftUp(this.count);
	}
	extractMax () {
		let ret = this.data[1];
		[this.data[this.count], this.data[1]] = [this.data[1], this.data[this.count]];
		this.count--;
		this.shiftDown(1);

		return ret;
	}
}

export default MaxHeap;