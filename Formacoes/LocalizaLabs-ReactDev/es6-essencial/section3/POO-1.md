## Object Orientation with JS

### Everything is an object:

In JS, almost every value in JS, even the ones stored in simple variables, have the behavior of an objectr.

To make it clear, let's separate the variables in two groups

#### 1. Primitive (simple variables)

When we create variable of types, like `string`, `number` or `boolean`, they are not objects, only values in memory

`const idade = 25`
`const name = "Caio"`

But here is the secret: In the moment that we try to access any property or the __proto__ of these variables. JS performs
a process called *Autoboxing*

JS thinks something like: "Oops, they want to access a property on a string? Strings don't have properties, so i'll create
a temporary `new String("Caio")` object just so they can get what they need, and then i'll discard that object.

That's why if we type in the console:

```js
let name = "Ana";
console.log(name.__proto__);
```

it will show us the String prototype, because JS "pretended" that variable was an object for a split second

#### 2. Objects and Arrays (Reference)

If our variable hodls an object, an array, or a function, it is born with ___proto__ already there, permanently.

```js
let list = [10, 20];
console.log(list.__proto__); // Points directly to Array.prototype
```

### Prototype

We can think of prototype as the "original mold" or "blueprint" of an object.

While _proto__ is the "umbilical cord" (the link that every variable has), *Protype* is the real object that is on the
other side of that cord, where the functions and methods are stored.

#### Factory Analogy

Imagine that we have a car factory

1. The Plant (Prototype): Is the technical drawing that says that every car should have a `honk()` method and a property
  `car`. The blueprint only exists in one place
2. The Car (instance/variable): The car that leaves the assembly line. It does not hold the full blueprint inside of it
  (this would occupy too much space), but it has a link (__proto__) to that blueprint.

#### Why does JS uses it? (Memory Saving)

If we create 1.000 strings in a page, JS does not create 1.000 copies of the function `.toUpperCase()` this would destroy
the browser's memory.

Instead:

. The function .toUpperCase() exists only in one place, the `String.prototype`
. Our 1.000 string variables only know the way (via __proto__) to reach there and use this function when needed.

#### Difference between __proto__ and prototype

. prototype: It is a property that only constructor functions (like Array, String, Object or own classes) own. It is the
"tool box" that they will give to their children
. __proto__: The property that the object created owns. It is the link that points to the parent's "tool box"

```js
// Practical Example
const lista = [1, 2, 3];

console.log(lista.prototype); // undefined (the array is the children. it does not have the mold)
console.log(lista.__proto__); // Here is the chest! (it is the same as Array.prototype)
```

#### Prototype chain

Javascript is persistent. If we ask for something that do not exist in the code, it starts "ascending the ladder"

1. Looks into the object: "Do you have the function `.toString()`? - No.
2. It looks inside the __proto__ (ex: Array.prototype): "Do you have `.toString()`? - No.
3. It moves up one other step for the parent's proto (Object.prototype): "Do you have `toString()`?" - Yes! Found it.

If it reaches the top (that is the prototype `Object`) and do not find anything, then it returns `null` or throws an
error.

#### Summary

`Prototype` is the central method repository. It allows that different objects share the same functions without having to
duplicate them, making JS a language very efficient in terms of memory