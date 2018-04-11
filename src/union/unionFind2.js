let _count = 0;//节点的数量
let _parent;
// 
class UnionFind2 {
	constructor (n) {
		_count = n;
		for (let i = 0; i < n; i++) {
			// 初始化每个节点的父节点都是自己，相互之间不连接
			_parent[i] = i;
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
		_parent[pRoot] = qRoot;
	}
}