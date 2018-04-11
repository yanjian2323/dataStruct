let _count = 0;//节点的数量
let _parent;//_parent[i], i表示节点，_parent[i]表示i节点的父节点
let _rank;//_rank[i]表示以i为根节点的节点的层数
// 基于size对并查集的优化
class UnionFind4 {
	constructor (n) {
		_count = n;
		for (let i = 0; i < n; i++) {
			// 初始化每个节点的父节点都是自己，相互之间不连接
			_parent[i] = i;
			_rank[i] = 1;
		}
	}
	// 寻找p属于哪个组
	find (p) {
		while (p != _parent[p]) {
			p = _parent[p];
		}
		return p;
	}
	// p和q是否相连
	isConnected (p, q) {
		return this.find[p] === this.find[q];
	}
	// 连接2个节点
	union (p, q) {
		// 找到p和q的根节点
		let pRoot = this.find[p];
		let qRoot = this.find[q];
		if (pRoot === qRoot) return;
		if (_rank[pRoot] > _rank[qRoot]) {
			_parent[qRoot] = pRoot;
		} else if (_rank[pRoot] < _rank[qRoot]) {
			_parent[pRoot] = qRoot;
		} else { //_rank[pRoot] === _rank[qRoot]
			_parent[pRoot] = qRoot;
			_rank[qRoot] += 1;
		}
	}
}