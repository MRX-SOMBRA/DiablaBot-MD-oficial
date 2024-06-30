import countries from './Frases-librery/mensajes.js';

const handler = async (m, { conn }) => {
    try {
        const mensajePaises = countries.map(country =>
            `*País:* ${country.name}\n*Bandera:* ${country.flag}\n*Moneda:* ${country.currency}`
        ).join('\n\n');

        conn.reply(m.chat, `
╭─────◈🌍◈──────╮
${mensajePaises}
╰─────◈🌍◈──────╯`, m, {
            contextInfo: {
                externalAdReply: {
                    title: '🌍 Información de Países 🌍',
                    body: '¡Aquí tienes información sobre varios países!'
                }
            }
        });
    } catch (error) {
        console.error(error);
        conn.reply(m.chat, 'Hubo un error al obtener la información de los países. Inténtalo más tarde.', m);
    }
};

handler.help = ['pais'];
handler.tags = ['información'];
handler.command = ['pais'];

export default handler;