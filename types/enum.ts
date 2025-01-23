(() => {
  enum AudioLevel {
    Low = 0,
    Medium = 5,
    High = 10,
  }

  enum enumeracion {
    Low = 10,
    Medium,
    High = 9,
    VeryHigh,
  }

  let currentAudioLevel: AudioLevel = AudioLevel.Medium;

  console.log(currentAudioLevel);
  currentAudioLevel = AudioLevel.High;
  console.log(AudioLevel);
  console.log(enumeracion);
})();
