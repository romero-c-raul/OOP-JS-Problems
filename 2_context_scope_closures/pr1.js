

const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName() {return this.firstName + this.lastName},
};

console.log(person.fullName());

// Read the following code carefully. What do you think is logged on line 7. Try to answer the question before you run the code.

/*
- On line 7, we access the property `fullName` of the object that variable `person` is pointing to.
- On line 4, we can see that the value of property `fullName` is the string concatenation of the return values obtained from `this.firstName` and `this.lastName`. In this case, the implicit context and value of `this` is the calling object `person`. 
  - This means that `this.firstName` evaluates to `'Rick'` and `this.lastName` evaluates to `'Sanchez'`

- The output on line 7 is `'Rick Sanchez'`;

- WRONG -> The output is `NaN`. This is because the implicit execution contexts we have talked about in the course are in relation to FUNCTIONS and METHODS only. The `this` is line 4 resolves to the execution context at the top level, which for node is the empty object.
- Since this empty object does not have the properties `firstName` and `lastName`, `this.firsName` and `this.lastName` both evaluate to `undefined`. When we try to concatenate two `undefined` values, the result is `NaN`
*/