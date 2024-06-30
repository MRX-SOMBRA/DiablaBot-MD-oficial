import fetch from 'node-fetch';
import mensajes, { obtenerMensajeAleatorio } from './Frases-librery/mensajes.js';

const handler = async (m, { conn }) => {
    try {
        const consejo = obtenerMensajeAleatorio('consejos');

        const response = await fetch('https://source.unsplash.com/random');
        if (!response.ok) {
            throw new Error(`API error: ${response.statusText}`);
        }

        const imageUrl = response.url;

        conn.reply(m.chat, `
*╭─────◈☘️◈──────╮*
${consejo}
*╰─────◈☘️◈──────╯*`, m, {
            contextInfo: {
                externalAdReply: {
                    title: '☘️ Consejo ☘️',
                    body: '¡Un consejo inspirador para tu día!',
                    sourceUrl: 'https://unsplash.com',
                    thumbnail: imageUrl
                }
            }
        });
    } catch (error) {
        console.error(error);
        conn.reply(m.chat, 'Hubo un error al obtener el consejo. Inténtalo más tarde.', m);
    }
};

handler.help = ['conxd'];
handler.tags = ['frases'];
handler.command = ['conxd'];

export default handler;