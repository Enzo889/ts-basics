"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    },
};
const guason = {
    reir: true,
    comer: true,
    llorar: false,
    nombre: "Joker",
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor(edad, estadoCivil, nombre, sexo) {
        this.edad = edad;
        this.estadoCivil = estadoCivil;
        this.nombre = nombre;
        this.sexo = sexo;
    }
    imprimirBio() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Sexo: ${this.sexo}, Estado Civil: ${this.estadoCivil}`);
    }
}
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
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return this.name + " " + this.realName;
        }
    }
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return a + b;
    };
    console.log(addNumbersFunction(55, 24));
})();
(() => {
    var _a, _b, _c;
    const client = {
        name: "John Doe",
        age: 30,
        adress: {
            street: "123 Main St",
            city: "Springfield",
            state: "IL",
            zip: 62701,
            getNewCity(city) {
                return city;
            },
        },
    };
    const client2 = {
        name: "Jane Doe",
        age: 25,
    };
    console.log(client2.name, client.age, (_a = client.adress) === null || _a === void 0 ? void 0 : _a.city);
    console.log(((_b = client.adress) === null || _b === void 0 ? void 0 : _b.getNewCity("Chicago")) || "No city was provided");
    console.log(((_c = client.adress) === null || _c === void 0 ? void 0 : _c.getNewCity("Detroit")) || "No city was provided");
})();
//# sourceMappingURL=main.js.map