// eventBus.js
import { reactive } from 'vue';

export const eventBus = reactive({
  messages: {
    1: '', // Último mensaje para el receptor 1
    2: ''  // Último mensaje para el receptor 2
  },
  sendMessage(id, message) {
    this.messages[id] = message; // Guarda solo el último mensaje para cada ID
  },
});
