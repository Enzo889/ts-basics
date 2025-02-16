(() => {
  // se usa muy raramente pero se puede hacer
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  let addNumbersFunction: addTwoNumbers;

  addNumbersFunction = (a: number, b: number) => {
    return a + b;
  };

  console.log(addNumbersFunction(55, 24));
})();
