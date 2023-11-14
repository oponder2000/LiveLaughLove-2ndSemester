<!-- FontManager.vue -->
<template>
  <div>
    <label for="fontSelect">Select Font: </label>
    <select id="fontSelect" v-model="selectedFont" @change="changeFont">
      <option value="Arial">Arial</option>
      <option value="Times New Roman">Times New Roman</option>
      <option value="Verdana">Verdana</option>
      <option value="OpenDyslexic">OpenDyslexic</option>
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

<style scoped>
/* Add your @font-face rule for the custom font */
@font-face {
  font-family: 'OpenDyslexic';
  src: url('http://dyslexicfonts.com/fonts/OpenDyslexic-Regular.otf')  format('opentype'); 
}

/* Add any additional styles as needed */
</style>