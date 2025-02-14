(() => {
  interface hero {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  }

  //especificacion de tipo
  let flash: hero = {
    name: "Barry Allen",
    age: 25,
    powers: ["speed", "strength", "stamina"],
  };

  let Batman: hero = {
    name: "Bruce Wayne",
    age: 45,
    powers: ["intelligence", "strength", "speed", "power", "healing"],
    getName() {
      return this.name;
    },
  };
})();
