<template>
    <div>
    <ul>
    <li>Elemento 1</li>
    <li v-show="mostrarElemento">Elemento 2</li>
    <li>Elemento 3</li>
    </ul>
    <button @click="mostrarElemento =
   !mostrarElemento">Mostrar/Ocultar Elemento 2</button>
    </div>
   </template>
   <script setup>
   import { ref } from 'vue';
   const mostrarElemento = ref(true);
   </script>