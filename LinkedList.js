class Node {
    constructor(value, id, nextId) {
        this.value = value;
        this.id = id;
        this.nextId = nextId;
    }
}
//เพิ่ม node เข้าไปใน linkedlist
class LinkedList {
    constructor() {
        this.nodes = {};
    }

    addNode(node) {
        this.nodes[node.id] = node;
    }
    //ฟังค์ชั่นรวม value
    sumValues() {
        let sum = 0;
        let currentNode = this.nodes[1];

        while (currentNode !== undefined) {
            sum += parseInt(currentNode.value);
            currentNode = this.nodes[currentNode.nextId];
        }

        return sum;
    }
}

const linkedList = new LinkedList();
const data = [
    {
        value: '11',
        id: 1,
        nextId: 2
    },
    {
        value: '19',
        id: 2,
        nextId: 3
    },
    {
        value: '32',
        id: 3,
        nextId: 4
    },
    {
        value: '64',
        id: 4,
        nextId: 5
    },
    {
        value: '128',
        id: 5,
        nextId: null
    }

];

//วนรอบ Linked List เข้าไปใน node
data.forEach((nodeData) => {
    const node = new Node(nodeData.value, nodeData.id, nodeData.nextId);
    linkedList.addNode(node);
});

console.log(linkedList.sumValues());

