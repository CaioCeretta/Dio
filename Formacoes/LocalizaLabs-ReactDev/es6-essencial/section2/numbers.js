const myNumber = 17.4032;

// Transform the number into a string
const numberAsString = myNumber.toString();
console.log(numberAsString);

// Specify number of decimal cases of a number
const numberDecimals = myNumber.toFixed(2);
console.log(`\n${numberDecimals}`);

// Transforms a string into float
console.log(`\nParsed string to float`, parseFloat("13.22"));

// Transforms a string into integer
console.log(`\nParsed string to int`, parseInt("13.22"));
