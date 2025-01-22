(() => {
  enum AudioLevel {
    Low = 0,
    Medium = 5,
    High = 10,
  }

  let currentAudioLevel: AudioLevel = AudioLevel.Medium;

  console.log(currentAudioLevel);
  currentAudioLevel = AudioLevel.High;
  console.log(AudioLevel);
})();
