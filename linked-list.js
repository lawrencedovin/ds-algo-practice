class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    traverse() {
        let currentNode = this.head;
        while(currentNode) {
            console.log(currentNode.val);
            currentNode = currentNode.next;
        }
    }
    search(val) {
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.val === val) return true;
            currentNode = currentNode.next;
        }
        return false;
    }
    append(val) {
        const newNode = new Node(val);
        this.tail.next = newNode;
        this.tail = newNode;
    }
}

class Node {
    constructor(val, next=null) {
        this.val = val
        this.next = next
    }
}

// antNode -> beeNode -> caterpillarNode
let caterpillarNode = new Node("caterpillar");
let beeNode = new Node("bee", caterpillarNode);
let antNode = new Node("ant", beeNode);

// antNode is at the Head
let insects = new LinkedList();
insects.head = antNode;
insects.tail = caterpillarNode;
// console.log(insects.head);
// insects.traverse();

// For inserting at Head example
// let dragonflyNode = new Node("dragonfly", antNode);
// insects.head = dragonflyNode
// // console.log(insects.head);
// insects.traverse();

// console.log(insects.search('burger'));
// console.log(insects.search('caterpillar'));

insects.append("dragonfly");
insects.traverse();
