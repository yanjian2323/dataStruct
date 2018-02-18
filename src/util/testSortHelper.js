// 生成n个元素的数组，范围从[rangeL, rangeR]的整数
export function generateRandomArray (n, rangeL, rangeR) {
	let arr = [];
	for (let i = 0; i < n; i++) {
		arr[i] = parseInt(Math.random() * ((rangeR - rangeL) + 1) + rangeL, 10);
	}
	return arr;
}

// 生成一个近乎有序的数组
export function generateNearlyOrderedArray (n, swapTimes) {
	let arr = [];
	for (let i = 0; i < n; i++) {
		arr.push(i);
	}
	for (let i = 0; i < swapTimes; i++) {
		let x = parseInt(Math.random() * n);
		let y = parseInt(Math.random() * n);
		[arr[x],arr[y]] = [arr[y],arr[x]];
	}
	return arr;
}

// 打印数组元素
export function printArray (arr) {
	console.log(...arr);
}

// 判断数组是否已经排好序
function isSorted (arr) {
	let size = arr.length;
	return !arr.some((item, i) => {
		if ((i < size - 1) && item > arr[i + 1]) {
			return true;
		}
	});
}

// 打印函数的执行时间
export function testSort (sortName, sortFn, arr) {
	let execBefore = new Date().getTime();
	sortFn(arr);
	let execAfter = new Date().getTime();
	if (!isSorted(arr)) {
		console.log('排序有误!');
		return;
	}
	let execTime = (execAfter - execBefore) / 1000;
	console.log(`${sortName}:${execTime}s`);
}

// 复制一个新数组
export function copyArray (arr) {
	return JSON.parse(JSON.stringify(arr));
}

// export generateRandomArray;