<template>
    <div>
    <input type="number" v-model.number="edad" placeholder="Ingresa tu
   edad" />
    <button @click="verificarEdad">Verificar Edad</button>
    <p v-if="edad >= 18">Acceso concedido</p>
    </div>
   </template>
   <script setup>
   import { ref } from 'vue';
   const edad = ref(0);
   const verificarEdad = () => {
    // Este botón puede tener lógica adicional si es necesario
   };
   </script>