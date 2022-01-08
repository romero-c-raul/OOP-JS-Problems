function newStack() {
  const stack = [];

  return {
    push(element) {
      stack.push(element);
    },

    pop() {
      return stack.pop();
    },

    printStack() {
      stack.forEach(element => console.log(element));
    },
  };
}

stackTest = newStack();
stackTest.push('Hello World');
stackTest.push(5);
stackTest.printStack();
stackTest.pop();
stackTest.printStack();