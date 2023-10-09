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

</script>

<template>
    <div class="py-2">
        <div class="container flex justify-between items-center mx-auto">
            <router-link to="/" class="text-3xl  font-bold">
                Text Based Adventure
            </router-link>
            <!-- This could be made into a collapsible menu -->
            <div class="flex justify-start gap-2 w-1/4">
                <button class="btn">
                    Text-To-Speech
                </button>
                <button class="btn">
                    Font Size
                </button>
                <button class="btn">
                    Epileptic Effects
                </button>
                <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">
                    Dark Mode Toggle
                </button>
            </div>
            <nav class="flex justify-end gap-2 w-1/4">
                <RouterLink to="/" class="btn"> Home </RouterLink>
            </nav>
        </div>
    </div>
</template>

