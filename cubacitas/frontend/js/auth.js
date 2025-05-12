import { account, databases } from './appwrite.js';

document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const telefono = formData.get('telefono');

  if (!telefono.startsWith('+53')) {
    alert('¡Solo números cubanos! Ejemplo: +5351234567');
    return;
  }

  try {
    // Crear usuario en AppWrite Auth
    const user = await account.create(
      ID.unique(),
      `${telefono}@cubacitas.com`, // Email temporal
      telefono.slice(1), // Password = teléfono sin +
      formData.get('nombre')
    );

    // Guardar datos adicionales en la colección 'users'
    await databases.createDocument(
      '681ed0b30030c11737d0', // DB ID
      '68221e1e000320dfe780', // Users Collection ID
      ID.unique(),
      {
        nombre: formData.get('nombre'),
        telefono,
        isVerified: false // Hasta que pague
      }
    );

    alert('¡Registro exitoso! Verifica tu teléfono.');
    window.location.href = 'chat.html';
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
});