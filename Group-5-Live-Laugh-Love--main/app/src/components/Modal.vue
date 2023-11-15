<script lang="ts">
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<template>
  <div>
      <div class="overlay" @click="close"></div>
      <div class="modal">
        <span @click="close" style="cursor: pointer; float: right;">&times;</span>
        <slot>This is the default content!</slot>
      </div>
    </div>
</template>

<style>
  .modal {
      display: none;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 20px;
      background-color: #fff;
      border: 1px solid #ccc;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      z-index: 1;
  }

  /* Style the overlay background */
  .overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
  }
</style>