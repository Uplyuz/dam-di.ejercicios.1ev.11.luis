<template>
    <div>
    <!-- @click es un manejador de eventos que ejecuta el codigo
   indicado, en este caso ejecuta la linea de javascript que compara
   valores-->
    <button @click="mostrarBoton = !mostrarBoton">Mostrar/Ocultar Segundo Botón</button>
    <button v-if="mostrarBoton">Segundo Botón</button>
    </div>
   </template>
   <script setup>
   import { ref } from 'vue';
   const mostrarBoton = ref(false);
   </script>