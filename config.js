/* ⚙️ Credits to:
* AzamiJs
* Elrebelde21
* GataNina-Li */

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

 global.owner = [
[51964177009', '🍁 Sombra - 𝗖𝗹𝗲𝗮𝘁𝗼𝗿 🐼', true],
[51964177009', '🪷 Sombra - 𝐂𝐫𝐢𝐩𝐭𝐨𝐎𝐅𝐂 🌠', true],
[51964177009', 'Sombra Owner', true]]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +51964177009
global.confirmCode = ''

global.suittag = ['5214531287294']
global.mods = []
global.prems = []

//Solo desarrolladores aprobados
global.isdev = [ /* [51964177009'], */ [51964177009'], [51964177009'], [51964177009'], ['51964177009'], [51964177009'], [51964177009'], [51964177009'], [51964177009'], ['51964177009'], [51964177009']]

global.packname = '🌸 ᴰⁱᵃᵇˡⁱᵗᵃᴮᵒᵗ⁻ᴹᴰ 🐼'
global.author = 'Enzito'
global.wm = '🍭 𝑫𝒊𝒂𝒃𝒍𝒂𝑩𝒐𝒕-𝑴𝑫 💫'
global.wm2 = '🍁 𝒟𝒾𝒶𝒷𝓁𝒶 - 𝐵𝑜𝓉 - 𝑀𝒟 🌸'
global.jxtxn = 'Enzito'
global.cb = '🌸 ᴅɪᴀʙʟᴀʙᴏᴛ-ᴍᴅ 💖'

global.vs = '1.0.2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = 'ʙʏ ᴱⁿᶻᵒ.ᴏғᴄ'
global.devnum = '+51929972576'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
