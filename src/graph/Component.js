// 深度优先遍历
function dfs (v) {
	_visited[v] = true;
	_id[v] = _ccount;
	let iterator = _graph.iterator(v);
	// console.log(`${v}:`,iterator.join(','));
	for (let i of iterator) {
		if (!_visited[i]) {
			dfs(i);
		}
	}
}

let _graph;
let _visited;//顶点是否被遍历过
let _id;//顶点属于哪个联通分量
let _ccount = 0;//联通分量
export default class Component {
	constructor (graph) {
		_graph = graph;
		_visited = Array(graph.V()).fill(false);
		_id = Array(graph.V()).fill(-1);
		// 遍历每个顶点
		for (let i = 0; i < graph.V(); i++) {
			if (!_visited[i]) {
				dfs(i);
				_ccount++;
			}
		}
	}
	// 返回联通分量的个数
	count () {
		return _ccount;
	}
	// 2个点是否相连
	isConnected (x, y) {
		if (x < 0 || x >= _graph.V()) return false;
		if (y < 0 || y >= _graph.V()) return false;
		return _id[x] === id[y];
	}
}