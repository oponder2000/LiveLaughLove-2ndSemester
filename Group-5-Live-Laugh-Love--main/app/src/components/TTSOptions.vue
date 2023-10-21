<template>
    <div class="mainBdy">
      <div class="btns">
        <select class="select" v-model="lang">
          <option value="" disabled selected>Select Voice</option>
          <option v-for="voice in voices" class="option" :value="voice">
            {{ voice.name }}
          </option>
        </select>
        <button class="btn" v-on:click="start">Test voice</button>
      </div>
    </div>
</template>
  
<script lang="ts">
export default {
  mounted() {
    this.load()
  },
  data() {
    return {
      title: "",
      input: "This is an example of speech synthesis in English.",
      count: "",
      lang: "",
      voices: [],
      status: "",
      synth: "",
      pending: false, 
    };
  },
  methods: {
    load(this: { voices: SpeechSynthesisVoice[]; synth: SpeechSynthesis }) {
      this.synth = speechSynthesis;
      const voices = this.synth.getVoices();
      this.voices = voices;
    },
    start(this: {
      voices: SpeechSynthesisVoice[];
      lang: SpeechSynthesisVoice;
      input: string;
      status: boolean;
      synth: SpeechSynthesis;
      pending: boolean
    }) {
      if (this.input.length > 1 && this.lang && this.synth && !this.synth.speaking) {
        const ss = new SpeechSynthesisUtterance(this.input);
        ss.voice = this.lang;
        this.status = this.synth.speaking;
        this.synth.speak(ss);
        this.status = this.synth.speaking;
        console.log("Start", this.synth.speaking)
      }
    },
  },
};
</script>