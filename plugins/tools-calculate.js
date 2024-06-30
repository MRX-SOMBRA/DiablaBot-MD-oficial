//créditos a https://github.com/matias-crypto 
var handler = async (m, { text, conn }) => {
    if (!text) return conn.reply(m.chat, `🎌 *Ingrese la expresión matemática que quiere calcular*\n\nEjemplo, !calculate 2+2`, m);

    try {
        const result = eval(text);
        conn.reply(m.chat, `🧮 *Resultado*: ${result}`, m);
    } catch (error) {
        conn.reply(m.chat, `❌ *Error al calcular*: ${error.message}`, m);
    }
};

handler.help = ['calculate'];
handler.tags = ['tools'];
handler.command = /^calculate$/i;

handler.register = true;
handler.limit = true;

export default handler;