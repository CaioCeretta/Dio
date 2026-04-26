function fn() {
  return "Code Here";
}

// Inline doesn't need curly braces when doesn't have any expressions, just return after arrow
const arrowFn = () => "Code Here";

const arrowFn2 = () => {
  //More than one expression
  return "Code Here";
}; // functions are also objects

fn.prop = "I can create properties";

console.log(fn());
console.log(fn.prop);

// Receive parameters
const logValue = (value) => console.log(value);
const logFnResult = (fnParam) => console.log(fnParam());

logFnResult(fn);

const controlFnExec = (fnParam) => (allowed) => {
  if (allowed) {
    return `Allowed ${true}`;
  }
};

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true);

/* controlFnExec is a function that in this case, is receiving the fn function that returns a "Code Here" text.
 
 That fn function is not automatically executed. It is only kept in memory as the value for the parameter `fnParam`.
 
 What this handleFnExecution does is:
 
 1. The variable `fnParam` now contains the definition of the function fn that is being passed by reference
 2. The execution stops there and returns us the second function that waits for an allowed argument
 3. The text "Code Here" isn't generated at that moment, because no one called fnParam()

 What is happening in this case is:

 fnParam remains alive in the handleFnExecution environment, but it does not do anything, it expects its invocation with
 a true or false value for allowed, but that function won't run 
 */

// Example where that function reference is used

const createExecutor = (task) => (permission) => {
  if (permission) {
    console.log("Permission granted! Executing...");
    return task();
  } else {
    return "Permission denied. Aborting...";
  }
};

// 1. Create a simple function
const storeData = () => "Data successfully saved";

// 2. We will tie the executor with the function (Closure held here)
const executeSave = createExecutor(storeData);

// 3. At the second call, we decide whether we use what is in memory

console.log(executeSave(true));
console.log(executeSave(false));
