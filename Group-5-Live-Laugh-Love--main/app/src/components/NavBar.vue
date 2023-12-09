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
        <RouterLink to="tts" class="btn" :style="{ fontFamily: selectedFont, color: selectedColor }">
          Text-To-Speech
        </RouterLink>
        <button class="btn" :style="{ fontFamily: selectedFont, color: selectedColor }">Font Size</button>
        <button
          class="btn"
          data-toggle-theme="dark,light"
          data-act-class="ACTIVECLASS"
          :style="{ fontFamily: selectedFont, color: selectedColor }"
        >
          Dark Mode Toggle
        </button>
        <label for="data-choose-theme">High Contrast Theme: </label>
                <select data-choose-theme>
                <option value="hc1">Orange-Blue</option>
                <option value="hc2">Purple-Green</option>
                <option value="hc3">Pink-Yellow</option>
                <option value="hc4">Tan-Turquoise</option>
                <option value="hc5">Brown-Blue</option>
                <option value="hc6">Vermillion-Purple</option>
                </select>
      </div>

      <nav class="flex justify-end gap-2 w-1/4">
        <RouterLink to="/" class="btn" :style="{ fontFamily: selectedFont, color: selectedColor }">Home</RouterLink>
      </nav>
    </div>
  </div>
</template>