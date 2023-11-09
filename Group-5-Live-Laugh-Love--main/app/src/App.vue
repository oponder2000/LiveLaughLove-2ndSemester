<template>
  <div id="app">
    <FontManager :onFontChange="handleFontChange" />
    <ColorManager :onColorChange="handleColorChange" />
    <Navbar :selectedFont="selectedFont" :selectedColor="selectedColor"/>
    <main>
      <router-view :selectedFont="selectedFont" :selectedColor="selectedColor"/>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import FontManager from './components/FontManager.vue';
import Navbar from './components/Navbar.vue';
import ColorManager from './components/ColorManager.vue';

const selectedFont = ref('Arial'); // Default font
const selectedColor = ref('white'); // Default color

const handleFontChange = (newFont) => {
  selectedFont.value = newFont;
};

const handleColorChange = (newColor) => {
  selectedColor.value = newColor;
};

const router = useRouter();
onBeforeMount(() => {
  router.beforeEach((to, from, next) => {
    const fontFromMeta = to.meta.font; // Retrieve the font from route meta
    const colorFromMeta = to.meta.color;
    if (fontFromMeta) {
      handleFontChange(fontFromMeta); // Set the font based on the meta info
    }
    if (colorFromMeta) {
      handleColorChange(colorFromMeta); // Set the color based on the meta info
    }

    next();
  });
});
</script>
