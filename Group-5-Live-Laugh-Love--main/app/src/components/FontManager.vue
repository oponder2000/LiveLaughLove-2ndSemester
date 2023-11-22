<template>
  <section class="card bg-base-200 py-5 mx-auto w-3/4" :style="{ fontFamily: fontStore.selectedFont, color: fontStore.selectedColor }">
    <h1 class="text-2xl text-center pb-10">
        Font Options
    </h1>
    <label class="text-xl text-center m-1">Select font:</label>
    <select class="select w-52 mx-auto m-1" v-model="fontStore.selectedFont">
        <option v-for="font in fonts" class="option" :value="font">
            {{ font }}
        </option>
    </select>
    <label class="text-xl text-center m-1">Select color:</label>
    <select class="select w-52 mx-auto m-1" v-model="fontStore.selectedColor">
        <option value="" name="" selected>Follow theme</option>
        <option v-for="color in colors" class="option" :value="color">
            {{ color }}
        </option>
    </select>
</section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useFontStore } from '../stores/fontStore';

const fontStore = useFontStore();
const fonts = fontStore.fonts;
const colors = fontStore.colors;

onMounted(() => {
  console.log('Font mounted');
});
</script>

<style scoped>
/* Add your @font-face rule for the custom font */
/*@font-face {
  font-family: 'OpenDyslexic';
  src: url('http://dyslexicfonts.com/fonts/OpenDyslexic-Regular.otf')  format('opentype'); 
}*/

/* Add any additional styles as needed */
</style>