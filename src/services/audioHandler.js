/************************************  
 * @description: Audio handlers
 ************************************/
import switchTone from "../flipdish-ringer.mp3"

/************************************  
 * TODO: 1. Selecting option for the users.
 ************************************/


/************************************  
 * @description: function  to play the audio sound when the tab is been switched automatically.
 ************************************/
export const playSwitchTone = () =>{
    const switchSound = new Audio(switchTone);
    switchSound.loop = false; // aviod looping
    switchSound.play();
}