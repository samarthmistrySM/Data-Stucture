const DoublyNode = require("./DoublyNode")

class DoublyLinkedList{
    constructor() {
        this.head = null;
        this.tail =null;
        this.size = 0;
    }

    add(data){
        const newNode = new DoublyNode(data);

        if (this.head===null) {
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    addFirst(data){
        const newNode = new DoublyNode(data);
        if (this.head===null) {
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    addAfter(data,target){
        let curr = this.head;
        const newNode = new DoublyNode(data);
        while(curr.data != target){
            curr = curr.next;
        }
        curr.next.prev = newNode;
        newNode.prev = curr;

        newNode.next = curr.next;
        curr.next = newNode;

        this.size++;
    }

    deleteFirst(){
        if(this.head===null){
            throw new Error("Linkedlist is empty")
        }else{
            this.head = this.head.next;
            this.head.prev = null;
            this.size--;
        }
    }

    deleteLast(){
        if(this.head===null){
            throw new Error("Linkedlist is empty")
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.size--;
        }
    }

    deleteEle(data){
        if(this.head===null){
            throw new Error("Linkedlist is empty")
        }else{
            let prev = null;
            let curr = this.head;
            while(curr.data != data){
                prev = curr;
                curr=curr.next;
            }
            // curr.next.prev = curr.prev;
            curr.next.prev = curr.prev;
            prev.next = curr.next;
            // curr.prev.next = curr.next; 
        }
    }

    deleteAt(index){
        if(this.head===null){
            throw new Error("Linkedlist is empty")
        }else{
            let currentIdx = 0;
            let prev = null;
            let curr = this.head;
            while(currentIdx != index){
                prev= curr;
                curr = curr.next;
                currentIdx++;
            }
            // curr.next.prev = curr.prev;
            curr.next.prev = curr.prev;
            prev.next = curr.next;
            // curr.prev.next = curr.next; 
        }
    }

    search(data){
        let curr = this.head;
        let found = -1;
        let currentIdx = 0;
        while(curr!=null){
            if(curr.data === data){
                found = currentIdx;
                break;
            }
            curr=curr.next
            currentIdx++;
        }
        return (found);
    }

    printForward(){
        let result = ""
        let curr = this.head;
        while(curr != null){
            result += curr.data+" ";
            curr = curr.next;
        }
        console.log(result)
    }

    printBackwards(){
        let result = "";
        let curr = this.tail;

        while(curr != null){
            result+=curr.data+" ";
            curr = curr.prev;
        }
        console.log(result)
    }
}

module.exports = DoublyLinkedList