function init() {
  const example = "This is the variable";

  return function () {
    console.log("1 - The value of the variable is: " + example);

    return function () {
      console.log("2 - The value of the variable is:: " + example);

      return function () {
        console.log("3 - The value of the variable is: " + example);
      };
    };
  };
}

const initFn1 = init();
const initFn2 = initFn1();
const initFn3 = initFn2();

initFn3();
