<template>
  <div id="app">
    <Navbar/>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from './components/Navbar.vue';

const router = useRouter();
</script>
