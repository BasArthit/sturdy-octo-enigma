class ListNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    costructor(head = null){
        this.head = head;
    }
}
let node1 = new ListNode(5);
let node2 = new ListNode(6);

node1.next = node2;
let list = new LinkedList(node1);
document.write(list.head.next.data);
console.log(list);
