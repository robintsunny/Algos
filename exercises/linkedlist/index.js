// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        if (!this.head) {
            this.head = new Node(data, null)
        } else {
            const node = new Node(data, this.head)
            this.head = node
        }
    }


    size() {
        if (!this.head) {
            return 0
        } else if (!this.head.next) {
            return 1
        }
        
        let sz = 1;
        let node = this.head;

        while (node.next) {
            sz++
            node = node.next
        }

        return sz
    }

    getFirst() {
        return this.head
    }

    getLast() {
        let node = this.head;

        while (node.next) {
            node = node.next
        }

        return node
    }

    clear () {
        this.head = null;
    }

    removeFirst () {
        this.head = this.head.next
    }

    removeLast () {
        if (!this.head) {
            return
        }

        if (!this.head.next) {
            this.head = null; 
            return
        }

        let node = this.head;
        while (node.next.next) {
            node = node.next
        }

        node.next = null;
    }

    insertLast(data) {
        if (!this.head) {
            this.head = new Node(data)
            return
        }
        
        let node = this.head
        while (node.next) {
            node = node.next
        }

        node.next = new Node(data);
    }

    getAt(n) {
        if (!this.head) {
            return null 
        }

        let count = 0;
        let node = this.head;
        
        while (node.next) {
            if (count === n) {break}
            node = node.next
            count++
        }

        if (count !== n) {
            return null
        }

        return node
    }

    insertAt(data, n) {
        if (n === 0) {
            this.head = new Node(data, this.head)
            return
        } 

        if (n > this.size()) {
            n = this.size();
        }

        let node = this.getAt(n)
        let prevNode = this.getAt(n-1)

        prevNode.next = new Node(data, node)
    }

    removeAt(n) {

        if (!this.head) {
            return
        }
        if (n === 0) {
            this.head = this.head.next;
            return
        }
        if (n+1 > this.size()) {
            return
        }

        const node = this.getAt(n)
        const prevNode = this.getAt(n-1)

        prevNode.next = node.next;
        node.next = null;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;

        while (node) {
            fn(node, counter);
            node = node.next
            counter++
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
