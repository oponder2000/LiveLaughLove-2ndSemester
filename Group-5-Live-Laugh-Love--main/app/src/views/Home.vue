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
      <h2 class="text-xl text-center mx-auto pb-1" :style="{ fontFamily: selectedFont }">
        <!-- TODO: this could be written better -->
        Welcome to our app, where we aim to design the simplest way of creating and sharing accessible
        story games. Try out our sample game, or get started on writing your own.
      </h2>
      <RouterLink to="game" class="btn">New Game</RouterLink>
      <button class="btn" id="load_button" v-on:click="toggleDiv('load_div');">Load Game</button>
      <div id="load_div" style="display: none;">
        <!--<p>Insert Game File</p>-->
        <input type="file" accept=".txt">
      </div>
      <RouterLink to="editor" class="btn">Create Game</RouterLink>
    </div>
    <div class="flex justify-center mx-auto rounded bg-cyan-600 text-center border-black shadow py-1 w-40">
      <p class="text-black" :style="{ fontFamily: selectedFont }">Made with
        <img class="inline-block" src="../assets/vue.svg" alt="vue" />
      </p>
    </div>
  </section>
</template>
