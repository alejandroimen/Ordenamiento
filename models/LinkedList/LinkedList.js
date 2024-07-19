import Node from "./Node.js";

class LinkedList {
    #head;
    #count;

    constructor(){
        this.#head = null;
        this.#count = 0;
    }

    add(value){
        let node = new Node(value);
        if(this.#head == null){
            this.#head = node;
        }else{
            let current = this.#head;
            while(current.next != null){
                current = current.next;
            }
            current.next = node;
        }
        this.#count++;
    }

    getAt(index){
        if(index >= 0 && index < this.#count){
            let node = this.#head;
            for(let i = 0; i < index && node != null; i++)
                node = node.next;
            return node;
        } 
        return;
    }

    run(callback){
        let current = this.#head;
        if(this.#head == null){
            return;
        }else{
            while(current != null){
                callback(current);
                current = current.next;
            }
        }
    }

    bubbleSort(){
        if (this.#head == null) return;

        let swapped;
        let current;
        do {
            swapped = false;
            current = this.#head;

            while (current.next != null) {
                if (current.value > current.next.value) {
                    // Intercambiar valores
                    let temp = current.value;
                    current.value = current.next.value;
                    current.next.value = temp;
                    swapped = true;
                }
                current = current.next;
            }
        } while (swapped);
    }

    isEmpty(){
        return (this.#head == null) ? true : false;
    }

    count(){
        return this.#count;
    }

    // MergeSort
    mergeSort() {
        this.#head = this.#mergeSortRec(this.#head);
    }

    #mergeSortRec(head) {
        if (head == null || head.next == null) {
            return head;
        }

        const middle = this.#getMiddle(head);
        const nextOfMiddle = middle.next;

        middle.next = null;

        const left = this.#mergeSortRec(head);
        const right = this.#mergeSortRec(nextOfMiddle);

        const sortedList = this.#sortedMerge(left, right);
        return sortedList;
    }

    #getMiddle(head) {
        if (head == null) {
            return head;
        }

        let slow = head;
        let fast = head;

        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    #sortedMerge(a, b) {
        let result = null;

        if (a == null) {
            return b;
        } else if (b == null) {
            return a;
        }

        if (a.getValue() <= b.getValue()) {
            result = a;
            result.next = this.#sortedMerge(a.next, b);
        } else {
            result = b;
            result.next = this.#sortedMerge(a, b.next);
        }

        return result;
    }

    // RadixSort
    radixSort() {
        const max = this.#getMax();

        for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
            this.#countSort(exp);
        }
    }

    #getMax() {
        let max = this.#head.getValue();
        let current = this.#head.next;

        while (current != null) {
            if (current.getValue() > max) {
                max = current.getValue();
            }
            current = current.next;
        }
        return max;
    }

    #countSort(exp) {
        let output = new Array(this.#count);
        let count = new Array(10).fill(0);
        let current = this.#head;

        while (current != null) {
            count[Math.floor(current.getValue() / exp) % 10]++;
            current = current.next;
        }

        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        current = this.#head;
        while (current != null) {
            output[count[Math.floor(current.getValue() / exp) % 10] - 1] = current.getValue();
            count[Math.floor(current.getValue() / exp) % 10]--;
            current = current.next;
        }

        current = this.#head;
        let i = 0;
        while (current != null) {
            current.value = output[i];
            current = current.next;
            i++;
        }
    }
}

export default LinkedList;
