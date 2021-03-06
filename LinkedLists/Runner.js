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

}