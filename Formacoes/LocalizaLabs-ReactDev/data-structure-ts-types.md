This course is basically what i have already seen during my career. So i will use here to pin-point some specific concepts.

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

### Stack

A `Stack` is a **Last In, First Out (LIFO)** data structure

• The last element added is the first of be removed
• Common operations are push, pop

#### When to use it

• Undo/Redo functionality
• Function call tracking (call stack)

#### Example

```ts
const stack:number[] = []

stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack.pop()) // 3
console.log(stack) // [1, 2]
```

### Queue

A `Queue` is a **First In, First out (FIFO)** data structure

• The first element added is the first to be removed
• Common operations: `enqueue`, `dequeue`

#### When to use

• Task Scheduling
• Handling requests (e.g. API calls, message queues)

#### Example

```ts
const queue: number[] = []

queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue.shift()) // 1. (Dequeue)
console.log(queue) // [2, 3]
```

### Linked List

A `Linked List` is a collection of elements (nodes) where each node points to the next

• Not stored in contiguous memory
• Efficient insertion/removal (O(1)) if position is known
• Slow access (O(n))

#### When to use it

• Frequent insertions/removals
• Dynamic memory usage

#### Example

```ts
type NodeType = {
  value: number
  next: NodeType | null
}

const node1: NodeType = { value: 1, next: null }
const node2: NodeType = { value: 2, next: null }

node1.next = node2

console.log(node1.next?.value) // 2
```

### Tree

A `Tree` is a hierarchical data structure with a root node and child nodes

• Each node can have multiple children
• Common types: Binary Tree, Binary Search (BST)

#### When to use

• Representing hierarchical data (e.g., file systems, categories)
• Searching and sorting data efficiently

#### Example

```ts
type = TreeNode = {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

const tree: TreeNode = {
  value: 10;
  left: { value: 5, left: null, right: null },
  right: { value: 15, left: null, right: null }
}

console.log(tree.left?.value) // 5
```

### Graph

A `Graph` is a collection of nodes (vertices) connected by edges

• Can be directed or undirected
• Can represent complex relationships

#### When to use

• Social Networks
• Maps and Navigation Systems
• Recommendation Systems

#### Example

```ts
const graph: Record<string, string[]> = {
  A: ["B", "C"],
  B: ["A", "C"],
  C: ["A"],
  D: ["B"],
}
```

## Utilities

Utilities are exclusive to typescript, they only exist during compilation time. They don't generate a JS code, they don't
exist during runtime and they serve only to help TS to validate types.

### Record

A `Record` creates an object type with specific keys and a fixed value type

• Keys are predefined
• All values share the same type
• Useful for mapping keys to values

#### When to use

• Mapping IDs to data
• Creating dictionaries
• Enum-like structures

#### Example

```ts
type User = {
  name: string
}

const users: Record<number, User> = {
  1: { name: "Caio"},
  2: { name: "Alex"},
  3: { name: "André"}
}

console.log(user[1].name) // Caio
```

### Pick

`Pick` creates a new type by selecting specific properties from another type

• Keeps only selected fields
• Useful for narrowing data

#### When to use

• Selecting only needed fields from a model
• API responses

#### Example

```ts
type User = {
  id: number;
  name: string;
  email: string;
}

type UserPreview = Pick<User, "id" | "name">

const user: UserPreview = {
  id: 1,
  name: "Caio"
}
```

### Omit

`Omit` creates a new type by removing specific properties

• Opposite of `Pick`
• Useful to exclude sensitive or unnecessary data

#### When to use

• Removing password fields
• Cleaning data before sending to frontend

#### Example

```ts
type User = {
  id: number
  name: string
  password: string
}

type SafeUser = Omit<User, "password">

const user: SafeUser = {
  id: 1,
  name: "Caio"
}
```

### Partial

`Partial` makes all properties optional

• Transform required fields into optional
• Great for updates

#### When to use

• Update  forms
• Patch requests

#### Example

```ts
type User = {
  id: number
  name: string
}

function updateUser(data: Partial<User>) {
  //data can have only some fields
}

updateUser({name: "Carlos"})
```

### Required

`Required` makes all properties mandatory

• Opposite of `Partial`
• Ensures full data is provided

#### When to use

• Validated objects
• Internal logic where all fields must exist

#### Example

```ts
type User = {
  id?: number
  name?: string
}

type FullUser = Required<User>

const user: FullUser = {
  id: 1,
  name: "Caio"
}
```

### Readonly

`Readonly` makes all properties immutable

• Prevents reassignment
• Helps avoid accidental mutations

#### When to use

• Immutable state
• Constants

#### Example

```ts
type User = {
  id: number;
  name: string;
}

const user: Readonly<User> = {
  id: 1,
  name: "Caio"
}

// user.name = "Alex" X Error
```

We tend to think to think that because it is a constant, but the short answer is

• `const` does't prevent the modification of internal properties
• `Readonly` prevents

1. What const actually does

```ts
const user = {
  id: 1,
  name: "Caio"
}

user.name = "Carlos" // Allowed
```

const means that

• We can't reassign the variable
• But we can modify the internal content

2. When const throws errors

Only if we try to modify the object as a whole

user = { id: 2, name: "Alex" } // Error

3. What readonly does

```ts
type User = {
  id: number
  name: string
}

const user: Readonly<User> = {
  id: 1,
  name: "Alex"
}
```

now

`user.name = "Caio" // Error`

Because typescript blocks internal mutation

### Exclude

`Exclude` removes types from unions

• Filters unwanted types
• Works only with union types

#### When to use

• Restricting possible values
• Cleaning unions

#### Example

```ts
type Status = "success" | "error" | "loading"

type FinalStatus = Exclude<Status, "loading">

// "success" | "error"
```

### Extract

`Extract` keeps only types from a union

• Opposite of exclude
• Selects matching type

#### When to use

• Picking specific cases from unions

#### Example

```ts
type Status = "success" | "error" | "loading"

type LoadingStatus = Extract<Status, "loading">

// "loading"
```

### NonNullable

`NonNullable` removes `null` and `undefined`

• Ensures value is defined
• Useful for data handling

#### When to use

• API data validation
• Avoiding null checks

#### Example
```ts
type Value = string | null | undefined

type SafeValue = NonNullable<Value>

// string
```









