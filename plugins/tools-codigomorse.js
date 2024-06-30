var handler = async (m, { text, conn }) => {
    if (!text) return conn.reply(m.chat, `🎌 *Ingrese el texto que quiere convertir a código Morse*\n\nEjemplo, !morse [texto]`, m);

    const morseCode = {
        'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---',
        'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
        'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..',
        '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----'
    };
    const morse = text.toLowerCase().split('').map(char => morseCode[char] || char).join(' ');
    conn.reply(m.chat, `🔤 *Texto en Morse*:\n\n${morse}`, m);
};

handler.help = ['morse'];
handler.tags = ['tools'];
handler.command = /^morse$/i;

handler.register = true;
handler.limit = true;

export default handler;