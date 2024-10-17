<template>
    <div>
    <ul>
    <li v-for="(ciudad, index) in ciudades" :key="index">
    {{ index + 1 }}. {{ ciudad }}
    </li>
    </ul>
    </div>
   </template>
   <script setup>
   import { ref } from 'vue';
   const ciudades = ref(['Madrid', 'París', 'Londres']);
   </script>
   