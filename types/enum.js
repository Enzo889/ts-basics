"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["Low"] = 0] = "Low";
        AudioLevel[AudioLevel["Medium"] = 5] = "Medium";
        AudioLevel[AudioLevel["High"] = 10] = "High";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudioLevel = AudioLevel.Medium;
    console.log(currentAudioLevel);
    currentAudioLevel = AudioLevel.High;
    console.log(AudioLevel);
})();
