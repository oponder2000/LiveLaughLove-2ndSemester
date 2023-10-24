<template>
    <section class="card bg-base-200 py-5 mx-auto w-3/4">
        <div class="card-body w-3/4 mx-auto">
            <h1 class="text-4xl text-center pb-10">
                Text-To-Speech Options
            </h1>
            <div class="text-2xl text-center">Select voice:</div>
            <select class="select w-1/2 mx-auto" v-model="ttsStore.selectedVoice">
                <option v-for="voice in ttsStore.voices" class="option" :value="voice">
                    {{ voice.name }}
                </option>
            </select>
            <button class="btn btn-primary w-1/2 mx-auto" v-on:click="ttsStore.start(ssExampleInput)">Test voice</button>
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