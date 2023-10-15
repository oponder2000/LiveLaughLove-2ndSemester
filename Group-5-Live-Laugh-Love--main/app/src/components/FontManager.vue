<!-- FontManager.vue -->
<template>
  <div>
    <label for="fontSelect">Select Font: </label>
    <select id="fontSelect" v-model="selectedFont" @change="changeFont">
      <option value="Arial">Arial</option>
      <option value="Times New Roman">Times New Roman</option>
      <!-- Add more font options here -->
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, useContext } from 'vue';

const props = defineProps({
  onFontChange: Function, // Declare the prop for the event handler
});

const selectedFont = ref('Arial'); // Default font

const changeFont = () => {
  // Emit the event with the selected font
  props.onFontChange(selectedFont.value);
};
</script>
