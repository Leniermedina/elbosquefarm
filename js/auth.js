import { account, databases, ID } from './appwrite.js';

document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const telefono = formData.get('telefono');

    try {
        // 1. Crear usuario en Auth
        await account.create(
            ID.unique(),
            `${telefono}@cubacitas.com`,
            telefono.slice(1),
            formData.get('nombre')
        );

        // 2. Guardar metadata en DB
        await databases.createDocument(
            '681ed0b30030c11737d0',  // DB ID
            '68221e1e000320dfe780',  // Users Collection ID
            ID.unique(),
            {
                nombre: formData.get('nombre'),
                telefono,
                isVerified: false
            }
        );
        alert('¡Registro exitoso!');
        window.location.href = 'chat.html';
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});