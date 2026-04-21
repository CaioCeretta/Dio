## Hoisting

### Definition

Hoisting is JS behavior where variable declarations and functions are processed before the code execution, as they were
"moved" to the scope top

### How does it work

During JS compilation stage

• Register variables (`let`, `var`, `const`)
• Register functions (`function`)
• Defines the scope before executing line per line

### Examples

```js
// 1. `var` (hoisting with value `undefined`)
console.log(a) // undefined
var a = 10;

// Equivalent to
var a;
console.log(a);
a = 10;
```


## Currying

Technique of transforming a function with n parameters into a sequence of functions that receive one parameter at a time

The main idea is that, instead of

`fn(a, b, c)`, we write `fn(a)(b)(c)`

### Examples

```js
// 1. Normal Function
function sum (a, b) {
  return a + b
}

sum(2, 3) // 5

// 2. Function with currying

function sum(a) {
  return function (b) {
    return a + b
  }
}

sum(2)(3) // 5

// 3. Arrow function example

const sum = a => b => a + b

sum(2)(3) // 5

// 4. Practical utilization (reuse)

const multiply = a => b => a * b;

const double = multiply(2);
const triple = multiply(3);

double(2) // 10
triple(5) // 15

```

### Advantages:

• Function Reuse
• Code more modular
• Easies function composition
• Widely used in functional programming

### Observation

Currying is different from Partial Application, even though they are similar

### Summary

• Curry transforms f(a, b) -> f(a)(b)
• Allowing the creation of specialized functions
• Widely used on reusable and small functions

## Closure x Currying

A closure is when a function remembers variables from the scope where it was created, even after that outer function has
finished.

### Example

```js

function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  }
}

const fn = outer();

fn();
```

Here,  when we assign outer() to fn, we are assigning to it, the `inner()` function that has been returned.
`inner()` still has access to `counter` after `outer()` has finished. The "life cycle would be"

1. Executes `outer()`
2. `outer()` creates `count = 0`
3. `outer()`  returns the function inner
4. `fn` receives the returned function.

That memory of outer variables = closure

They are used for

• private state
• callbacks
• even thandlers
• factories
• memoization

### Currying

Currying transforms a function with multiple arguments into nested functions taking one argument at a time, like

`function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

add(1)(2)(3); // 6`

### Why Closures are different from currying?

**Closures are about scope memory**

A function remembers outer variable

**Currying is aboutr function structure**
f(a, b, c) becomes f(a)(b)(c)

### Important link: Currying often uses closures

Curried functions usually rely on closures to remember earlier arguments

```js
function multiply(a) {
  return function (b) {
    return a * b; // closure remembers a
  };
}

const double = multiply(2);
double(5); // 10
```
Here:
• Closure:
  A backpack that remembers stuff from where it was packed
• Currying:
  Breaking one form into multiple smaller forms filled step by step

## Types and variables





