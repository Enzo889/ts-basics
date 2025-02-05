(() => {
  //types declaration

  type hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | hero = "I'm a hero";

  console.log(myCustomVariable);

  myCustomVariable = "I'm a string";
  console.log(myCustomVariable);

  myCustomVariable = 10;
  console.log(myCustomVariable);

  myCustomVariable = {
    name: "Daredevil",
    age: 30,
    powers: ["speed", "strength", "stamina"],
  };

  console.log(myCustomVariable);
})();
