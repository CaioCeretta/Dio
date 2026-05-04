global.name = "Name in the creation context";

const getNameArrowFn = () => this.name;

/* By executing the getName() function from the global scope, this.name will refer to the global "Name in the creation context"
However, on the other case, where we also have a name defined in the function block, when calling getName() from the user
object, this will result in returning the name of its given block. Meaning that the first one returns the global name and
the second one, returns the object's name property

*/

function getName() {
  return this.name;
}

const user = {
  name: "Name in the execution object",
  getNameArrowFn,
  getName,
};

/* The getArrowFn in other hand, is an arrow function. By executing the user's getNameArrowFn method, the result won't
be 'name in the execution object'.

Arrow functions have a lexical this. They don't create their own context of this, they "inherit" it from the enclosing
scope where they were defined, and not the one where they are being executed.*/

console.log(getName());

console.log(user.getName());

/* Now, getNameArrowFn ignores the 'user' context, it was born in the globla scope or in the module scope.

. Even if we put this function inside the user object, it will still look outside 
. If it do not find a variable `name`, linked to the global object in a way that `this` can access it, it will return
undefine` */
console.log(user.getNameArrowFn());

/* Let's take another example using an iife (immediately invoked function expression). In this case, getName will refer
to the global this.name (outside the iife), the user.getName will return the user's name.

The arrow function in this case, it didn't return undefined bercause we have created a lexical context where this was
defined before the function has been created. Here is why:

1. The IIFE scope (parent function):

• IIFEContext: By wrapping a code in an IIFE (defined with (() => {...}), we create a new scope level. Since that IIFE is
an arrow function, it captures the `this` of the the environment it was defined in, in this case, the global scope.
• 'this' vinculation: When we do stomething as `this.name = "Arrow Function"` inside an IIFE, we are assigning this
string to a `this` object property
• Lexical capture: When `const getNameArrowFn = () => this.name` is created inside that IIFE, it looks to the IIFE's parent
this. Since the IIFE's `this` now owns the property name, the arrow function will access that value, independent of being
inside the `user` object or not.

A summary of the differences are:

`getName` (Regular Function): the this is defined dynamically at the moment of execution (Who calls it), so inside the user
object, it will refer to `name in the execution object`.
`getNameArrowFn` (Arrow Function): this is defined lexically at the moment of creation, it inherits from the parent scope
"Arrow Function".


*/

(() => {
  this.name = "Arrow Function";

  const getNameArrowFn = () => this.name;

  function getName() {
    return this.name;
  }

  const user = {
    name: "Name in the execution object",
    getNameArrowFn,
    getName,
  };

  console.log(getName());

  console.log(user.getName());

  console.log(user.getNameArrowFn());
})();

/* However, we need to be aware of the behavior of this in regular functions

getName() is a regular function, and when invoked, even if it is inside that IIFE, which has the this.name, when invoked,
it will print `Name in the creation context`. This happens because of a specific JS rule of how it treats functions that
are not called inside an object method.

When we call a regular function, such as getName(), JS will apply what is called the default binding rule.

1. Without context objects: Since we didn't call user.getName(), the function does not have a object to the left of the
dot to define this
2. Global Fallback: In regular functions, this will fall into the global object (or undefined if in strict mode).
3. Connection: Since we defined a global.name at the beginning of the code, getName() inside the IIFE lookl to the global
scope and finds exactly that value.

This means that IIFE creates a new variable scope, but does not change how regular functions resolve their this.

IIFE indeed creates a new lexical scope. If we define `const x = 10` inside the IIFE, it is private inside of it.

  • Arrow functions use that scope to define `this`. That's why getNameArrowFn access it correctly

But this of a regular function do not belong to the scope. It is defined by how it was invoked. Even if it was defined
inside the IIFE, when executing it, if the function was called in a "loose" way (nos as method of an object), this will be
maintained in the global object.

The only place this is not attached to the globlal is when called in the ar row function, because arrow functions does
have an own this, it inherits from the external (global, module scope)


*/
