<script setup lang="ts">
import { useFontStore } from '../stores/fontStore';
const fontStore = useFontStore();
</script>

<template>
    <div class="py-2">
        <div class="container flex justify-between items-center mx-auto" :style="{ fontFamily: fontStore.selectedFont, color: fontStore.selectedColor }">
            <router-link to="/" class="text-3xl font-bold">
                Text Based Adventure
            </router-link>
            <!-- This could be made into a collapsible menu -->
            <div class="flex justify-start gap-2 w-1/2">
                <RouterLink to="font" class="btn" :style="{ fontFamily: fontStore.selectedFont, color: fontStore.selectedColor }">
                    Font
                </RouterLink>
                
                <RouterLink to="tts" class="btn" :style="{ fontFamily: fontStore.selectedFont, color: fontStore.selectedColor }">
                    Text-To-Speech
                </RouterLink>
                
                <button class="btn" data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" :style="{ fontFamily: fontStore.selectedFont, color: fontStore.selectedColor }">
                    Dark Mode Toggle
                </button>
            </div>
            
            <nav class="flex justify-end gap-2 w-1/4">
                <RouterLink to="/" class="btn" :style="{ fontFamily: fontStore.selectedFont, color: fontStore.selectedColor }">
                Home
            </RouterLink>
            </nav>
        </div>
    </div>
</template>
