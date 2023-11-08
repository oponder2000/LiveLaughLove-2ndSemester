<template>
    <section class="card bg-base-200 py-5 mx-auto w-3/4">
        <div class="card-body w-3/4 mx-auto">
            <h1 class="text-4xl text-center pb-10">
                Text-To-Speech Options
            </h1>
            <div class="text-2xl text-center">Select voice:</div>
            <select class="select w-1/2 mx-auto" v-model="ttsStore.selectedVoice">
                <option v-if="!voices.length" selected disabled>Click Load Voices</option>
                <option v-for="voice in voices" class="option" :value="voice">
                    {{ voice['name'] }}
                </option>
            </select>
            <button v-if="!voices.length" class="btn w-1/2 mx-auto" v-on:click="loadVoices">Load Voices</button>
            <button v-if="voices.length" class="btn btn-primary w-1/2 mx-auto" v-on:click="ttsStore.start(ssExampleInput)">Test voice</button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useTTSStore } from '../stores/ttsStore';

const ttsStore = useTTSStore();
const ssExampleInput = 'This is an example of speech synthesis in English.';

onMounted(() => {
    console.log('TTS mounted');
});
</script>

<script lang="ts">
export default {
  mounted() {
    this.loadVoices();
  },
  data() {
    return {
      voices: []
    };
  },
  methods: {
    loadVoices(this: { voices: SpeechSynthesisVoice[]; synth: SpeechSynthesis }) {
      this.synth = speechSynthesis;
      const voices = this.synth.getVoices();
      this.voices = voices;
    },
  },
};
</script>