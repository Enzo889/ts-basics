"use strict";
(() => {
    const hero = "Batman";
    function returnHero() {
        return hero;
    }
    const activateBatiSignal = () => {
        return "Bati Signal activated";
    };
    console.log(typeof activateBatiSignal);
    const heroName = returnHero();
    console.log(heroName);
})();
