<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  selectedFont: String, // Receive the selected font as a prop
  selectedColor: String, // Receive the selected color as a prop
});
</script>

<template>
  <div class="py-2">
    <div class="container flex justify-between items-center mx-auto">
      <router-link to="/" class="text-3xl font-bold" :style="{ fontFamily: selectedFont, color: selectedColor }">
        Text Based Adventure
      </router-link>
      <!-- This could be made into a collapsible menu -->
      <div class="flex justify-start gap-2 w-1/2">
        <RouterLink to="tts" class="btn" :style="{ color: selectedColor }">
          Text-To-Speech
        </RouterLink>
        <button class="btn" :style="{ color: selectedColor }">Font Size</button>
        <button
          class="btn"
          data-toggle-theme="dark,light"
          data-act-class="ACTIVECLASS"
          :style="{ color: selectedColor }"
        >
          Dark Mode Toggle
        </button>
      </div>

      <nav class="flex justify-end gap-2 w-1/4">
        <RouterLink to="/" class="btn" :style="{ color: selectedColor }">Home</RouterLink>
      </nav>
    </div>
  </div>
</template>
