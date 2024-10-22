<template>
    <div>
    <img v-show="mostrarImagen" src="https://via.placeholder.com/150"
   alt="Imagen dinámica" />
    <button @click="mostrarImagen = !mostrarImagen">Mostrar/Ocultar
   Imagen</button>
    </div>
   </template>
   <script setup>
   import { ref } from 'vue';
   const mostrarImagen = ref(false);
   </script>
º   