import { generateRandomArray, generateNearlyOrderedArray, printArray, testSort, copyArray } from './util/testSortHelper';
import selectionSort from './selectionSort/selectionSort';
import insertionSort from './insertionSort/insertionSort';
import insertionSort2 from './insertionSort/insertionSort2';

let n = 100000;
// let arr = generateRandomArray(n, 1, 5);
let arr = generateNearlyOrderedArray(n, 10);
let arr2 = copyArray(arr);

testSort('selectionSort', selectionSort, arr);
// testSort('insertionSort', insertionSort, arr);
testSort('insertionSort2', insertionSort2, arr2);
// printArray(arr2);
