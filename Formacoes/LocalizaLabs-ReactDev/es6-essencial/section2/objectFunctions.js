const user = {
  name: "Caio",
  lastName: "Ceretta Soares",
};

// Recovering the keys of the object
console.log(`Properties of the user object: ${Object.keys(user)}`);

// Recovering ther values of the object keys
console.log(`\oobject properties value: ${Object.values(user)}`);

// Returns a list with the content property key and value separated by comma
console.log(`\nList of properties and values: ${Object.entries(user)}`);

// Merge object properties
Object.assign(user, { fullName: "Caio Ceretta Soares" });

console.log(`\nAdds a fullName property for the user object`, user);
console.log(
  `\nReturns a new object merging two or more objects`,
  Object.assign({}, user, { age: 30 }),
);

// Prevents all the alterations in an object
const newObject = { foo: "bar" };
Object.freeze(newObject);

newObject.foo = "Changed";

delete newObject.foo;

newObject.bar = "foo";

console.log(newObject);

// Only allows updated for existing properties in an object

const person = { name: "Caio" };
Object.seal(person);

person.name = "Alex";
delete person.name;

person.age = 37;

console.log("\nObject person after the updates", person);
