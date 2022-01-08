// Returns a function that when invoked calls the given function and applies the given context
function myBind(func, context) {
  return function (...args) {        
    if (context === undefined) {            // If a context is not given, we want to call function with default parameters
      return func.apply(null, args)
    } else {                                // If a context is given, we simply do what we have done before
      return func.apply(context, args);
    }
  };
}

function myBind(func, context, ...partialArgs) {
  return function (...args) {
    let allArgs = partialArgs.concat(args);
    return func.apply(context, allArgs);
  };
}

/*
- We have two scenarios: either `myBind` passes a context with arguments or it simply uses the arguments passed as default arguments
*/
