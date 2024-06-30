import fetch from 'node-fetch';
import { URLSearchParams } from 'url';

var handler = async (m, { text, conn }) => {
    if (!text) return conn.reply(m.chat, `🎌 *Ingrese el código que quiere ofuscar*\n\nEjemplo, !obfuscate console.log("Hola Mundo")`, m);

    const params = new URLSearchParams();
    params.append('input', text);

    try {
        const response = await fetch('https://www.toptal.com/developers/javascript-minifier/api/raw', {
            method: 'POST',
            body: params,
        });

        if (!response.ok) {
            return conn.reply(m.chat, `❌ *Error al ofuscar el código*`, m);
        }

        const obfuscatedCode = await response.text();
        conn.reply(m.chat, `🔒 *Código ofuscado*:\n\n${obfuscatedCode}`, m);
    } catch (error) {
        conn.reply(m.chat, `❌ *Error al ofuscar el código*: ${error.message}`, m);
    }
};

handler.help = ['obfuscate'];
handler.tags = ['tools'];
handler.command = /^obfuscate$/i;

handler.register = true;
handler.limit = true;

export default handler;