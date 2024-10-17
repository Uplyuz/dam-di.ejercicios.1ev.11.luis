<template>
    <div>
    <p :class="{ destacado: esDestacado }">Este es un párrafo destacado.</p>
    <button @click="esDestacado = !esDestacado">Cambiar Destacado</button>
    </div>
   </template>
   <script setup>
   import { ref } from 'vue';
   const esDestacado = ref(true);
   </script>
   <style>
   .destacado {
    color: red;
    font-weight: bold;
   }
   </style>
   