<template>
    <div>
    <p v-show="mostrarMensaje">Bienvenido a Vue 3</p>
    <button @click="mostrarMensaje = !mostrarMensaje">Mostrar/Ocultar
   Mensaje</button>
    </div>
   </template>
   <script setup>
   import { ref } from 'vue';
   const mostrarMensaje = ref(true);
   </script>
   