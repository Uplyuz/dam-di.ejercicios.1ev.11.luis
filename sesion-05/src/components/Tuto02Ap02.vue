<template>
    <div>
    <ul>
    <li v-for="(numero, index) in numeros" :key="index">{{ numero }}
   </li>
    </ul>
    </div>
   </template>
   <script setup>
   import { ref } from 'vue';
   const numeros = ref([1, 2, 3, 4, 5]);
   </script>
   