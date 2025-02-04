"use strict";
(() => {
    const add = (a, b) => a + b;
    const greet = (name) => `Hello, ${name}!`;
    const saveTheWorld = () => `I wanna save the world!`;
    let myFunction;
    myFunction = add;
    console.log(myFunction(1, 2));
    let myGreet;
    myGreet = greet;
    console.log(myGreet("Enzo"));
    let saveWorld;
    saveWorld = saveTheWorld;
    console.log(saveWorld());
})();
