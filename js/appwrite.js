import { Client, Account, Databases, Functions, ID } from 'appwrite';

const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('681e40a40036e378668a');  // Reemplaza si es necesario

export const account = new Account(client);
export const databases = new Databases(client);
export const functions = new Functions(client);
export { ID };  // Exportar ID para usarlo en auth.js