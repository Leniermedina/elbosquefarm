import { databases, functions } from './appwrite.js';

document.getElementById('btnPago').addEventListener('click', async () => {
  try {
    const response = await functions.createExecution(
      'processPayment', // ID de la función
      JSON.stringify({ userId: localStorage.getItem('userId') })
    );
    alert('Pago verificado. ¡Chat activado por 24 horas!');
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
});

// Cargar mensajes del chat
async function loadChat() {
  const chats = await databases.listDocuments(
    '681ed0b30030c11737d0', // DB ID
    '68222cc2002acd79b952', // Chats Collection ID
    [Query.equal('user1', localStorage.getItem('userId'))]
  );
  // Mostrar mensajes en el DOM...
}
loadChat();