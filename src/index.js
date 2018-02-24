import { generateRandomArray, generateNearlyOrderedArray, printArray, testSort, copyArray } from './util/testSortHelper';
import selectionSort from './selectionSort/selectionSort';
import insertionSort from './insertionSort/insertionSort';
import insertionSort2 from './insertionSort/insertionSort2';
import bubbleSort from './bubbleSort/bubbleSort';
import bubbleSort2 from './bubbleSort/bubbleSort2';
import mergeSort from './mergeSort/mergeSort';
import quickSort from './quickSort/quickSort';
import quickSort2 from './quickSort/quickSort2';

let n = 1000000;
let arr = generateRandomArray(n, 1, n);
// let arr = generateNearlyOrderedArray(n, 1000);
let arr2 = copyArray(arr);

// testSort('selectionSort', selectionSort, arr);
// testSort('insertionSort', insertionSort, arr);
// testSort('insertionSort2', insertionSort2, arr2);
// testSort('bubbleSort', bubbleSort, arr);
// testSort('bubbleSort2', bubbleSort2, arr2);
// testSort('mergeSort', mergeSort, arr);
testSort('quickSort', quickSort, arr);
testSort('quickSort2', quickSort2, arr2);
// printArray(arr);