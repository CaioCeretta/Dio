const users = ["Caio", "Alex", "André", "Regina", "José"];

/* The use of symbol is due to the fact that it has an absolute unicity and avoids "collisions". A string "M" is always
equal to another string "M". Symbol, in other hand, it is unique. Even if the description is the same.

Assume that we are interacting our library with another one. If both use the string "M" for different purposes, there may
cause a conflict. Which with Symbol is not possible.
*/

const gender = {
  MAN: Symbol("M"),
  WOMAN: Symbol("F"),
};

const people = [
  {
    name: "Caio",
    age: 30,
    gender: gender.MAN,
  },
  { name: "Regina", age: 67, gender: gender.WOMAN },
  { name: "Alex", age: 38, gender: gender.MAN },
];

console.log("People: ", people.length);

// Verify if it is an array
console.log("\nPerson is an array: ", Array.isArray(people));

// Iterate over the array items
people.forEach((person) => {
  console.log(`\n${person.name} tem ${person.age} anos.`);
});

// Filters the array
const men = people.filter((person) => {
  return person.gender === gender.MAN;
});

// Returns a new array
const peopleWithCourse = people.map((person) => {
  return { ...person, course: "JS Introduction" };
});
/* If we did
const peopleWithCourse = people.map((person) => {
  return person.course = "JS Introduction";
  return person;
});

wouldn't it be the same? Actually No.

• What happens: For each item, we create a NEW object in memory. The spread operator (...person)  copies the properties
from the original objectto a new "recipient", and then adds the new property.
• Original state: The array "people" and its objects remain unchangeed
• Advantage: This is the pattern in liberaries such as React or Redux, where we never modify the original data, it is easier
to detect changes and avoid colateral bugs.

In the second example, even though map creates a new array, the items inside of it still point to the same memory address
of the original object. We are altering (mutating) the original object directly.


*/

// Transforming an array into another type
const totalAge = people.reduce((acc, person) => {
  return acc + person.age;
}, 0);

console.log(`\nSoma de idade das pessoas: ${totalAge}`);

// Uniting operator

const totalEvenAges = people
  .filter((person) => person.age % 2 === 0)
  .reduce((age, person) => {
    return (age += person.age);
  }, 0);

console.log(`\nSoma de idade das pessoas com idade par: ${totalEvenAges}`);
