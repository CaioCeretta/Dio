function sum(a) {
  return function (b) {
    const sum = a + b;
    console.log(sum);
    return sum;
  };
}

const plusTwo = sum(2);

plusTwo(2);
plusTwo(3);
plusTwo(4);
plusTwo(5);
