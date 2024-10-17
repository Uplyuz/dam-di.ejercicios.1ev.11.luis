<template>
    <div>
    <ul>
    <li v-for="(producto, index) in productos" :key="index">
    {{ producto.nombre }} - ${{ producto.precio }}
    </li>
    </ul>
    </div>
   </template>
   <script setup>
   import { ref } from 'vue';
   const productos = ref([
    { nombre: 'Manzana', precio: 1.2 },
    { nombre: 'Pan', precio: 0.8 },
    { nombre: 'Leche', precio: 1.5 }
   ]);
   </script>
   