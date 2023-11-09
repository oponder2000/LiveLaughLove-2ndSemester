<template>
    <div>
      <label for="colorSelect">Select Text Color:</label>
      <select id="colorSelect" v-model="selectedColor" @change="changeColor">
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <!-- Add more color options here -->
      </select>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps } from 'vue';
  
  const props = defineProps({
    onColorChange: Function, // Declare the prop for the event handler
  });
  
  const selectedColor = ref('black'); // Default color
  
  const changeColor = () => {
    // Emit the event with the selected color
    props.onColorChange(selectedColor.value);
  };
  </script>
  