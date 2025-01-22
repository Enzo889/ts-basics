(() => {
  // se puede hacer con mas elementos
  const heroes: [string, number] = ["Superman", 999999];

  // heroes[0] = 5; no se permite
  heroes[0] = "Batman";
  console.log(heroes);
})();
