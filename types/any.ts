(() => {
  let aliens: any = 15;
  let exits;
  let notExits;

  aliens = "aliens are everywhere";

  console.log(aliens);
  console.log((aliens as string).charAt(0));

  aliens = 150.515551;
  console.log(<number>aliens.toFixed(2));

  console.log(exits);
  console.log(notExits);
})();
