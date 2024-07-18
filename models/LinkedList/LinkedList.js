import Node from "./Node.js";

class LinkedList {
    #head;
    #count;

    constructor(){
        this.#head = null
        this.#count = 0
    }

    add(value){
        let node = new Node(value)
        if(this.#head == null){
            this.#head = node
        }else{
            let current = this.#head
            while(current.next != null){
                current = current.next
            }
            current.next = node
        }

        this.#count++
    }

    getAt(index){
        if(index >= 0 && index<this.#count){
            let node = this.#head
            for(let i = 0; i < index && node != null; i++)
                node = node.next
            return node
        } 
        return
    }

    run(callback){
        let current = this.#head
        if(this.#head == null){
            return
        }else{
            while(current != null){
                callback(current)
                current = current.next
            }
        }
    }

    bubbleSort(){
        let current = this.#head
        for (let i = 0; i < this.#count - 1; i++) {
            for (let j = 0; j < this.#count - i - 1; j++) {
                if (current.getValue() > current.next.getValue()) {
                    let aux = current
                    // Intercambiar
                    current = current.next
                    current.next = aux
                }
            }
        }
        return arr;
    }

    mergeSort(){

    }

    radixSort(){

    }

    isEmpty(){
        return (this.#head == null) ? true:false
    }

    count(){
        return this.#count
    }

}