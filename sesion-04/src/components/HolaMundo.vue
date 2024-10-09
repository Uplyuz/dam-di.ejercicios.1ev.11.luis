<template>
    <div>
    <h1>{{ mensaje }}</h1>
    <button @click="cambiarMensaje">Cambiar Mensaje</button>
    </div>
</template>
   
<script setup>
   import { ref } from 'vue';
   // Usamos ref para crear una variable reactiva
   const mensaje = ref("¡Hola, Mundo!");
   // Función para cambiar el mensaje de manera reactiva
   const cambiarMensaje = () => {
    mensaje.value = "¡Mensaje cambiado!";
   };
</script>
   
<style >

</style>