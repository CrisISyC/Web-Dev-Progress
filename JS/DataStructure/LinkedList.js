class Node{

    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class LinkedList{

    constructor() {
        this.head = null; // Primer nodo de la lista
        this.size = 0;    // Tamaño de la lista
      }

      // Agregar un elemento al final
  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode; // Si la lista está vacía, el nuevo nodo es la cabeza
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode; // Agregar al final
    }
    this.size++;
  }
  // Mostrar todos los elementos
  display() {
    let current = this.head;
    let result = "";
    while (current) {
      result += `${current.data} -> `;
      current = current.next;
    }
    console.log(result + "null");
  }
}


// Ejemplo de uso
const list = new LinkedList();

// Agregar elementos
list.add(10);
list.add(20);
list.add(30);

// Mostrar la lista
console.log("Elementos en la lista:");
list.display();
