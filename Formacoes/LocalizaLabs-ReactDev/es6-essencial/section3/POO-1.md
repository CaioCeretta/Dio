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

### Inheritance

Inheritance in JS is based on prototypes. Prototype is where all our object configuration is stored. Every time we create
a variable in JS it has that `__proto__` reference, that points to the prototype of the type we've created.

That type is called a constructor. 

Example:

```js
'use strict';

const myText = "Hello Prototype!";

myText.split(""); // Where does split comes from? This declaration is the same as

console.log(myText.__proto__.split)
// f split() { [ native code ]}
/* When we create the const myText it is using the String's constructor function, and this constructor function loads a
prototype that contains the split function

which means that

myText.__proto__.split is equal to String.prototype.split

and

myText.constructor === String
*/

// __proto__ -> prototype -> constructor

```
// _____________________________________________________________________________________________________________________

What is we create a function Animal() {} and closole .log that Animal.constructor

it will log something as  ƒ Function() { [native code ]}. But why does it says that its constructor is the Function?

That is because of the prototype chain

ƒ Animal.constructor -> ƒ Function -> Function.prototype.constructor -> ƒ Object() {} -> Object.prototype = null

if we add a property `this.qtdePatas = 4` to that class and say that `cachorro = new Animal()`, if we console `cachorro`
it will return

`Animal { qtdePatas: 4 }`


Basically, when creating the variable cachorro, its __proto__ is created and it points to the Animal class.
cachorro.__proto__ -> Animal.prototype -> Function.prototype.

### new keyword

What happens when we call new?

1 - A new object is created, inheriting Animal.prototype
2 - The Animal constructor function is called with the specified arguments and with `this` linked to the object created.
3 - In case the constructor function have a explicit return, it will be respected. Otherwise, it will return the created
object.

The explicit return would be something as

```js

function Pessoa(name) {
  this.name = name;

  return {
    name: "Caio"
  }
}
```

In case we do something like that, and create a variable p2, for example. What would be returned, even when creating a
new instance, is not actually what is returned by the new operator, but what is explicitly being returned in the function.
Meaning that when logging the constant, we will have just an object with a name property. Not an instance of Person

### instanceof

We can also know that a `cachorro` is an instance of Animal, and not an instance of function. and discover based on which
prototype it was created.

By the logging result, we can navigate through the prototype chain that is created. First we see the one based on Animal,
who was the constructor function that created this object and its __proto__.

### Derived constructor function



```js
function Cachorro(morde) {
  Animal.call(this, 4);

  this.morde = morde;
}
```
#### call()

The `call()` method allows us to invoke the function while explicitly setting the value of `this`. Normally `this` is
determined by how a function is called, but `call()` lets us "borrow" a method from one object and use it for another.

How it works:

*First Argument*: The first thing we pass to call() becomes the `this` context inside the function
*Subsequent Arguments*: Any arguments following the first one are passed directly into the function individually

##### Example 1

Imagine we have a greeting function, but we want it to use data from a specific user object

```js
function greet(city, country) {
  console.log(`Hello, i'm ${this.name} from ${city}, ${country}`);
}

const user = { name: "Alice"}

// Usage: greet.call(context, arg1, arg2, ...)
greet.call(user, "Paris", "France");
// Ouput: Hello, i'm Alice from Paris, France

/*  What happens here is that when we pass the `user` is the first argument, we are telling JS: "Ignore who would be `this`
and force it to be the `user` 

And now, inside of the function greet, the this doesn't have its "own life", it is just a reserved space*/
```

### Our Example

It is a case of "constructor stealing" (Also known as Constructor Inheritance)

In our code, `Animal.call(this)` allows the `Cachorro` constrructor to "borrow" the properties defined in `Animal`

Here is what is happening:

```js
function Animal() {
  this.qtdePatas = 4;
}
function Cachorro(morde) {
  Animal.call(this, 4);

  this.morde = morde;
}

const pug = new Cachorro(false);

console.log(pug);
```

When we execute `const pug = new Cachorro(false)`, the engine follows these paths

1. Object Creation: Before reading any line of code inside the function `Cachorro`, JS creates a new empty object in
memory
2. Prototype Linking: It links this object to the prototype `Cachorro`
3. `this` definition: He says "From now on, inside this execution, the word this will point to this new object`
4. Function execution: Now it starts reading the body of the function `Cachorro`

• It reads `Animal.call(this)` -> The object (that still doesn't have anything) receives `qtdePatas: 4`
  This happens because Animal.call(this) invokes the instructions inside of the Animal function and execute them inside
  the object that we are creating. Basically we are telling JS to run the code of the Animal function, but wherever it
  says `this` to interpret it as the `this` of the object being mounted

• Reads `this.morde = morde` -> Object that already has the paws, receive morde: false






