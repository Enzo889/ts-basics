(() => {
  let score: number = 100;
  console.log(score);

  let score2: number = 300;

  if (score2 < score) {
    console.log("score2 is less than score");
  } else {
    console.log("score2 is greater than score");
  }
  // this is an error but ts will not throw an error
  score = Number("N54");
  console.log({ score });
})();
