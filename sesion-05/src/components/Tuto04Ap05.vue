<template>
    <div>
    <input v-model.trim="entrada" placeholder="Ingresa texto con espacios" />
    <p>Texto ingresado: "{{ entrada }}"</p>
    </div>
   </template>
   <script setup>
   import { ref } from 'vue';
   const entrada = ref('');
   </script>