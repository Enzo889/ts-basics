(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    hulk: string;
    thor: string;
    capitanAmerica: string;
    active: boolean;
    power: number;
  };
  const avengers: Avengers = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Jr.",
    hulk: "Mark Ruffalo",
    capitanAmerica: "Chris Evans",
    thor: "Chris Hemsworth",
    active: true,
    power: 100.4551562,
  };

  const { power, thor } = avengers;

  console.log(power.toFixed(2), " - ", thor.toUpperCase());

  const printAvenger = ({ hulk, ...avenger }: Avengers) => {
    console.log(hulk, "-", avenger.ironman);
  };

  printAvenger(avengers);

  // Destructuring arrays
  const avengersArray: string[] = [
    "Cap",
    "Ironman",
    "Thor",
    "Hulk",
    "Spiderman",
  ];

  //forma tradicional de asignar valores
  //   const ironman = avengersArray[1];

  //desestruracion de un array

  const [, ironman, , hulk, spider] = avengersArray;

  console.log("--");
  console.log(ironman, hulk, spider);

  // Destructuring tuples

  const avengerTuple: [string, boolean, number, string] = [
    "Cap",
    true,
    150,
    "Chris Evans",
  ];

  const [cap, alive, , realName] = avengerTuple;

  console.log(cap, alive, realName);
})();
