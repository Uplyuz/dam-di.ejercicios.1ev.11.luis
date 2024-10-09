<template>
    <div>
    <h1>{{ mensaje }}</h1>
    <p>{{ mensajeAdicional }}</p>
    <button @click="cambiarMensaje">Cambiar Mensaje</button>
    </div>
   </template>
   <script setup>
   import { ref, computed, onMounted, onUnmounted } from 'vue';
   // Usamos ref para crear una variable reactiva
   const mensaje = ref("¡Hola, Mundo!");
   // Función para cambiar el mensaje de manera reactiva
   const cambiarMensaje = () => {
    mensaje.value = "¡Mensaje cambiado!";
   };
   // Propiedad computada que depende de 'mensaje'
   const mensajeAdicional = computed(() => {
    return mensaje.value === "¡Hola, Mundo!"
    ? "El mensaje es el original"
    : "El mensaje ha cambiado";
   });
   // Ciclo de vida: onMounted
   onMounted(() => {
    console.log("El componente HolaMundo ha sido montado");
   });
   // Ciclo de vida: onUnmounted
   onUnmounted(() => {
    console.log("El componente HolaMundo ha sido desmontado");
   });
   </script>
   
<style >

</style>