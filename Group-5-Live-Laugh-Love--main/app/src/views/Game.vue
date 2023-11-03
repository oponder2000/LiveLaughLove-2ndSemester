<script setup lang="ts">
import { onMounted } from 'vue';

import { useGameStore } from '../stores/gameStore';
import { useTTSStore } from '../stores/ttsStore';
import StoryPanel from '../components/StoryPanel.vue'
import CharacterPanel from '../components/CharacterPanel.vue'
// import { TypesConfig } from 'vue-router';
// import { ChildProcess } from 'child_process';

const gameStore = useGameStore();
const ttsStore = useTTSStore();

// Lifecycle Hooks
onMounted(() => {
    console.log('Game mounted');
    console.log('TTS mounted');
});

const props = defineProps({
  selectedFont: String, // Receive the selected font as a prop
});
</script>

<template>
    <button class="btn btn-primary" @click="ttsStore.start(gameStore.currentPage.text)">
        Read Aloud
    </button>

    <div>
        <!-- Story Panel-->
        <StoryPanel v-if="!gameStore.charStatsOpen" :page="gameStore.currentPage" :style="{ fontFamily: selectedFont }">
            <!-- Choices -->
            <ul class="flex flex-col justify-center text-m w-1/2 ">
                <li v-for="({ text, isActive }, index) in gameStore.currentPage.choices" class="px-auto py-1" :style="{ fontFamily: selectedFont }">
                    <button :class="{ 'btn-success': isActive }" class="w-full btn" @click="gameStore.setSelectedChoice(index) " :style="{ fontFamily: selectedFont }">
                        {{ text }}
                    </button>
                </li>
            </ul>
        </StoryPanel>

        <!-- Character Stats / Inventory Panel -->
        <CharacterPanel v-else :character="gameStore.activeStory.character" :style="{ fontFamily: selectedFont }"/>

        <!-- Bottom Bar  (for buttons)-->
        <div class="flex justify-between w-1/2 mx-auto">
            <button class="btn" @click="gameStore.toggleCharStats" :style="{ fontFamily: selectedFont }">
                {{ !gameStore.charStatsOpen ? "Character" : "Close" }}
            </button>
            <button class="btn btn-primary" @click="gameStore.submitChoice" :style="{ fontFamily: selectedFont }">
                Submit Choice
            </button>
        </div>
    </div>
</template>


