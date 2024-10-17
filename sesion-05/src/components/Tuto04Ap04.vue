<template>
    <div>
    <input type="number" v-model.number="numero" placeholder="Ingresa
   un número" />
    <p>El doble del número es: {{ numero * 2 }}</p>
    </div>
   </template>
   <script setup>
   import { ref } from 'vue';
   const numero = ref(0);
   </script>