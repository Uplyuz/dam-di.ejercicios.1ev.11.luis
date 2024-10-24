<template>
    <div>
      <h3>Receptor {{ id }}</h3>
      <p v-if="currentMessage">{{ currentMessage }}</p>
      <p v-else>No hay mensajes.</p>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
import { eventBus } from '@/eventBus';  
  const id = 1; // Cambia a 2 para el segundo receptor
  const currentMessage = ref('');
  
  // Watch para reaccionar a los cambios en el bus de eventos
  watch(
    () => eventBus.messages[id],
    (newMessage) => {
      currentMessage.value = newMessage || '';
    },
    { immediate: true } // Ejecuta la función de inmediato para obtener el mensaje inicial
  );
  </script>
  