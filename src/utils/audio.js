
const audioUrl = `${process.env.PUBLIC_URL}/273834-Battle_Game_UI_Sound_5.wav`;

export const playClickSound = () => {
  console.log("Attempting to play sound");
  const audio = new Audio(audioUrl);

  audio.play()
    .then(() => console.log("Sound played successfully"))
    .catch(error => console.error("Error playing sound:", error));
};
