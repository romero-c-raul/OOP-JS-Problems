// Explain why this method will not return the desired object? Try fixing this problem by taking advantage of JavaScript lexical scoping rules.

const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(number => {
      return `${this.name} ${number}`;
    });
  },
};

console.log(franchise.allMovies());

/*
Desired Output:
[
  'How to Train Your Dragon 1',
  'How to Train Your Dragon 2',
  'How to Train Your Dragon 3'
]

- The reason we are not obtaining the desired output, is because the context for the callback function for `map` is being implicitly set to the global object by JavaScript.
- To fix this issue we can either save the context to a variable using the `let self = this` fix
- And we can also use an arrow function instead of a function expression for the callback, which will resolve the value of `this` following lexical scoping rules.
- We can also bind the callback function to the context using `bind` and `this` (this is not based on lexical scoping rules though)
*/

