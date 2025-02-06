"use strict";
(() => {
    let a = 10;
    console.log(a);
})();
const add = (a, b) => {
    return a + b;
};
const contar = (heroes) => {
    return heroes.length;
};
var superHeroes = [
    "Superman",
    "Batman",
    "Flash",
    "Wonder Woman",
    "Green Lantern",
    "Aquaman",
];
contar(superHeroes);
const callBatman = (call = false) => {
    call
        ? console.log("BatiSignal activated")
        : console.log("BatiSignal desactivated");
};
callBatman();
const unirHeroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
const noHaceNadaTampoco = noHaceNada;
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || "----"}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || "----"}`;
        }
    };
    const name = fullName("Tony", "Stark", true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "----"}`;
    };
    const name = fullName("Tony");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName("Tony", "Stark");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...lastNames) => {
        return `${firstName} ${lastNames.join(" ")}`;
    };
    const name = fullName("Tony", "Stark", "Iron Man");
    const name2 = fullName("Tony", "Stark", "Iron Man", "Hulk");
    const name3 = fullName("Tony");
    console.log({ name, name2, name3 });
})();
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
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4,
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        },
    };
    const villanos = [
        {
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false,
        },
        {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true,
        },
        {
            nombre: "James Logan",
            edad: undefined,
            mutante: true,
        },
    ];
    const charles = {
        poder: "psiquico",
        estatura: 1.78,
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
    };
    let mystique;
    mystique = {
        poder: "Elastico",
        estatura: 1.88,
    };
    mystique = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Triniti", "Angel"],
    };
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 25,
        powers: ["speed", "strength", "stamina"],
    };
    flash = {
        name: "Flash",
        age: 44,
        powers: ["speed", "strength", "stamina", "speed", "speed", "speed"],
        getName() {
            return this.name;
        },
    };
})();
(() => {
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
(() => {
    let myCustomVariable = "I'm a hero";
    console.log(myCustomVariable);
    myCustomVariable = "I'm a string";
    console.log(myCustomVariable);
    myCustomVariable = 10;
    console.log(myCustomVariable);
    myCustomVariable = {
        name: "Daredevil",
        age: 30,
        powers: ["speed", "strength", "stamina"],
    };
    console.log(myCustomVariable);
})();
(() => {
    let aliens = 15;
    let exits;
    let notExits;
    aliens = "aliens are everywhere";
    console.log(aliens);
    console.log(aliens.charAt(0));
    aliens = 150.515551;
    console.log(aliens.toFixed(2));
    console.log(exits);
    console.log(notExits);
})();
(() => {
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    let power;
    (function (power) {
        power[power["acuamanPower"] = 0] = "acuamanPower";
        power[power["batmanPower"] = 1] = "batmanPower";
        power[power["flashPower"] = 5] = "flashPower";
        power[power["supermanPower"] = 100] = "supermanPower";
    })(power || (power = {}));
    const fuerzaFlash = power.flashPower;
    const fuerzaSuperman = power.supermanPower;
    const fuerzaBatman = power.batmanPower;
    const fuerzaAcuaman = power.acuamanPower;
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5];
    numbers.push(6);
    const villians = [
        "Acertijo",
        "Duende verdero",
        "El Diablo",
        "La Muerte",
        "La Tormenta",
    ];
    villians.forEach((v) => console.log(v.toUpperCase()));
})();
(() => {
    let bestFightGame = "The best fight game is";
    let StreetFighter = false;
    let Tekken = true;
    let bestGame = StreetFighter ? "Street Fighter" : "Tekken";
    console.log(bestFightGame + " " + bestGame, { Tekken });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["Low"] = 0] = "Low";
        AudioLevel[AudioLevel["Medium"] = 5] = "Medium";
        AudioLevel[AudioLevel["High"] = 10] = "High";
    })(AudioLevel || (AudioLevel = {}));
    let enumeracion;
    (function (enumeracion) {
        enumeracion[enumeracion["Low"] = 10] = "Low";
        enumeracion[enumeracion["Medium"] = 11] = "Medium";
        enumeracion[enumeracion["High"] = 9] = "High";
        enumeracion[enumeracion["VeryHigh"] = 10] = "VeryHigh";
    })(enumeracion || (enumeracion = {}));
    let currentAudioLevel = AudioLevel.Medium;
    console.log(currentAudioLevel);
    currentAudioLevel = AudioLevel.High;
    console.log(AudioLevel);
    console.log(enumeracion);
})();
(() => {
})();
(() => {
    let score = 100;
    console.log(score);
    let score2 = 300;
    if (score2 < score) {
        console.log("score2 is less than score");
    }
    else {
        console.log("score2 is greater than score");
    }
    score = Number("N54");
    console.log({ score });
})();
(() => {
    var _a;
    const superman = "Clark Kent";
    const batman = "Bruce Wayne";
    const flash = "Barry Allen";
    console.log(`${superman} is a superhero`);
    console.log(batman.toUpperCase());
    console.log(flash.toLowerCase());
    console.log(((_a = superman[102]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "superman no had a public name");
})();
(() => {
    const heroes = ["Superman", 999999];
    heroes[0] = "Batman";
    console.log(heroes);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    const b = callSuperman();
    console.log(a, b);
})();
//# sourceMappingURL=main.js.map