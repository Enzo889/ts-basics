(() => {
  //especificacion de tipo
  let flash: {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: "Barry Allen",
    age: 25,
    powers: ["speed", "strength", "stamina"],
  };

  flash = {
    name: "Flash",
    age: 44,
    powers: ["speed", "strength", "stamina", "speed", "speed", "speed"],
    getName() {
      return this.name;
    },
  };
})();
