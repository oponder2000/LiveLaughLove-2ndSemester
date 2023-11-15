<script setup lang="ts">
import { useFontStore } from '../stores/fontStore';

const fontStore = useFontStore();

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
    <section class="card bg-base-200 py-5 mx-auto w-3/4" :style="{ fontFamily: fontStore.selectedFont, color: fontStore.selectedColor }">
        <div class="card-body w-3/4 mx-auto">
            <img class="mx-auto" src="src/img/symbol.png" alt="System Symbol" width="200" height="200">
            <h2 class="text-xl text-center  mx-auto pb-1">
                <!-- TODO: this could be writtin better -->
                Welcome to our app, where we aim to design the simplest way of creating and sharing accessible
                story games. Try out our sample game, or get started on writing your own.
            </h2>
            <RouterLink to="game" class="btn" :style="{ fontFamily: fontStore.selectedFont, color: fontStore.selectedColor }">Play Test Game</RouterLink>
            <button class="btn" id="load_button" v-on:click="toggleDiv('load_div');" :style="{ fontFamily: fontStore.selectedFont, color: fontStore.selectedColor}">Load Game (Start/Continue Game)</button>
            <div class="col-sm-2" id="load_div" style="display: none;">
                <p>Insert Game File</p>
                <input type="file" accept=".txt">
                <button class="btn" :style="{ fontFamily: fontStore.selectedFont, color: fontStore.selectedColor}">Load</button>
                <button class="btn" :style="{ fontFamily: fontStore.selectedFont, color: fontStore.selectedColor}">CONTINUE</button>
                <button class="btn" :style="{ fontFamily: fontStore.selectedFont, color: fontStore.selectedColor}">NEW GAME</button>
            </div>
            <button class="btn" id="edit_button" v-on:click="toggleDiv('edit_div');" :style="{ fontFamily: fontStore.selectedFont, color: fontStore.selectedColor}">Editor (Create/Edit Game)</button>
            <div class="col-sm-2" id="edit_div" style="display: none;">
                <p>Insert Draft File</p>
                <input type="file" accept=".txt">
                <button class="btn" :style="{ fontFamily: fontStore.selectedFont, color: fontStore.selectedColor}">Load</button>
                <button class="btn" :style="{ fontFamily: fontStore.selectedFont, color: fontStore.selectedColor}">EDIT GAME</button>
                <RouterLink to="editor" class="btn" :style="{ fontFamily: fontStore.selectedFont, color: fontStore.selectedColor}">CREATE GAME</RouterLink>
            </div>
        </div>
        <div class="flex  justify-center mx-auto rounded bg-cyan-600  text-center border-black shadow py-1 w-40">
            <p class="text-black">Made with
                <img class="inline-block" src="../assets/vue.svg" alt="vue" />
            </p>
        </div>
    </section>
</template>
