import { ref } from "vue";
import { defineStore } from "pinia";

export const useTTSStore = defineStore('tts', () => {
    const synth = speechSynthesis;
    const voices = synth.getVoices();
    const selectedVoice = ref(null);

    function start(input: string) {
        if (input.length > 0 && selectedVoice && synth && !synth.speaking) {
          const ss = new SpeechSynthesisUtterance(input);
          ss.voice = selectedVoice.value;
          console.log(ss.voice);
          synth.speak(ss);
          console.log("TTS start:", "\"" + input + "\"");
        }
      }

    return {
        synth,
        voices,
        selectedVoice,
        start,
    }
})