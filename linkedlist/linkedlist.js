// Construct Single Node
class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }


    // Insert first node
    insertFirst (data) {
        this.head = new Node(data, this.head)
        this.size++
    }


    // Insert last node
        insertLast(data){
            let node = new Node(data)
            let current;

            if (!this.head) {
                this.head = node

            }else {
                current = this.head
                while (current.next) {
                    current = current.next
                }

                current.next = node
            }
            this.size++;

        }

    // INsert at index
    insertAt(data, index) {
        if(index >0 && index > this.size) {
            return;
        }
        if (index == 0 ) {
            this.insertFirst(data)
            return
        }

        const node = new Node(data);
        let current, previous;

        current = this.head
        let count = 0;

        while (count < index) {
            previous = current;
            count++;
            current = current.next
        }

        node.next = current;
        previous.next = node;
        this.size++
    }



    // Get at index


    // Remove at index



    // Clear list



    // Print list data
    printListData() {
        let current = this.head

        while (current) {
            console.log(current.data)
            current = current.next
        }

    }

}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(1500);
ll.insertLast(400)
ll.insertAt(500,0)


ll.printListData()


ll.val()