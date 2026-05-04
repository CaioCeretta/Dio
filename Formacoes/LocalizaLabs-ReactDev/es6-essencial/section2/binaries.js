// in
//something in somethingItems;

// Arrays
var trees = new Array("pau-brasil", "loureiro", "cedro", "carvalho");
console.log(0 in trees); // returns true
console.log(3 in trees); // returns true
console.log(2 in trees); // returns true

console.log("cedro" in trees); // returns false because "in" checks for the index and not the value

// predefined objects
"PI" in Math; // returns true;
var myString = new String("coral");
"length" in myString;

// Custom objects
var myCar = { brand: "Honda", model: "Accord", year: 1998 };
"brand" in myCar; // returns true
"model" in myCar;

// instnaceof: object instanceof objectType

var day = new Date(2026, 4, 3);

if (day instanceof Date) {
  console.log(typeof day);
}
