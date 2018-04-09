// 深度优先遍历
function dfs (v) {
	_visited[v] = true;
	let iterator = _g.iterator(v);
	for (let i of iterator) {
		if (!_visited[i]) {
			_from[i] = v;
			dfs(i);
		}
	}
}

let _g;
let _visited;//顶点是否被遍历过
let _from;
let _s;
// 寻路算法,寻找其他点到s的路径
export default class Path {
	constructor (graph, s) {
		if (s < 0 || s >= graph.V()) return;
		_g = graph;
		_s = s;
		_visited = Array(graph.V()).fill(false);
		_from = Array(graph.V()).fill(-1);
		dfs(s);
	}
	// 从s到w是否有路径
	hasPath (w) {
		if (w < 0 || w >= _g.V()) return false;
		return _visited[w];
	}
	// 查询从s点到w点的路径
	path (w) {
		if (w < 0 || w >= _g.V()) return [];
		let p = w;
		let path = [];
		let ret = [];
		while(p !== -1) {
			path.push(p);
			p = _from[p];
		}
		while (path.length) {
			ret.push(path.pop());
		}
		return ret;
	}
	// 打印从s到w的路径
	printPath (w) {
		let path = this.path(w);
		let i = 0;
		let strPath = '';
		for (let p of path) {
			strPath += p;
			if (i < path.length - 1) {
				strPath += '->';
			}
			i++;
		}
		console.log(strPath);
	}
}