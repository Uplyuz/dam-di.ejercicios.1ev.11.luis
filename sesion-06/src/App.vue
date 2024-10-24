<script setup>
import EmisorComponent from './components/EmisorComponent.vue';
import ReceptorComponent from './components/ReceptorComponent.vue';
import ReceptorComponentCopy from './components/ReceptorComponent copy.vue';
</script>

<template>
    <h1>Bus de Eventos con Vue 3</h1>
    <EmisorComponent />
    <ReceptorComponent id="1" />
    <ReceptorComponentCopy id="2"></ReceptorComponentCopy>
</template>

<style scoped>
</style>