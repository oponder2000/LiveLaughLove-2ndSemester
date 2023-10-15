<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  selectedFont: String, // Receive the selected font as a prop
});

const loadButton = document.getElementById("load_button");

function toggleDiv(id: string) {
  let div = document.getElementById(id);
  if (div != null) {
    if (div.style.display == "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}
</script>

<template>
    <section class="card bg-base-200 py-5 mx-auto w-3/4">
        <div class="card-body w-3/4 mx-auto">
            <h2 class="text-xl text-center  mx-auto pb-1">
                <!-- TODO: this could be writtin better -->
                Welcome to our app, where we aim to design the simplest way of creating and sharing accessible
                story games. Try out our sample game, or get started on writing your own.
            </h2>
            <RouterLink to="game" class="btn">Play Test Game</RouterLink>
            <button class="btn" id="load_button" v-on:click="toggleDiv('load_div');">Load Game (Start/Continue Game)</button>
            <div class="col-sm-2" id="load_div" style="display: none;">
                <p>Insert Game File</p>
                <input type="file" accept=".txt">
                <button class="btn">Load</button>
                <button class="btn">CONTINUE</button>
                <button class="btn">NEW GAME</button>
            </div>
            <button class="btn" id="edit_button" v-on:click="toggleDiv('edit_div');">Editor (Create/Edit Game)</button>
            <div class="col-sm-2" id="edit_div" style="display: none;">
                <p>Insert Draft File</p>
                <input type="file" accept=".txt">
                <button class="btn">Load</button>
                <button class="btn">EDIT GAME</button>
                <RouterLink to="editor" class="btn">CREATE GAME</RouterLink>
            </div>
        </div>
        <div class="flex  justify-center mx-auto rounded bg-cyan-600  text-center border-black shadow py-1 w-40">
            <p class="text-black">Made with
                <img class="inline-block" src="../assets/vue.svg" alt="vue" />
            </p>
        </div>
    </section>
</template>
