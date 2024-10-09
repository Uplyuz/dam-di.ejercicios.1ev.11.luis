<template>
    <div>
    <h1>{{ datos.mensaje }}</h1>
    <p>Autor: {{ datos.autor }}</p>
    <p>Fecha: {{ datos.dia }}/{{ datos.mes }}/{{ datos.anio }}</p>
    <p>Contador: {{ datos.contador }}</p>
   
    <button @click="cambiarDatos">Cambiar Datos</button>
    </div>
</template>

<script setup>
   import {ref,reactive,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted } from 'vue';
   // Usamos reactive para crear un objeto reactivo con varias propiedades
   const datos = reactive({
    mensaje: "¡Hola, Mundo!",
    autor: "Anónimo",
    dia: 1,
    mes: 1,
    anio: 2023,
    contador:0
   });
   // Función para cambiar los datos de manera reactiva
   const cambiarDatos = () => {
    datos.mensaje = "¡Mensaje cambiado!";
    datos.autor = "Juan Pérez";
    datos.dia = 15;
    datos.mes = 12;
    datos.anio = 2024;
    datos.contador=1;
   };

   onBeforeMount(() => {
  const now = new Date();
  const time = now.toISOString().slice(11, 23); 
  console.log(`Evento: onBeforeMount - Hora: ${time}`);
});

onMounted(() => {
  const now = new Date();
  const time = now.toISOString().slice(11, 23); 
  console.log(`Evento: onMounted - Hora: ${time}`);
});

onBeforeUpdate(() => {
  const now = new Date();
  const time = now.toISOString().slice(11, 23); 
  console.log(`Evento: onBeforeUpdate - Hora: ${time}`);
  datos.contador++; 
});

onUpdated(() => {
  const now = new Date();
  const time = now.toISOString().slice(11, 23); 
  console.log(`Evento: onUpdated - Hora: ${time}`);
  
});

onBeforeUnmount(() => {
  const now = new Date();
  const time = now.toISOString().slice(11, 23);
  console.log(`Evento: onBeforeUnmount - Hora: ${time}`);
});

onUnmounted(() => {
  const now = new Date();
  const time = now.toISOString().slice(11, 23); 
  console.log(`Evento: onUnmounted - Hora: ${time}`);
});
</script>
   
<style >

</style>