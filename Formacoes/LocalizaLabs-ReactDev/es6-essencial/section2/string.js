let text = "Text";

// Returns the size of the string
const textSize = "texto".length;
console.log(`A quantidade de letras de 'texto' é: ${textSize}`);

// Retrurns an array breaking the string by a given delimiter
const splittedText = text.split("x");
console.log("\n Array separated by the delimiter 'x'", splittedText);

// Fetch a value and replace it
const replacedText = text.replace("Text", "TxeT");
console.log("\nReplaced text: ", replacedText);

// Returns the slice of a value
const lastChar = text.slice(-1);
console.log("\n Last character of a string", lastChar);

const allWithoutLastCharacter = text.slice(0, -1);
console.log(
  "\nValue of a string from the first character except the last: ",
  allWithoutLastCharacter,
);

const secondToEnd = text.slice(1);
console.log(
  "\nString value from the second character up to the end",
  secondToEnd,
);

// Returns N characters after a given position
const twoCharsAfterFirstPos = text.substring(0, 2);
console.log("\nBoth first letters are", twoCharsAfterFirstPos);
