<script setup lang="ts">
    import { useDraftStore } from "../stores/editorStore";
    import emptyStory from "../models/templateData";
    const store = useDraftStore();
</script>

<template>
    <section class="flex justify-around mx-5">
      <div class="card bg-base-200 py-5 mx-auto w-3/4">
        <div class="card-body w-3/4 mx-auto">
            <div>
                <label for="tname" class="block">Title:</label>
                <input type="text" id= "tname" name="title" placeholder="title">
                <label for="dname" class="block">Description:</label>
                <input type="text" id= "dname" name="description" placeholder="description">
            </div>
            <div class="">
                <!--Make button onclick: create a draft file or cookie. LATER UPDATE-->
                <button class="btn btn-primary block" @click="store.initNewDraft(false);">
                    Create an Adventure
                </button>
                <router-link to="/" class="btn">Exit</router-link>
            </div>    
        </div>  
      </div>
    </section>
</template>