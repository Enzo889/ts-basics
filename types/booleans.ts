(() => {
  let bestFightGame: string = "The best fight game is";

  let StreetFighter = false;
  let Tekken = true;

  let bestGame = StreetFighter ? "Street Fighter" : "Tekken";

  console.log(bestFightGame + " " + bestGame, { Tekken });
})();
