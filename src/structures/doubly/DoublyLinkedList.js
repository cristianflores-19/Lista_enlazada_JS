const DoublyNode = require("./DoublyNode");

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  addFirst(value) {
    const newNode = new DoublyNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
    this._size++;
  }

  addLast(value) {
    const newNode = new DoublyNode(value);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this._size++;
  }

  removeFirst() {
    if (this.head === null) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    } else {
      this.head.previous = null;
    }
    this._size--;
    return value;
  }

  removeLast() {
    if (this.tail === null) {
      return null;
    }
    const value = this.tail.value;
    this.tail = this.tail.previous;
    if (this.tail === null) {
      this.head = null;
    } else {
      this.tail.next = null;
    }
    this._size--;
    return value;
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (this._isSameValue(current.value, value)) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  countOccurrences(value) {
      let count = 0;
      let current = this.head;
      
      while (current !== null) {
        if (this._isSameValue(current.value, value)) {
          count++;
        }
        current = current.next;
      }
      
      return count;
    }

	clean() {
	    let nodosEliminados = 0;
	    let current = this.head;

	    while (current !== null) {
	      let next = current.next; 
	      
	      current.next = null;     
	      current.prev = null;     
	      
	      current = next;          
	      nodosEliminados++;       
	    }

	    this.head = null;
	    this.tail = null;
	    this._size = 0; 

	    return nodosEliminados;
	  }

	  reverseInPlace() {
	      if (this.head == null) return;

	      let current = this.head;

	      while (current != null) {
	        let oldNext = current.next || null;
	        let oldPrev = current.previous || null; 

	        current.next = oldPrev;
	        current.previous = oldNext; 

	        current = oldNext;
	      }

	      let oldHead = this.head;
	      this.head = this.tail;
	      this.tail = oldHead;
	    }

		removeDuplicates() {
		    if (this._size <= 1) return 0; 

		    let borrados = 0; 
		    let current = this.head;

		    while (current !== null) {
		      let runner = current.next;
		      while (runner !== null) {
		        if (this._isSameValue(current.value, runner.value)) {
		          let toRemove = runner;
		          runner = runner.next;

		          if (toRemove.next !== null) {
		            toRemove.next.previous = toRemove.previous;
		          } else {
		            this.tail = toRemove.previous;
		          }

		          if (toRemove.previous !== null) {
		            toRemove.previous.next = toRemove.next;
		          }
		          
		          this._size--;
		          borrados++; 
		        } else {
		          runner = runner.next;
		        }
		      }
		      current = current.next;
		    }
		    return borrados; 
		  }
		  
  size() {
    return this._size;
  }

  isEmpty() {
    return this._size === 0;
  }

  toForwardString() {
    let out = "[";
    let current = this.head;
    while (current !== null) {
      out += String(current.value);
      if (current.next !== null) {
        out += ", ";
      }
      current = current.next;
    }
    out += "]";
    return out;
  }

  toBackwardString() {
    let out = "[";
    let current = this.tail;
    while (current !== null) {
      out += String(current.value);
      if (current.previous !== null) {
        out += ", ";
      }
      current = current.previous;
    }
    out += "]";
    return out;
  }

  _isSameValue(left, right) {
    return left === right;
  }
}

module.exports = DoublyLinkedList;
