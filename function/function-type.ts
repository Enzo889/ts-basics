(() => {
  const add = (a: number, b: number): number => a + b;
  const greet = (name: string): string => `Hello, ${name}!`;
  const saveTheWorld = () => `I wanna save the world!`;

  let myFunction: (x: number, y: number) => number;
  myFunction = add;

  console.log(myFunction(1, 2));

  let myGreet: (name: string) => string;
  myGreet = greet;
  console.log(myGreet("Enzo"));

  let saveWorld: () => string;
  saveWorld = saveTheWorld;
  console.log(saveWorld());
})();
