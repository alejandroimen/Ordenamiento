class Node {
    value;
    next;

    constructor(value){
        this.value =value
        this.next = null
    }

    getValue(){
        return this.value;
    }
}

export default Node;