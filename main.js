"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr.",
        hulk: "Mark Ruffalo",
        capitanAmerica: "Chris Evans",
        thor: "Chris Hemsworth",
        active: true,
        power: 100.4551562,
    };
    const { power, thor } = avengers;
    console.log(power.toFixed(2), " - ", thor.toUpperCase());
    const printAvenger = (_a) => {
        var { hulk } = _a, avenger = __rest(_a, ["hulk"]);
        console.log(hulk, "-", avenger.ironman);
    };
    printAvenger(avengers);
    const avengersArray = [
        "Cap",
        "Ironman",
        "Thor",
        "Hulk",
        "Spiderman",
    ];
    const [, ironman, , hulk, spider] = avengersArray;
    console.log("--");
    console.log(ironman, hulk, spider);
    const avengerTuple = [
        "Cap",
        true,
        150,
        "Chris Evans",
    ];
    const [cap, alive, , realName] = avengerTuple;
    console.log(cap, alive, realName);
})();
(() => {
    const ironman = {
        name: "Ironman",
        weapon: "Armor suit",
    };
    const thor = {
        name: "Thor",
        weapon: "Mjolnin",
    };
    const antman = {
        name: "Antman",
        weapon: "Suit",
    };
    const avengers = [ironman, thor, antman];
    console.log("----");
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})();
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