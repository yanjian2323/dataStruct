// 选择排序
const selectionSort = (arr) => {
	let len = arr.length;
	let minIndex;
	for (let i = 0; i < len; i++) {
		minIndex = i;
		for (let j = i + 1; j < len; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		// 交换位置
		[arr[minIndex],arr[i]] = [arr[i],arr[minIndex]];
	}
};

export default selectionSort;