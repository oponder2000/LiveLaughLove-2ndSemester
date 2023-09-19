<!-- TextDisplay.vue -->
<template>
  <div>
    <p :class="`font-${font}`">{{ content }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  content: String, // Content to display
  font: String,    // Font selected from the Font Manager
});
</script>
