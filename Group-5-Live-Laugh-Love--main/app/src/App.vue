<script setup lang="ts">
// import { useFirebaseApp, useFirebaseAuth } from 'vuefire';
import NavBar from './components/NavBar.vue';

import { ref } from 'vue';
import FontManager from './components/FontManager.vue';
import TextDisplay from './components/TextDisplay.vue';

const text1 = 'This is text 1.';
const text2 = 'This is text 2.';
const selectedFont = ref('Arial'); // Default font initially

// Every vue component has this template
//   fileName: "./ComponentName.vue"
//   <script/> this is where any js or ts goes
//   <template /> this is where the html is created and {{ variable }} is used to pass things from the script
//   <style /> this is where you can add additional styles or create tailwindcss "stylegroups"

</script>

<template>
  <div class="h-screen">
    <FontManager />
    <TextDisplay :content="text1" :font="selectedFont" />
    <TextDisplay :content="text2" :font="selectedFont" />
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
</template>

