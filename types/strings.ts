(() => {
  const superman: string = "Clark Kent";
  const batman: string = "Bruce Wayne";
  const flash: string = "Barry Allen";

  console.log(`${superman} is a superhero`);
  console.log(batman.toUpperCase());
  console.log(flash.toLowerCase());

  console.log(superman[102]?.toUpperCase() || "superman no had a public name");
})();
