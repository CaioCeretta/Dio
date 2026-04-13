// 1. Simple Functions (The Rules)
const hasMinimumCharacters = (value) => value.length >= 5;
const isEmailValid = (value) => value.includes("@");

// 2. The high order function (the validator)
// It receives a "rule" and returns a function that warns if the field is valid
const createValidator = (rule, errMessage) => {
  return (value) => {
    const passedInTheRule = rule(value);
    return passedInTheRule ? "Valid" : "Error ${errMessage}";
  };
};

// 3. Creating specific validators
const validatePassword = createValidator(
  hasMinimumCharacters,
  "The password must have at least 5 characters",
);
const validateEmail = createValidator(isEmailValid, "Email is invalid");

// 4. Practical use

console.log(validatePassword("123")); // Error: Password must have at least 5 digits
console.log(validateEmail("caio@test")); // Valid
