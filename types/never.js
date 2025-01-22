"use strict";
// es un tipo de funcion que india que aca se terminara el codigo y que va a lanzar un error
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    console.log(error("this is an error"));
})();
