"use strict";
// basic function
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
// args by default
const callBatman = (call = false) => {
    call
        ? console.log("BatiSignal activated")
        : console.log("BatiSignal desactivated");
};
callBatman();
// rest parameters
const unirHeroes = (...personas) => {
    return personas.join(", ");
};
// function type
const noHaceNada = (numero, texto, booleano, arreglo) => { };
// crear el tipod de funcion que acepte la funcion noHaceNada
const noHaceNadaTampoco = noHaceNada;
