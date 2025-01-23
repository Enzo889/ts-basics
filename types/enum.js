"use strict";
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
