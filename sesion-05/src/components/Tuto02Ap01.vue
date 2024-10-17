<template>
    <div>
    <ul>
    <li v-for="(nombre , index) in nombres" :key="index">{{ nombre }}
   </li>
    </ul>
    </div>
   </template>
   <script setup>
   import { ref } from 'vue';
   const nombres = ref(['Ana', 'Juan', 'María']);
   </script>
   