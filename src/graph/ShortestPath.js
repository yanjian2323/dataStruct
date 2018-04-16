
let _g;
let _s;
let _visited;
let _from;
let _order;//s到w的最短路径值是多少
// 寻找到s点的最短路径
export default class ShortestPath{
	constructor (graph, s) {
		_g = graph;
		_s = s;
		_visited = Array(graph.V()).fill(false);
		_from = Array(graph.V()).fill(-1);
		_order = Array(graph.V()).fill(-1);
		// 定义一个队列
		let queue = [];
		queue.push(s);
		_visited[s] = true;
		_order[s] = 0;
		while (queue.length) {
			let v = queue.shift();
			for (let i of graph.iterator(v)) {
				if (!_visited[i]) {
					queue.push(i);
					_visited[i] = true;
					_from[i] = v;
					_order[i] = _order[v] + 1;
				}
			}
		}
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