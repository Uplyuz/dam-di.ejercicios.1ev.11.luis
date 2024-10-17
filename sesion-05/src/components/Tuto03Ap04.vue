<template>
    <div>
    <button :disabled="estaDeshabilitado">Botón Deshabilitado</button>
    <button @click="estaDeshabilitado =!estaDeshabilitado">Habilitar/Deshabilitar Botón</button>
    </div>
   </template>
   <script setup>
   import { ref } from 'vue';
   const estaDeshabilitado = ref(true);
   </script>