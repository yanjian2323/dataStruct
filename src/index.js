import { generateRandomArray, generateNearlyOrderedArray, printArray, testSort, copyArray } from './util/testSortHelper';
import selectionSort from './selectionSort/selectionSort';
import insertionSort from './insertionSort/insertionSort';
import insertionSort2 from './insertionSort/insertionSort2';
import bubbleSort from './bubbleSort/bubbleSort';
import bubbleSort2 from './bubbleSort/bubbleSort2';
import mergeSort from './mergeSort/mergeSort';
import quickSort from './quickSort/quickSort';
import quickSort2 from './quickSort/quickSort2';
import quickSort3 from './quickSort/quickSort3';
import { heap1, heap2, heap3 } from './heap/heap';
import { heap1, heap2, heap3 } from './heap/heap2';

import { binarySearch, binarySearchByRecursion } from './binarySearchTree/binarySearch';
import { component, path, shortestPath } from './graph/test';

let n = 1000000;
// let arr = generateRandomArray(n, 1, n);
// let arr = [5,6,7,8,1,2,3,4];
// let arr = [14,13,12,11,10,9,8,7,6,5,4,3];
// let arr = generateNearlyOrderedArray(n, 1000);
let arr2 = copyArray(arr);
let arr3 = copyArray(arr);

// testSort('selectionSort', selectionSort, arr);
// testSort('insertionSort', insertionSort, arr);
// testSort('insertionSort2', insertionSort2, arr2);
// testSort('bubbleSort', bubbleSort, arr);
// testSort('bubbleSort2', bubbleSort2, arr2);
testSort('mergeSort', mergeSort, arr);
// testSort('quickSort', quickSort, arr);
// testSort('quickSort2', quickSort2, arr2);
// testSort('quickSort3', quickSort2, arr3);
// testSort('heap1', heap1, arr);
// testSort('heap2', heap2, arr2);
// testSort('heap3', heap3, arr3);
// let index = binarySearchByRecursion(arr, 40);
// console.log(index);
// console.log(arr[index]);
// printArray(arr);


// console.log('联通分量：',component.count());
// path.printPath(6);
// shortestPath.printPath(6);