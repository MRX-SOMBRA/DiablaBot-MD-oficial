import yts from 'yt-search'

var handler = async (m, { text, conn, args, command, usedPrefix }) => {

if (!text) return conn.reply(m.chat, `🪷 *𝐄𝐬𝐜𝐫𝐢𝐛𝐚 𝐭𝐢𝐭𝐮𝐥𝐨 𝐝𝐞 𝐚𝐥𝐠𝐮𝐧 ví𝐝𝐞𝐨 𝐝𝐞 𝐘𝐨𝐮𝐭𝐮𝐛𝐞*\n\n𝐄𝐣𝐞𝐦𝐩𝐥𝐨, !${command} NovaBot`, m, fake, )

let results = await yts(text)
let tes = results.all
let teks = results.all.map(v => {
switch (v.type) {
case 'video': return `📌 *𝑻𝒊𝒕𝒖𝒍𝒐:* ${v.title}
🌸 *𝑬𝒏𝒍𝒂𝒄𝒆́:* ${v.url}
🍭 *𝑫𝒖𝒓𝒂𝒄𝒊𝒐́𝒏:* ${v.timestamp}
🌠 *𝑺𝒖𝒃𝒊𝒅𝒐:* ${v.ago}
💫 *𝑽𝒊𝒔𝒊𝒕𝒂𝒔:* ${v.views}`}}).filter(v => v).join('\n\n⁍ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩꥈ꫶࿑໋᪶݊✥---------------✥---------------ै✾⃗⌝\n\n')

conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, fkontak, m)

}
handler.help = ['ytsearch']
handler.tags = ['internet']
handler.command = /^playlist|ytbuscar|yts(earch)?$/i

handler.register = true
handler.limit = true

export default handler
      
