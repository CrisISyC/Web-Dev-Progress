class Node{
  constructor(data){
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}


class DoublyLinkedList{

  constructor(){
    this.size = 0;
    this.head = null;
    this.tail = null;
  }


  add(element){

    let node = new Node(element);
    let current = this.head

    if(this.size === 0){
      
      this.head = node
      this.tail = node
      this.size++ 

    }else{

      node.prev = this.tail
      this.tail.next = node
      this.tail = node
      
    }
  }

  printDoublyLinkedList(){

    let current = this.head

    if(this.size === 0){
      console.log("List Empty")
    }else{

      while(current != null){
        console.log(current.data)
        current = current.next
      }
    }
  }
}



let doublyLinkedList = new DoublyLinkedList()

doublyLinkedList.add(1)
doublyLinkedList.add(2)
doublyLinkedList.add(10)
doublyLinkedList.add(9)


doublyLinkedList.printDoublyLinkedList()
console.log(doublyLinkedList.head)

console.log(doublyLinkedList.tail)
