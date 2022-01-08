function makeCounter() {
  let count = 1;

  return () => {
    console.log(count++)
  };
}

const counter = makeCounter();
counter();
counter();
// more code

// Read the following code carefully. Will the JavaScript garbage collection mechanism garbage collect the value assigned to the variable count after the function counter is run on line 10?

// No, value `1` will not be garbage collected because global variable `counter` is pointing to a function that formed a closure around local variable (to the `makeCounter` function) `count` on line 2. Since we have more code after line 10, this means that we can call the `counter` function again, which will need to reference variable `count`, meaning its value cannot be garbage collected. The value `1` can be garbage collected if global variable `counter` is set to null or re-assigned to a different value.