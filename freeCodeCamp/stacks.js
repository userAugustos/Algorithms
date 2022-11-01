/* Stacks */

/* functions: psuh, pop, peek, length
in javascript, all arrays already come with stacks methods to treat this data structures.

/* So, as i said, in javascript all variables typed as an array, will have by vannila this methods
but, let's create your on, only for fun:
*/

class Stack {
  constructor() {
    this.count = 0; // here we keep tracking how many items are in the stack
    this.storage = {}; // well... obviously
  }

  // adds a value onto the end of the stack
  push(value) {
    this.storage[this.count] = value;
    this.count++; // increment count
  }

  // removes and returns the value at the end of the stack
  pop() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--; // we need to decrement count, since we are removing and finding the last value
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  size() {
    return this.count;
  }

  peek() {
    return this.storage[this.count - 1];
  }
}

const myStack = new Stack();

myStack.push(4);
myStack.push(2);
console.debug(myStack.peek()); // should return 2
console.debug(myStack.pop()); // should pop off and return 2
console.debug(myStack.peek()); // should return 4
