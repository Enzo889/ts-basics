"use strict";
(() => {
    console.log("------------");
    console.log("LET AND VAR");
    const Human = {
        name: "Enzo",
        age: 30,
    };
    Human.name = "Enzo Bustamante";
    const getName = () => {
        console.log(`this is my name: "${Human.name}"`);
    };
    getName();
    console.log("------------");
})();
//# sourceMappingURL=main.js.map