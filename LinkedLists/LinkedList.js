class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFront(val) {
        // Creating a new node object with the value provided
        let new_node = new Node(val);
        // Checking to see if the current list does not have a head node (if the list is empty)
        // If the list is empty, place the new node as the head
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        // If the list is not empty, assign the head to be the next node to the new node (Blue arrow in picture above)
        new_node.next = this.head;
        // Then finally assign the new_node to be the new head of the list (Red Arrow in the picture above)
        this.head = new_node;
        return this;
    }

    removeFront() {
        if(!this.head) {
            return null;
        }

        let nodeToRemove = this.head;
        this.head = nodeToRemove.next;
        nodeToRemove.next = null;
        return this.head;        
    }

    front() {
        if(!this.head) {
            return null;
        }
        return this.head.data;
    }

}