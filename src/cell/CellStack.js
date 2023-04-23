class CellStack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length == 0;
  }

  penult() {
    return this.items[this.items.length - 2];
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}
