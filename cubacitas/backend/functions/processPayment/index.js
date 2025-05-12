import { Client, Databases } from 'node-appwrite';

export default async ({ req, res }) => {
  const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('681e40a40036e378668a')
    .setKey(process.env.APPWRITE_API_KEY);

  const { userId } = JSON.parse(req.body);
  const databases = new Databases(client);

  // Actualizar usuario a "verificado"
  await databases.updateDocument(
    '681ed0b30030c11737d0', // DB ID
    '68221e1e000320dfe780', // Users Collection ID
    userId,
    { isVerified: true }
  );

  return res.json({ success: true });
};