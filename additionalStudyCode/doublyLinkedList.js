
class Node {
    constructor(key, count, pre = null, next = null) {
        this.keyword = key;
        this.hitCount = count;
        this.pre = pre;
        this.next = next;
    }

    // 필요 메서드 : delete()
    delete(linkedList) {
        if (this.pre === null) {
            linkedList.head = linkedList.head.next;
        } else if (this.next === null) {
            linkedList.tail = linkedList.tail.pre;
        } else {
            this.next.pre = this.pre;
            this.pre.next = this.next;
        }
        linkedList.size--;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /* addFirst(key, count) {
        this.head = new Node(key, count, null, this.head);
        if (this.head.next !== null) {
            this.head.next.pre = this.head;
        } else {
            this.tail = this.head;
        }
        this.size++;
    } */

    // newNode는 pre와 next가 null 인 상태
    addFirst(newNode) {
        // newNode의 next는 현재 head
        // head newNode가 되어야 한다.
        newNode.next = this.head;
        if (this.head !== null) {
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.size++;
    }


    addLast(key, count) {
        this.tail = new Node(key, count, this.tail, null);
        if (this.tail.pre !== null) {
            this.tail.pre.next = this.tail;
        } else {
            this.head = this.tail;
        }
        this.size++;
    }

    removeLast() {
        this.tail = this.tail.pre;
        this.tail.next = null;
        this.size--;
    }

    getSize() {
        return "list size: "+this.size;
    }

    printList() {
        let cur = this.head;
        while (cur !== null) {
            console.log("key: "+cur.keyword+" / count: "+cur.hitCount);
            cur = cur.next;
        }
    }
}

/* const list = new DoublyLinkedList();
list.addFirst("apple", 1);
list.addLast("google", 2);
list.addFirst("naver", 3);
console.log(list.getSize());
list.printList(); */

const list = new DoublyLinkedList();
const node1 = new Node("apple", 1);
const node2 = new Node("google", 2);
const node3 = new Node("naver", 3);
list.addFirst(node1);
list.addFirst(node2);
list.addFirst(node3);
console.log(list.getSize());
list.printList();

export { Node };
export { DoublyLinkedList };


