<template>
    <div>
    <select v-model="color">
    <option value="Rojo">Rojo</option>
    <option value="Verde">Verde</option>
    <option value="Azul">Azul</option>
    </select>
    <p>Color seleccionado: {{ color }}</p>
    </div>
   </template>
   <script setup>
   import { ref } from 'vue';
   const color = ref('Rojo');
   </script>
   