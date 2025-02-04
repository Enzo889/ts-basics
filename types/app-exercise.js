"use strict";
(() => {
    // Tipos
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    // Arreglos
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    //Enumeraciones
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
    // Retorno de funciones
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    // Aserciones de Tipo
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
