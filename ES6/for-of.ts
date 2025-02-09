(() => {
  type Avenger = {
    name: string;
    weapon: string;
  };

  const ironman: Avenger = {
    name: "Ironman",
    weapon: "Armor suit",
  };

  const thor: Avenger = {
    name: "Thor",
    weapon: "Mjolnin",
  };

  const antman: Avenger = {
    name: "Antman",
    weapon: "Suit",
  };

  const avengers: Avenger[] = [ironman, thor, antman];
  console.log("----");

  for (const avenger of avengers) {
    console.log(avenger.name, avenger.weapon);
  }
})();
