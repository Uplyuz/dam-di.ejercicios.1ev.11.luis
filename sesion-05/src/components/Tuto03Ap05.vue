<template>
    <div>
    <a :href="enlaceUrl" target="_blank">Visita mi página</a>
    </div>
   </template>
   <script setup>
   import { ref } from 'vue';
   const enlaceUrl = ref('https://www.example.com');
   </script>
   