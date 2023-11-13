<script setup lang="ts">
import { getAuth, signOut } from '@firebase/auth';

const auth = getAuth();


function signOutUser() {
    signOut(auth)
        .then(() => {
            console.log('Signed Out');
        })
        .catch((error) => {
            console.log(error);
        });
}

const props = defineProps({
  selectedFont: String, // Receive the selected font as a prop
});
</script>

<template>
    <div class="py-2">
        <div class="container flex justify-between items-center mx-auto">
            <router-link to="/" class="text-3xl  font-bold">
                Text Based Adventure
            </router-link>
            <!-- This could be made into a collapsible menu -->
            <div class="flex justify-start gap-2 w-1/2">
                <RouterLink to="tts" class="btn">
                    Text-To-Speech
                </RouterLink>
                <button class="btn" :style="{ fontFamily: selectedFont }">
                    Font Size
                </button>
                <button class="btn" :style="{ fontFamily: selectedFont }">
                    Epileptic Effects
                </button>
                <button class="btn" :style="{ fontFamily: selectedFont }" data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">
                    Dark Mode Toggle
                </button>
                <select data-choose-theme>
                <option value="">Default</option>
                <option value="dark">Dark</option>
                <option value="cupcake">Cupcake</option>
                <option value="mytheme">Option 1</option>
                </select>
            </div>
            
            <nav class="flex justify-end gap-2 w-1/4">
                <RouterLink to="/" class="btn"> Home </RouterLink>
            </nav>
        </div>
    </div>
</template>

