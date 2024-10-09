<template>
    <div>
    <h1>{{ datos.mensaje }}</h1>
    <p>Autor: {{ datos.autor }}</p>
    <p>Fecha: {{ datos.dia }}/{{ datos.mes }}/{{ datos.anio }}</p>
   
    <button @click="cambiarDatos">Cambiar Datos</button>
    </div>
</template>

<script setup>
   import { reactive } from 'vue';
   // Usamos reactive para crear un objeto reactivo con varias propiedades
   const datos = reactive({
    mensaje: "¡Hola, Mundo!",
    autor: "Anónimo",
    dia: 1,
    mes: 1,
    anio: 2023
   });
   // Función para cambiar los datos de manera reactiva
   const cambiarDatos = () => {
    datos.mensaje = "¡Mensaje cambiado!";
    datos.autor = "Juan Pérez";
    datos.dia = 15;
    datos.mes = 12;
    datos.anio = 2024;
   };
</script>
   
<style >

</style>