<template>
    <div>
    <input v-show="mostrarInput" type="text" placeholder="Escribe
   algo" />
    <button @click="mostrarInput = !mostrarInput">Mostrar/Ocultar Caja
   de Texto</button>
    </div>
   </template>
   <script setup>
   import { ref } from 'vue';
   const mostrarInput = ref(true);
   </script>
   