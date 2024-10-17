<template>
    <div>
    <input v-model="texto" placeholder="Escribe algo" />
    <p>Lo que escribiste: {{ texto }}</p>
    </div>
   </template>
   <script setup>
   import { ref } from 'vue';
   const texto = ref('');
   </script>