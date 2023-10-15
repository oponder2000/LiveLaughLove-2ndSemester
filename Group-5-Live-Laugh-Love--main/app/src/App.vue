<template>
  <div id="app">
    <FontManager :onFontChange="handleFontChange" />
    <Navbar :selectedFont="selectedFont" />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import FontManager from './components/FontManager.vue';
import Navbar from './components/Navbar.vue';

const selectedFont = ref('Arial'); // Default font

const handleFontChange = (newFont) => {
  selectedFont.value = newFont;
};

const router = useRouter();
onBeforeMount(() => {
  router.beforeEach((to, from, next) => {
    const fontFromMeta = to.meta.font; // Retrieve the font from route meta
    if (fontFromMeta) {
      handleFontChange(fontFromMeta); // Set the font based on the meta info
    }
    next();
  });
});
</script>
