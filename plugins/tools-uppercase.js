//créditos a https://github.clm/matias-crypto 

var handler = async (m, { text, conn }) => {
    if (!text) return conn.reply(m.chat, `🎌 *Ingrese el texto que quiere convertir a mayúsculas*\n\nEjemplo, !uppercase [texto]`, m);

    const uppercasedText = text.toUpperCase();
    conn.reply(m.chat, `🔠 *Texto en mayúsculas*:\n\n${uppercasedText}`, m);
};

handler.help = ['uppercase'];
handler.tags = ['tools'];
handler.command = /^uppercase$/i;

handler.register = true;
handler.limit = true;

export default handler;