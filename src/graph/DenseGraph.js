// 顶点的个数
let _m;
// 边的个数
let _n;
// 是否是有向图
let _directed;
// 用数组来存储每个节点相连的边
let _g = [];
// 稠密图，用邻接矩阵的方式来实现
export default class DenseGraph {
	constructor (m) {
		_m = m;
		_n = 0;
		for (let i = 0; i < _m; i++) {
			_g[i] = [];
			for (let j = 0; j < _m; j++) {
				_g[i][j] = false;
			}
		}
	}
	// 给2个节点建立一条边
	addEdage (x, y) {
		if (x < 0 || x >= _m) return;
		if (y < 0 || y >= _m) return;
		if (this.hasEdage(x, y)) {
			return;
		}
		_g[x][y] = true;
		if (!_directed) {
			_g[y][x] = true;
		}
		_n++;
	}
	// 是否有边,O(1)的复杂度
	hasEdage (x, y) {
		return _g[x][y];
	}
	iterator (v) {
		if (v < 0 || v >= _m) return;
		let arr = [];
		for (let i = 0; i < _g[v].length; i++) {
			if (_g[v][i]) {
				arr.push(i);
			}
		}
		return arr;
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