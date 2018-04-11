let _count = 0;//节点的数量
let _id;
// 实现最简单的并查集
class UnionFind {
	constructor (n) {
		_count = n;
		for (let i = 0; i < n; i++) {
			// 初始化每个节点都自成一组，相互之间不连接
			_id[i] = i;
		}
	}
	// 寻找p属于哪个组
	find (p) {
		return _id[p];
	}
	// p和q是否相连
	isConnected (p, q) {
		return this.find[p] === this.find[q];
	}
	// 连接2个节点
	union (p, q) {
		let pId = this.find[p];
		let qId = this.find[q];
		if (pId === qId) return;
		for (let i = 0; i < _count; i++) {
			if (_id[i] === pId) {
				_id[i] = qId;
			}
		}
	}
}