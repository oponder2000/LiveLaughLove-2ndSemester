<template>
  <section class="card bg-base-200 py-5 mx-auto w-3/4" :style="{ fontFamily: fontStore.selectedFont, color: fontStore.selectedColor }">
      <div class="card-body w-3/4 mx-auto">
          <h1 class="text-4xl text-center pb-10">
              Font Options
          </h1>
          <label class="text-2xl text-center" >Select font:</label>
          <select class="select w-1/2 mx-auto" v-model="fontStore.selectedFont">
              <option v-for="font in fonts" class="option" :value="font">
                  {{ font }}
              </option>
          </select>
          <label class="text-2xl text-center" >Select color:</label>
          <select class="select w-1/2 mx-auto" v-model="fontStore.selectedColor">
              <option v-for="color in colors" class="option" :value="color">
                  {{ color }}
              </option>
          </select>
      </div>
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
