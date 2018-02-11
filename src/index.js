import { generateRandomArray, printArray, testSort } from './util/testSortHelper';
import selectionSort from './selectionSort/selectionSort';

let n = 100000;
let arr = generateRandomArray(n, 1, n);

testSort('selectionSort', selectionSort, arr);
// printArray(arr);
