<template>
    <div>
    <p v-if="esVisible">Mensaje A</p>
    <p v-else>Mensaje B</p>
    <button @click="esVisible = !esVisible">Cambiar Mensaje</button>
    </div>
   </template>
   <script setup>
   import { ref } from 'vue';
   const esVisible = ref(true);
   </script>
   