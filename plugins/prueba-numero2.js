import fetch from 'node-fetch';

const handler = async (m, { conn }) => {
    try {
        const response = await fetch('https://api.quotable.io/random?tags=inspirational|life');
        if (!response.ok) throw 'API error';

        const data = await response.json();
        const consejo = data.content;

        conn.reply(m.chat, `
*╭─────◈☘️◈──────╮*
${consejo}
*╰─────◈☘️◈──────╯*`, m, {
            contextInfo: {
                externalAdReply: {
                    title: '☘️ Consejo ☘️',
                    body: '¡Un consejo inspirador para tu día!',
                    sourceUrl: 'https://quotable.io',
                    thumbnail: 'https://quotable.io/favicon.ico'
                }
            }
        });
    } catch (error) {
        console.error(error);
        conn.reply(m.chat, 'Hubo un error al obtener el consejo. Inténtalo más tarde.', m);
    }
};

handler.help = ['consejo'];
handler.tags = ['frases'];
handler.command = ['consejo'];

export default handler;