"use strict";
(() => {
    //types declaration
    //especificacion de tipo
    let flash = {
        name: "Barry Allen",
        age: 25,
        powers: ["speed", "strength", "stamina"],
    };
    let Batman = {
        name: "Bruce Wayne",
        age: 45,
        powers: ["intelligence", "strength", "speed", "power", "healing"],
        getName() {
            return this.name;
        },
    };
})();
