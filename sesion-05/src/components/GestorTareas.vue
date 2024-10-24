<template>
  <div>
    <div :class="{ instrucciones: esInstrucciones }" v-show="mostrarInstrucciones">
      <h5>Mostrar/Ocultar instrucciones: Haz clic en el botón "Mostrar/Ocultar instrucciones" para ver o esconder eltexto destacado.</h5>
      <h5>Añadir tarea: Escribe una tarea en el campo de texto y pulsa "Añadir tarea".</h5>
      <h5>Mostrar/ocultar completadas: Usa el botón "Mostrar Todas"/"Mostrar Solo Completadas" para ver todas las tareaso solo las completadas.</h5>
      <h5>Marcar tarea completada: Marca la casilla junto a cada tarea para completarla.</h5>
      <h5>Si no hay tareas, se mostrará "No hay tareas disponibles".</h5>
    </div>
    <button @click="mostrarInstrucciones = !mostrarInstrucciones">Mostrar/Ocultar instrucciones </button>
  </div>
  <div>
    <input v-model.trim="nuevaTarea" placeholder="Añade una nueva tarea" />

    <button v-if="nuevaTarea !== ''" @click="anyadirTarea">Añadir tarea</button>

    <button @click="mostrarCompletadas = !mostrarCompletadas">
      {{ mostrarCompletadas ? "Mostrar Todas" : "Mostrar Solo Completadas" }}
    </button>
    <p v-if="tareas.length === 0">No hay tareas disponibles</p>
    <ul v-else>
      <li v-for="(tarea, index) in tareas" :key="index" v-show="!mostrarCompletadas || tarea.completado">
        {{ tarea.nombre }}
        <input type="checkbox" v-model="tarea.completado" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tareas = ref([]);
const nuevaTarea = ref("");

const mostrarCompletadas = ref(false);
const esInstrucciones = ref(true);

const mostrarInstrucciones = ref(true);

function anyadirTarea() {
  tareas.value.push({
    nombre: nuevaTarea.value,
    completado: false,
  });

  tareas.value.forEach(tarea => console.log(tarea, tareas.value.length));

}
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 20px;
  color: #333;

}

div {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: grid;
  place-items: center;
}

.instrucciones {
  background-color: #ffe4e1;
  padding: 15px;
  border-left: 5px solid #ff7f7f;
  border-radius: 5px;
  margin-bottom: 15px;
  font-weight: bold;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;

}

button:hover {
  background-color: #45a049;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #f9f9f9;
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li input[type="checkbox"] {
  transform: scale(1.2);
  margin-left: 10px;
}

p {
  color: #ff7f7f;
  font-style: italic;
  font-size: 14px;
  margin-top: 10px;
}
</style>
