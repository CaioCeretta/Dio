## High order functions / First class functions

### 1. First class functions (The "Status")

A programming language is said to have first-class functions if it treats functions like any other variable. If we can
do the following with a string or a number, we can also do it with a function

• *Assign them to variables*: `const myFunc = () => console.log("Hello")`
• *Pass them as a argument* to other functions*
• *Return them* for the functions.
• *Store them in data structures* like arrays or objets

In short, "First-Class" is a property of the language itself. In javascript, we can treat a function like it was a string
or a number

#### Example

```js

// Assigning to a variable (function expression)
const sum = (a, b) => a + b;

// Storing in an array
const operations = [sum, (a, b) => a - b];

// Accessing and executing
console.log(operations[0](10, 5)) // 15
```

### High Order Functions (HOF) (The "Action")

A HOF is a specific functions that operates on other functions. To qualify as a high-order, a function must do at least
one of two things:

1. *Take one or more functions as arguments*: e.g. filter, map, addEventListener
2. *Return a function as its result*.

While "first-class" describes the language's capabilities, higher-order describes the logic of the code we write

#### Examples

**1. Receiving a function as argument**

The `.map()` method is one of the most classic examples of HOF nowadays

```js
const numbers = [1, 2, 3, 4];

// Map is a HOF because it receives double as argument
const double(n) => n * 2
const result = numbers.map(double)

console.log(result) // [2, 4, 6, 8]
```

**2. Returning a function**

This is very common to create custom functions with closures

```js

// `createGreeting`is a HOF because it RETURNS a function

function createGreeting(prefix) {
  return function(name) {
    return `${prefix}, ${name}`;
  }
}

const goodMorning = createGreeting("Good Morning")
const goodNight = createGreeting("Good Night")

console.log(goodMorning("Caio")) // Good Morning, Caio
console.log(goodNight("Caio")) // Good night, Caio
```

This example works like this: 

1. The Factory (HOF definition)

When we define createGreeting(prefix), we are not creating a final greeting, but yet, a factory of functions

• The outer functions receive the `prefix`
• Returns a new anonymous function that expects a `name`
• The secret is: The internal functions "remembers" the value of the prefix, even if the outer function has finished
executing


2. The configuration (instantiation)

Here is where the "memory" is created

```js
const goodMorning = createGreeting("Good Morning");
```

At this moment, goodMorning becomes exactly

```js
function (name) {
  return `Good morning, ${name}` // Good morning was stored in the scope
}
```

3. The execution
  
Now we have a specialized function that only needs one parameter

`console.log(goodMorning("Caio"))


*Third Example:* 

```js
// 1. Simple Functions (The Rules)
const hasMinimumCharacters = (value) => value.length >= 5;
const isEmailValid = (value) => value.includes("@");

// 2. The high order function (the validator)
// It receives a "rule" and returns a function that warns if the field is valid
const createValidator = (rule, errMessage) => {
  return (value) => {
    const passedInTheRule = rule(value);
    return passedInTheRule ? "Valid" : "Error ${errMessage}";
  };
};

// 3. Creating specific validators
const validatePassword = createValidator(
  hasMinimumCharacters,
  "The password must have at least 5 characters",
);
const validateEmail = createValidator(isEmailValid, "Email is invalid");

// 4. Practical use

console.log(validatePassword("123")); // Error: Password must have at least 5 digits
console.log(validateEmail("caio@test")); // Valid

```

**Why is this a HOF?**: The function create validator is a HOF because it receives a function (rule) as argument and
returns a new function (the one that returns the message)

**Real Benefit (Clean Code)**: Without the HOF, we would have to repeat the `if/else` structure and the format of the
error message in every places. with HOF, we:

• Isolate the logic: The rule of "what is an e-mail" is kept separated of the logic of "how to show the error"
• Gained legibility: The final code (`validatePassword("123")`) is very easy to read and understand what is happening

**Anticipated configuration**: We can configure the function behavior in a part of the code and use it in a complete part


## Closures

In JS, we have three different kids of scope, before ES6, we had only two (global scope and function scope). With the 
inclusion of `let` and `const`, JS introduced the block scope. Example: 

```js
function init() {
  const example = "This is the variable";

  return function () {
    console.log("1 - The value of the variable is: " + example);

    return function () {
      console.log("2 - The value of the variable is:: " + example);

      return function () {
        console.log("3 - The value of the variable is: " + example);
      };
    };
  };
}

const initFn1 = init();
const initFn2 = initFn1();
const initFn3 = initFn2();

initFn3();
```

Here we are:

1. When calling the init() function. We are defining a variable `example` and returning another function
2. That returned function, will print the value of `example` defined in the scope of the init() and return another function
3. Same steps for the second inner function
4. Same steps for the third inner functions
   
However, we can notice, that every inner function kept the scope of the outer function because it was enclosed by the
block scope

But this has some problems

When the closures get too extensive, the code will become harder to maintain and harm its legibility, and more pure
straight to the point functions end up being a better option. Example

**Pure Functions**

A pure function follow two specific rules:

*Determinism*: For the same argument, it will always return the same result (it do not depend on external variables that
may change)
*No side effects* 