<template>
    <div>
    <button :style="{ backgroundColor: colorFondo }"
   @click="cambiarColor">Cambiar Color</button>
    </div>
   </template>
   <script setup>
   import { ref } from 'vue';
   const colorFondo = ref('blue');
   const cambiarColor = () => {
    colorFondo.value = colorFondo.value === 'blue' ? 'green' : 'blue';
   };
   </script>
   