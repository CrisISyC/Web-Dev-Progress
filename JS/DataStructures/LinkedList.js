class Node{
  constructor(data){
    this.data = data
    this.next = null;
  }
}


class LinkedList{

  constructor(){
    this.size = 0;
    this.head = null;
  }

  add(element){

    let node = new Node(element);
    let current;

    if(this.head == null){
      this.head = node;
      this.size++
    }else{

      current = this.head;

      while(current.next){
        current = current.next
      }

      current.next = node
      this.size++

    }
  }

  remove(element){

    let current = this.head;

    if(this.size===0){
      console.log("List Empty")
    }else{

      while(current.next){

        if(current.next.data == element){

          
          

        }

      }
    }


  }
  printLinkedList(){

    let current = this.head;
    if(this.size===0){

      console.log("List Empty")

    }else{  
      console.log(current.data)
      while(current.next){

        current = current.next;
        console.log(current.data)

      }
    }
  }

  findLowestValue(){

    let current = this.head;
    let lowest = current.data;

    if(current == null){
      console.log("List Empty")
    }else{

      
      while(current.next){

        if(current.data<lowest){
          lowest = current.data
        }

        current = current.next;
      }
    }

    console.log(lowest)

  }
}



let linkedList = new LinkedList();

linkedList.add(12)
linkedList.add(10)
linkedList.add(2)

//linkedList.printLinkedList()

linkedList.add(3)

//linkedList.printLinkedList()  

linkedList.findLowestValue();