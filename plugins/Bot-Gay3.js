import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {

        if (!text) throw `🪷 𝐄𝐑𝐑𝐎𝐑 🪷 𝐢𝐧𝐠𝐫𝐞𝐬𝐚 𝐞𝐥 𝐭𝐢𝐭𝐮𝐥𝐨 𝐝𝐞 𝐮𝐧𝐚 𝐜𝐚𝐧𝐜𝐢𝐨𝐧\n\n[ 💫 ] 𝐞𝐣𝐞𝐦𝐩𝐥𝐨 *${usedPrefix + command}* 𝐋𝐢𝐥 𝐏𝐞𝐞𝐩 𝐡𝐚𝐭𝐞 𝐦𝐲 𝐥𝐢𝐟𝐞`
        let res = await yts(text)
        let vid = res.videos[0]
        if (!vid) throw `🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 ᥎і́ძᥱ᥆/ᥲᥙძі᥆ ᥒ᥆ ᥱᥒᥴ᥆ᥒ𝗍rᥲძ᥆`
        let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
        //const url = 'https://www.youtube.com/watch?v=' + videoId
        m.react('💖')
        let play = `┏──────•◈•──────╮
 📌 *Título* : ${title}
┃ ✧ » ◇ « ✧ » ✦ « ✧ » ◇ « ✧ 
 📆 *Publicado:* ${ago}
┃✧ » ◇ « ✧ » ✦ « ✧ » ◇ « ✧
 ⌚ *Duración:* ${timestamp}
┃ ✧ » ◇ « ✧ » ✦ « ✧ » ◇ « ✧
 👀 *Vistas:* ${views}
┗───── • ◆ • ─────╯`
 await conn.sendButton(m.chat, play, fgig, thumbnail, [
    ['🍧 𝐀𝐔𝐃𝐈𝐎 💫', `${usedPrefix}fgmp3 ${url}`],
    ['🍿 𝐕𝐈𝐃𝐄𝐎 ✨', `${usedPrefix}fgmp4 ${url}`]
  ], m)
}
handler.help = ['bot']
handler.tags = ['descargas']
handler.command = ['play', 'playqq', 'play2']
//handler.disabled = true

export default handler
