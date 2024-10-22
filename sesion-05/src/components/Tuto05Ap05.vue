<template>
    <div>
    <p v-show="mostrarAdvertencia" class="advertencia">¡Cuidado! Esto
   es una advertencia.</p>
    <button @click="mostrarAdvertencia =
   !mostrarAdvertencia">Mostrar/Ocultar Advertencia</button>
    </div>
   </template>
   <script setup>
   import { ref } from 'vue';
   const mostrarAdvertencia = ref(false);
   </script>
   <style>
   .advertencia {
    color: red;
    font-weight: bold;
   }
   </style>
   