import { databases, functions } from './appwrite.js';

// Botón de pago
document.getElementById('btnPago').addEventListener('click', async () => {
    const response = await functions.createExecution(
        'processPayment',  // ID de tu Function en AppWrite
        JSON.stringify({ userId: localStorage.getItem('userId') })
    );
    alert('Pago verificado. ¡Chat activado!');
});

// Cargar mensajes
const chats = await databases.listDocuments(
    '681ed0b30030c11737d0',  // DB ID
    '68222cc2002acd79b952'   // Chats Collection ID
);