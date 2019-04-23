// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {

    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }

    insert(data) {
        let node = this;
        let newNode = new Node();
        newNode.data = data;

        while (node) {
            if (data < node.data) {
                if (node.left) {
                    node = node.left
                    continue
                } else {
                    node.left = newNode
                    break
                }
            } else {
                if (node.right) {
                    node = node.right
                    continue
                } else {
                    node.right = newNode
                    break
                }
            }
        }

    }

    contains(data) {
        let node = this;

        while (node) {
            if (node.data === data) {return node}
            if (data < node.data) {node = node.left}
            if (data > node.data) {node = node.right}
        }

        return null
    }


}

module.exports = Node;
