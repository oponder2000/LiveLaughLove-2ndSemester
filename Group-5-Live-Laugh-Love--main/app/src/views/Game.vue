<template>
    <div v-if="!gameStore.charStatsOpen" class="flex justify-between w-1/2 mx-auto" :style="{ marginTop: 16 + 'px' }">
        <button class="btn btn-primary" @click="ttsStore.start(gameStore.currentPage.text)" :style="{ fontFamily: fontStore.selectedFont, color: fontStore.selectedColor }">
            Read Aloud
        </button>
    </div>

    <div>
        <!-- Story Panel-->
        <StoryPanel v-if="!gameStore.charStatsOpen" :page="gameStore.currentPage" :style="{ fontFamily: fontStore.selectedFont, color: fontStore.selectedColor }">
            <!-- Choices -->
            <ul class="flex flex-col justify-center text-m w-1/2 ">
                <li v-for="({ text, isActive }, index) in gameStore.currentPage.choices" class="px-auto py-1">
                    <button :class="{ 'btn-success': isActive }" class="w-full btn" @click="gameStore.setSelectedChoice(index)" :style="{ fontFamily: fontStore.selectedFont, color: fontStore.selectedColor }">
                        {{ text }}
                    </button>
                </li>
            </ul>
        </StoryPanel>

        <!-- Character Stats / Inventory Panel -->
        <CharacterPanel v-else :character="gameStore.activeStory.character" :style="{ marginTop: 32 + 'px', fontFamily: fontStore.selectedFont, color: fontStore.selectedColor }"/>

        <!-- Bottom Bar  (for buttons)-->
        <div class="flex justify-between w-1/2 mx-auto">
            <button class="btn" @click="gameStore.toggleCharStats" :style="{ fontFamily: fontStore.selectedFont, color: fontStore.selectedColor }">
                {{ !gameStore.charStatsOpen ? "Character" : "Close" }}
            </button>
            <button v-if="!gameStore.charStatsOpen" class="btn btn-primary" @click="gameStore.submitChoice" :style="{ fontFamily: fontStore.selectedFont, color: fontStore.selectedColor }">
                Submit Choice
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useGameStore } from '../stores/gameStore';
import { useTTSStore } from '../stores/ttsStore';
import { useFontStore } from "../stores/fontStore";
import StoryPanel from '../components/StoryPanel.vue'
import CharacterPanel from '../components/CharacterPanel.vue'
// import { TypesConfig } from 'vue-router';
// import { ChildProcess } from 'child_process';

const gameStore = useGameStore();
const ttsStore = useTTSStore();
const fontStore = useFontStore();

// Lifecycle Hooks
onMounted(() => {
    console.log('Game mounted');
    console.log('TTS mounted');
    console.log('Font mounted');
});
</script>
