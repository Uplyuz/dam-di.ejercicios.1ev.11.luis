<template>
 <div>
 <p v-if="mostrarMensaje">Bienvenido a Vue 3</p>
 </div>
</template>
<script setup>
import { ref } from 'vue';
const mostrarMensaje = ref(true);
</script>
