<template>
    <div>
      <button @click="sendMessage(1)">Enviar a Receptor 1</button>
      <button @click="sendMessage(2)">Enviar a Receptor 2</button>
    </div>
  </template>
  
  <script setup>
import { eventBus } from '@/eventBus';  
  const sendMessage = (id) => {
    const message = `Mensaje para el receptor ${id}`;
    eventBus.sendMessage(id, message);
  };
  </script>
  