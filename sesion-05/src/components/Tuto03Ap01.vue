<template>
    <div>
    <img :src="imagenUrl" alt="Imagen dinámica" />
    </div>
   </template>
   <script setup>
   import { ref } from 'vue';
   const imagenUrl = ref('https://via.placeholder.com/150');
   </script>
   