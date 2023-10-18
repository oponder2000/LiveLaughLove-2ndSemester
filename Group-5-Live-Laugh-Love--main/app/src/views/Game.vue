<script setup lang="ts">
import { onMounted } from 'vue';

import { useGameStore } from '../stores/gameStore';
import StoryPanel from '../components/StoryPanel.vue'
import CharacterPanel from '../components/CharacterPanel.vue'
// import { TypesConfig } from 'vue-router';
// import { ChildProcess } from 'child_process';

const store = useGameStore();

// Lifecycle Hooks
onMounted(() => {
    console.log('Game mounted');
});
</script>

<script lang="ts">
export default {
  data() {
    return {
      title: "Text-To-Speech App",
      input: "",
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
      const store = useGameStore();
      this.synth = speechSynthesis;
      const voices = this.synth.getVoices();
      this.voices = voices;
      this.lang = voices[14];
      this.input = store.currentPage.text;
      
      if (this.input.length > 1 && this.lang && this.synth && !this.synth.speaking) {
        const ss = new SpeechSynthesisUtterance(this.input);
        ss.voice = this.lang;
        this.status = this.synth.speaking;
        this.synth.speak(ss);
        this.status = this.synth.speaking;
        console.log("Start", this.synth.speaking)
      }
    },
    pause(this: { status: boolean; synth: SpeechSynthesis }) {
      if (this.synth) {
        this.status = this.synth.speaking;
        this.synth.pause();
        this.status = this.synth.speaking;
        console.log("Pause", this.synth.paused);
      }
    },
    resume(this: { status: boolean; synth: SpeechSynthesis }) {
      if (this.synth) {
        this.status = this.synth.speaking;
        this.synth.resume();
        this.status = this.synth.speaking;
        console.log("Resume", this.synth.speaking);
      }
    },
    cancel(this: { status: boolean; synth: SpeechSynthesis }) {
      if (this.synth) {
        this.status = this.synth.speaking;
        this.synth.cancel();
        this.status = this.synth.speaking;
        console.log("Canceled", this.synth.speaking);
      }
    },
  },
};
</script>

<template>
    <button class="btn btn-primary" @click="start">
        Read Aloud
    </button>

    <div>
        <!-- Story Panel-->
        <StoryPanel v-if="!store.charStatsOpen" :page="store.currentPage">
            <!-- Choices -->
            <ul class="flex flex-col justify-center text-m w-1/2 ">
                <li v-for="({ text, isActive }, index) in store.currentPage.choices" class="px-auto py-1">
                    <button :class="{ 'btn-success': isActive }" class="w-full btn" @click="store.setSelectedChoice(index)">
                        {{ text }}
                    </button>
                </li>
            </ul>
        </StoryPanel>

        <!-- Character Stats / Inventory Panel -->
        <CharacterPanel v-else :character="store.activeStory.character" />

        <!-- Bottom Bar  (for buttons)-->
        <div class="flex justify-between w-1/2 mx-auto">
            <button class="btn" @click="store.toggleCharStats">
                {{ !store.charStatsOpen ? "Character" : "Close" }}
            </button>
            <button class="btn btn-primary" @click="store.submitChoice">
                Submit Choice
            </button>
        </div>
    </div>
</template>


