<template>
    <div>
    <ul>
    <li v-for="(tarea, index) in tareas" :key="index">{{
   tarea.titulo }}</li>
    </ul>
    </div>
   </template>
   <script setup>
   import { ref } from 'vue';
   const tareas = ref([
    { titulo: 'Comprar leche' },
    { titulo: 'Hacer ejercicio' },
    { titulo: 'Estudiar Vue 3' }
   ]);
   </script>
   