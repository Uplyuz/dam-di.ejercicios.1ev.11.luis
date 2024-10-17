<template>
    <div>
    <p v-if="estaEncendido">El sistema está encendido</p>
    <p v-else>El sistema está apagado</p>
    <button @click="estaEncendido = !estaEncendido">Alternar Estado</button>
    </div>
   </template>
   <script setup>
   import { ref } from 'vue';
   const estaEncendido = ref(false);
   </script>
   