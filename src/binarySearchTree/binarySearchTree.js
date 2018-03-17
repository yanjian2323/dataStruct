// 二分搜索树节点定义
class BinarySearchTreeNode {
	constructor (key, value) {
		this.key = key;
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

// 根节点
let rootNode;
// 节点数量
let count = 0;
function _insert (node, key, value) {
	if (node == null) {
		count++;
		return new BinarySearchTreeNode(key, value);
	}
	if (key === node.key) {
		node.value = value;
	} else if (key < node.key) {
		node.left = _insert(node.left, key, value);
	} else if (key > node.key) {
		node.right = _insert(node.right, key, value);
	}
	return node;
}

// 查看以node为根的二分搜索树中是否包含键值为key的节点, 使用递归算法
function _contain (node, key) {
	if (node == null) {
		return false;
	}
	if (node.key === key) {
		return true;
	} else if (key < node.key) {
		return _contain(node.left, key);
	} else if (key > node.key) {
		return _contain(node.right, key);
	}
}

// 在以node为根的二分搜索树中查找key所对应的value, 递归算法
// 若value不存在, 则返回NULL
function _search (node, key) {
	if (node == null) {
		return false;
	}
	if (node.key === key) {
		return node.key;
	} else if (key < node.key) {
		return _search(node.left, key);
	} else if (key > node.key) {
		return _search(node.right, key);
	}
}

function _preOrder (node) {
	if (node != null) {
		console.log(node.value);
		_preOrder(node.left);
		_preOrder(node.right);
	}
}

function _inOrder (node) {
	if (node != null) {
		_inOrder(node.left);
		console.log(node.value);
		_inOrder(node.right);
	}
}

function _postOrder (node) {
	if (node != null) {
		_postOrder(node.left);
		_postOrder(node.right);
		console.log(node.value);
	}
}

// 广序优先遍历迭代实现
function _levelOrder (node) {
	let queue = [];
	queue.push(node);
	// 队列里面还有节点
	while (queue.length) {
		let node = queue.pop();
		console.log(node.value);
		if (node.left) {
			queue.push(node.left);
		}
		if (node.right) {
			queue.push(node.right);
		}
	}
}

function _minimum (node) {
	// 非递归实现
	while (node !== null) {
		node = node.left;
	}
	return node;
	// 递归实现
	// if (node.left === null) {
	// 	return node;
	// }
	// return _minimum(node.left);
}

function _maximum (node) {
	// 非递归实现
	// while (node !== null) {
	// 	node = node.right;
	// }
	// return node;

	// 递归实现
	if (node.right === null) {
		return node;
	}
	return _maximum(node.right);
}

function _removeMin (node) {
	if (node.left === null) {
		let rightNode = node.right;
		node = null;
		count--;
		return rightNode;
	}
	node.left = _removeMin(node.left);
	return node;
}

function _removeMax (node) {
	if (node.right === null) {
		let leftNode = node.left;
		node = null;
		count--;
		return leftNode;
	}
	node.right = _removeMax(node.right);
	return node;
}

function _remove (node, key) {
	if (node === null) {
		return null;
	}
	if (key < node.key) {
		node.left = _remove(node.left, key);
		return node;
	} else if (key > node.key) {
		node.right = _remove(node.right, key);
		return node;
	}
	else { // key === node.key,找到了要删除的节点
		if (node.left === null) {
			let rightNode = node.right;
			node = null;
			count--;
			return rightNode;
		}
		if (node.right === null) {
			let leftNode = node.left;
			node = null;
			count--;
			return leftNode;
		}
		let successor = _minimum(node.right);
		successor.right = removeMin(node.right);
		successor.left = node.left;

		node = null;

		return successor;
	}
}

// 二分搜索树
class BinarySearchTree {
	constructor () {
		count = 0;
		rootNode = null;
	}
	// 节点数量
	size () {
		return count;
	}
	// 是否为空
	isEmpty () {
		return count === 0;
	}
	// 插入一个节点
	insert (key, value) {
		_insert(rootNode, key, value);
	}
	// 查看二分搜索树中是否存在键key
	contain (key) {
		_contain(rootNode, key);
	}
	// 在二分搜索树中搜索键key所对应的值
	search (key) {
		_search(rootNode, key);
	}
	// 前序遍历
	preOrder () {
		_preOrder(rootNode);
	}
	// 中序遍历
	inOrder () {
		_inOrder(rootNode);
	}
	// 后续遍历
	postOrder () {
		_postOrder(rootNode);
	}
	// 广度优先遍历
	levelOrder () {
		_levelOrder(rootNode);
	}
	// 找到最小值
	minimum () {
		let node = _minimum(rootNode);
		return node.key;
	}
	// 找到最大值
	maximum () {
		let node = _maximum(rootNode);
		return node.key;
	}
	// 删除最小节点，返回根节点
	removeMin () {
		return _removeMin(rootNode);
	}
	// 删除最大节点，返回根节点
	removeMax () {
		return _removeMax(rootNode);
	}
	// 从二叉树中删除key的节点
	remove (key) {
		return _remove(rootNode);
	}
}

export default BinarySearchTree;