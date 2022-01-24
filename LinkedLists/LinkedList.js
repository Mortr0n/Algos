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

    findSum() {      
        // We first have to tell our train attendant that we want them to start at the front of the train
        let runner=this.head;
        let sum=0;  

        if(this.head===null) {
            return null;
        }
        
        // Since a Linked List does not know how many nodes is within it, we will not be able to use a for loop to itereate, instead we'll use a while
        // Also, we need to tell them when to stop otherwise they will just run off the end of the train
        while(runner !== null){
            // Since the runner is set to the current node, its value will be equal to the value of the node they are currently on
            sum+=runner.data;
            // tell our attendant to move to the next car
            runner=runner.next;
        }
        return sum;
    }

    contains(value) {
        let runner=this.head;
        if(this.head===null) {
            return false;
        }
        
        while(runner!==null) {
            if(value!==runner.data){
                runner=runner.next;
            } else {
                return true;
            }
        }
        return false;
    }

    length() {
        let runner = this.head;
        let count=0;
        if(this.head===null) {
            return count;
        }
        
        while(runner!==null) {
            count++;
            runner = runner.next
        }
        return count;
    }

    display() {
        let runner = this.head;
        let myList = "";
        if(this.head===null) {
            myList = "Nothing to show here!";
            return myList;
        }
        do {
            myList += `Node Value = ${runner.data} /n`;
            runner = runner.next;
        } while(runner!==null);
        return myList;
    }
}