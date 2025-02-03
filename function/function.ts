(() => {
  const hero: string = "Batman";

  function returnHero(): string {
    return hero;
  }

  const activateBatiSignal = (): string => {
    return "Bati Signal activated";
  };

  console.log(typeof activateBatiSignal);

  const heroName = returnHero();

  console.log(heroName);
})();
