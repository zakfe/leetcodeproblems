class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}
const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')

a.next = b
b.next = c
c.next = d

                                // A -> B -> C -> D -> NULL
var reverseLinkedList = (head) => {
    let previous = null
    let current = head
    
    while (current != null) {
        const next = current.next
        current.next = previous
        previous = current
        current = next
        
        
    }
    return previous
}


reverseLinkedList(a)