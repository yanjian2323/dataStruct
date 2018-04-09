// 顶点的个数
let _m;
// 边的个数
let _n;
// 是否是有向图
let _directed;
// 用数组来存储每个节点相连的边
let _g = [];
// 稀疏图，用邻接表的方式来实现
export default class SparseGraph {
	constructor (m, directed) {
		_m = m;
		_n = 0;
		for (let i = 0; i < m; i++) {
			// 初始化节点相连的边是空数组
			_g[i] = [];
		}

	}
	// 给2个节点建立一条边
	addEdage (x, y) {
		if (x < 0 || x >= _m) return;
		if (y < 0 || y >= _m) return;
		_g[x].push(y);
		// 是无向图
		if (!_directed) {
			_g[y].push(x);
		}
		_n++;
	}
	// 判断2个节点是否有边，O(n)的复杂度
	hasEdage (x, y) {
		if (x < 0 || x >= _m) return false;
		if (y < 0 || y >= _m) return false;
		let arr = _g[x];
		for (let i of arr) {
			if (i === y) {
				return true;
			}
		}
		return false;
	}
	iterator (v) {
		if (v < 0 || v >= _m) return;
		return _g[v];
	}
	// 返回顶点的个数
	V () {
		return _m;
	}
	// 返回边的数量
	E () {
		return _n;
	}
}