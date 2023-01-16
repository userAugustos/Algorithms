class MySets {
  constructor() {
    this.collection = [];
  }

  has = (element) => {
    return this.collection.indexOf(element) !== -1; // if the element is not in the array, indexOf() it's gonna return -1
  };

  values = () => {
    return this.collection;
  };

  add = (element) => {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  };
}

const sets = new MySets();

console.debug('has 2', sets.has(2));

sets.add(5);
console.debug('has 5',sets.has(5));

console.debug('hole arr',sets.values());
