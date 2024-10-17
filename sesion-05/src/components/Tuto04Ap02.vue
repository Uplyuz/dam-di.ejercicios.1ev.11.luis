<template>
 <div>
 <input type="checkbox" v-model="marcado" />
 <p>Checkbox está {{ marcado ? 'marcado' : 'desmarcado' }}</p>
 </div>
</template>
<script setup>
import { ref } from 'vue';
const marcado = ref(false);
</script>