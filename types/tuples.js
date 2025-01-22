"use strict";
(() => {
    // se puede hacer con mas elementos
    const heroes = ["Superman", 999999];
    // heroes[0] = 5; no se permite
    heroes[0] = "Batman";
    console.log(heroes);
})();
