// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     return [1, 2, 3].map(function(number) {
//       return `${this.name} ${number}`;
//     }.bind(this));
//   },
// };

const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(function(number) {
      return `${this.name} ${number}`;
    }, this);
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

- To hard bind the callback function, we can call the Function method `bind` on the callback function and pass the current context as an argument using `this`.
- We can also pass a second argument to the `map` function that sets the execution context of the callback using `this`

*/


