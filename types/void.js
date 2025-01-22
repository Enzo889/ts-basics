"use strict";
// se utiliza para indicar que una funcion no devuelve nada o debe estar vacia
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
