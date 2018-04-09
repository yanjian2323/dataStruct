import SparseGraph from './SparseGraph';
import DenseGraph from './DenseGraph';
import Component from './Component';
import Path from './Path';
import ShortestPath from './ShortestPath';
import data1 from './testG1';
import data2 from './testG2';

function addEdages (g, data) {
	for (let [x,y] of data) {
		g.addEdage(x, y);
	}
}

let s1 = new SparseGraph(data1.n, false);
addEdages(s1, data1.edage);
export let component = new Component(s1);
export let path = new Path(s1, 0);
export let shortestPath = new ShortestPath(s1, 0);