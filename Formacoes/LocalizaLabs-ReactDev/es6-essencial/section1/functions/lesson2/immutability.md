## Immutability
 
This is basically: Once a value/state is created, we don't change the original. We create a new version of it instead.

This is mainly useful for predictable state management and avoiding side effects / bugs

### 1. Simple Idea

**Mutable (Changes the original)**

```ts
let user = { name: "Caio" }
user.name = "Alex";

console.log(user) // { name: "Alex" }

// Original object has changed
```

### 2. Immutable approach

```ts
let user = { name: "Alex" }

let updatedUser = {
  ...user,
  name: "Caio"
}

console.log(user) // { name: "Alex" }
console.log(updatedUser) // { name: "Caio" }
```
Original untouched. New version created.

### Why does this matter?

If many parts of the app use the same object

`const config = { darkMode: false }

If one place mutates it

`config.darkMode = true`

Everything using `config` changes unexpectedly

That creates bugs

### 3. Primitive values are already immutable

Strings, numbers, booleans, null, undefined, bigint, symbol.

Example

```js
let name = "Caio";

name.toUpperCase();

consople.log(name) // "Caio"
```

This is because strings cannot be changed directly. `toUpperCase()` returns a new string.

```js
let upper = name.toUpperCase();

let name = "Caio";

console.log(upper); // "CAIO"
console.log(name);  // "Caio"
```

### 4. Objects and arrays are immutable by default

#### Array Mutation:

```js
const numbers = [1, 2, 3]

nums.push(4);

console.log(nums) // [1, 2, 3, 4]
```
Push mutates the original array

#### Immutable version:
```ts
const nums = [1, 2, 3];
const newNums = [...nums, 4]

console.log(nums);    // [1,2,3]
console.log(newNums); // [1,2,3,4]
```

### 5. Common mutating vs Immutable methods

#### Arrays

Mutating:

`push()`
`pop()`
`splice()`
`shift()`
`unshift()`
`sort()`
`reverse()`

Usually immutable (return new array):

`map()`
`filter()`
`slice()`
`concat()`
`toSorted()`
`toReversed()`
`toSpliced()`

### 6. React Example

**Wrong:**

```js
state.user.name = "Caio"
setState(state);
```

React may not detect this change properly

**Correct:**

```js
setState({
  ...state,
  user: {
    ...state.user,
    name: "Caio"
  }
})
```
New references = easier updates

### 7. Reference matters

```js
const a = { age: 30 };
const b = a;

b.age = 40;
console.log(a.age); // 40
```

Because both variables point to the same object.

### 8. Shallow Copy Warning

Spread operator copies only first level.

```js
const user = {
  name: "Caio",
  address: {
    city: "Votorantim"
  }
};

// here name is a primitive string, and address is another object
```

**What spread actually does:**

`const copy = {...user};`

This creates a new outer object, but the nested `address` remains the same reference.

Think of it like:

```js
copy = {
  name: "Caio",
  address: user.address
}
```

So:

copy is different from user. but copy.address and user.address are equally the same

The containers are different, but the nested `address` inside both points to the same object. Meaning that if we modify
the name from the copy, it won't cause a change on user name, but modifying the address will.

A proper way of copying objects with nested objects is

```js
const copy = {
  ...user,
  address: {
    ...user.address,
    city: "SP"
  }

// Now:

// user.address.city = "Votorantim"
// copy.address.city = "SP"
}
```

### 9. Object Freeze

Prevents mutations

`const user = Object.freeze({name: "Caio"});`

`user.name = "Alex" // Ignored or error in strict mode`

### 10. Why is immutability so good? 

It allows:

• Easier debugging, old state is preserved
• Predictable code: No hidden changes
• Undo/redo possible: Keep previous versions
• Better React Performance: Reference checks, like oldObj !== newObj

### 11. Golden Rule

When modifying an object, instead of assignin a new value to an object property, prefer to define a new object, spreading
over all the properties of the object you want to modify, and pass a new value for the property you want to change.


