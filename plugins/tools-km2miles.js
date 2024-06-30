var handler = async (m, { text, conn }) => {
    if (!text) return conn.reply(m.chat, `🎌 *Ingrese la cantidad de kilómetros que quiere convertir a millas*\n\nEjemplo, !km2miles 10`, m);

    const km = parseFloat(text);
    if (isNaN(km)) return conn.reply(m.chat, `❌ *Ingrese un número válido de kilómetros*`, m);

    const miles = km * 0.621371;
    conn.reply(m.chat, `🌍 *${km} kilómetros son aproximadamente ${miles.toFixed(2)} millas*`, m);
};

handler.help = ['km2miles'];
handler.tags = ['tools'];
handler.command = /^km2miles$/i;

handler.register = true;
handler.limit = true;

export default handler;