<!-- FontManager.vue -->
<template>
    <div>
      <label for="fontSelect">Select Font:</label>
      <select id="fontSelect" v-model="selectedFont">
        <option value="Arial">Arial</option>
        <option value="Times New Roman">Times New Roman</option>
        <!-- Add more font options here -->
      </select>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const selectedFont = ref('Arial'); // Default font
  </script>
  
  <style scoped>
  /* Define font classes with appropriate font-family values */
  .font-Arial {
    font-family: 'Arial', sans-serif;
  }
  
  .font-TimesNewRoman {
    font-family: 'Times New Roman', serif;
  }
  </style>
  