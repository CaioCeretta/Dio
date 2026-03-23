This course is basically what i have already seen during my career. So i will use here to pin-point some specific concepts.

## Objects

An object is a data structure that groups related data and behavior into a single entity. Objects are composed of properties
(data) and sometimes methods (functions that operate on that data).

They are commonly used to represent real-word entities or structured information in software.

Example

A user in a system could be represented as an object:
```ts
const user = {
  id: 1,
  name: "Caio",
  email: "caio@email.com",
  isAdmin: false
}
```

Objects are useful because they group related data together
represent complex entities
improve code readability
organize data logically

## Data Structures

A data structure is a specific way of organizing and storing data so it can be accessed and modified efficiently.

Different data structures are designed for different types of problems.

### Array

An `array` is an ordered collection of elements stored in a contiguous (that is adjacent or next) block of memory

• Elements are accessed by index (position)
• Fast access (O (1)), but insertion/removal can be costly (O(n))

#### Use Case:

• Storing lists where order matters
• Example: list of users, products, or messages

Example

```js
const users = ["Ana", "João", "Carlos"]
console.log(users[0]) // Ana
```

### Object

An `Object` stores data as key-value pairs

• Each value is accessed using a unique key
• Very fast lookup, insertion, and deletion (O(1))

#### Use case:

• Configuration settings
• Storing data by identifier (e.g., user by ID)

#### Example

```js
const user = {
  id: 1,
  name: "Ana"
}

console.log(user.name) // Ana
```

### Map

A `Map` is a collection of **key-value pairs**, similar to an `Object`, but more flexible and predictable

• Keys can be of any type (not just strings or symbols)
• Preserves insertion order
• Provides efficient operations:  lookup, insertion, and deletion (O(1))

#### Difference from Object

• Object -> Keys are restricted to strings (or symbols) with simpler syntax
• Mao -> Keys can be any type, making it more suitable for dynamic or complex data

#### When to use

• Caching data (e.g., API responses)
• Associating objects with values
• Frequent additions/removals of entries
• When key order matters

#### Example

```ts
const userMap = new Map<number, string>();

userMap.set(1, "Ana");
userMap.set(2, "Caio");

console.log(userMap.get(1)); // "Ana"

userMap.delete(2);
console.log(userMap.has(2)); // false
```

#### Extra notes

• `Map` does not have prototype collisions (unlike Object)
• Iteration is straightforward (for...of, .entries(), .keys(), .values())
• Better performance than Object in scenarios with frequent mutations

### Set

A `Set`is a collection of unique values (no duplicates allowed) 

• Values are not indexed
• Maintains insertion order
• Fast lookup, insertion and deletion (O(1))

#### When to use

• Removing duplicates from a list
• Tracking unique items (e.g., unique IDs, tags)

#### Example

```ts
const numbers = new Set([1, 2, 2, 3])

console.log(numbers) // Set {1, 2, 3}

numbers.add(4)
console.log(numbers.has(2)) // true
```

#### How does Set works during initialization

What is happening on the above example is

1. `new Set(...)` expects an iterable
2. An `array` is an iterable
3. `Set` runs through each value one by one
4. It automatically ignores the duplicates

So as a result, it returns `Set {1, 2, 3}`

###### Does this iterable needs to be an array?

No, it doesn't. It just has to be an iterable

arrays, a string (which is an iterable of characters, and a Map is also an iterable)

An example with a string, would be:

const letters = new Set("hello")

console.log(letters) // Set {'h', 'e', 'l', 'o'}

##### Do we have to pass a value in initialization? 

We can create it as an empty object and then add values to it. Passing an array is the most common way of having initial
values.

#### Duplicity by reference

Set verifies duplicity using comparison by reference (for objects)

const set = new Set()

set.add({ id: 1 })
set.add({ id: 1 })

set.size will be 2, since even though the values are the same, they have different places in memory

### Tuple

A tuple is a fixed-length array with predefined types for each position

• Order and type are enforced
• Useful when structure is known and consistent

#### When to use

• Returning multiple types from a function
• Representing structured data (e.g. coordinates)

#### Example

```ts
const user: [number, string] = [1, "Ana"];

const id = user[0] // 1
const name = user[1] // Ana
```

#### What is the difference of a bidirectional array and a tuple?

Many times, an array is simpler and enough

But the point of the `tuple` isn't simplicity, but security and intention.

##### Direct Comparison

• Normal array

```ts
const user = [1, "Caio"]

// inferred type
(number | string)[]

// Problem
const id = user[0] // It can be a number or a string
const name = user[1] // It can be a number or a string  
```
Typescript does not know the correct order.

• Tuple
```ts
  const user: [number, string] = [1, "Caio"];

  // Now
  const id = user[0] // always number
  const name = user[1] // always string
```

##### But in practice, when this matters?

1. Returning multiple function values: most common use

```ts
function getUser(): [number, string] {
  return [1, "Caio"]
}

const [id, name] = getUser()
```

without a tuple

```ts
  (number|string)[]
```

with

  id -> number
  name -> string

2. React default pattern:

We already use it without knowing

```ts
const [count, setCount] = useState(0)

// This is already a tuple
[number, Dispatch<SetStateAction<number>>]

/*
Which means that

position 0 is a state and position 1 is a function
*/

```

And here it makes a lot of sense, since the order matters and each position has a different type.

3. Data with fixed structure (like coordinates)

```ts
const position: [number, number] = [10, 20]

// we know that [0] = x and [1] = y
```

#### When not to use it?

Avoid tuples when

• Dynamic lists
• Many elements
• No position meaning

Bad example

```ts
const users: [number, string][] = [...] // confuse

// better
const users = [{id: 1, name: "Caio"}]
```

#### Golden Rule

Use tuple when
• Position Matters
• Size is fixed
• Each position has a different type

Use array when

• Is a list of items of the same type
• Size varies
• Order doesn't hold a strong meaning

Tuple is more specific when we want more control and security





 





