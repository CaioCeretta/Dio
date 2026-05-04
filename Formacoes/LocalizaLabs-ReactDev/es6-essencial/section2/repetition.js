let arr = [3, 5, 7];
arr.foo = "hello";

/* for in iterates over the keys (in objects) and indexes (in arrays). think of in as index */
for (let i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}

/* for of iterates over the values (itens). Think of "of" aws "object/value"  */
for (let i of arr) {
  console.log(i);
}
