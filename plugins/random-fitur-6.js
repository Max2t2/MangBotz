import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import fs from "fs"
import { Quotes, JalanTikusMeme } from 'dhn-api'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let imgr = flaaa.getRandom()

if (command == 'exchange') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} IDR USD 50000`

let f = await fetch(`https://v6.exchangerate-api.com/v6/0dd0737285141eb9fa078319/pair/${args[0]}/${args[1]}/${args[2]}`)
let x = await f.json()
let caption = `*Last Up:* ${x.time_last_update_utc}
*Next Up:* ${x.time_next_update_utc}
*Dari:* ${x.base_code}
*Ke:* ${x.target_code}

*Rate:* ${x.conversion_rate}
*Result:* ${x.conversion_result}`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m)
}

if (command == 'ipcountry') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} 8.8.8.8`

let f = await fetch(`https://api.country.is/${args[0]}`)
let x = await f.json()
let caption = `*Title:* ${x.country}
*Ip:* ${x.ip}`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m)
}

if (command == 'emojimix') {
if (!args[0]) throw `Ex: ${usedPrefix+command} emot + emot`
let anu = await fetchJson(`https://levanter.up.railway.app/emix?q=${encodeURIComponent(args[0])}`)
let stiker = await sticker(false, anu.result, global.packname, global.author)
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
}

if (command == 'calc2') {
let f = await fetch(`https://levanter.up.railway.app/calc?q=${args[0]}${args[1]}${args[2]}`)
let x = await f.json()
let caption = `*Hasil:* ${x.result}`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], m)
}

if (command == 'gqr') {
let img = `https://levanter.up.railway.app/gqr?text==${text}`
let caption = `*Hasil:*`
await conn.sendButton(m.chat, caption, wm, img, [
                ['Next', `${usedPrefix + command}`]
            ], m)
}

if (command == 'mvsearch') {
let f = await fetch(`https://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
let x = await f.json()
let caption = `*Title:* ${x.Title}
*Year:* ${x.Year}
*Rated:* ${x.Rated}
*Released:* ${x.Released}
*Runtime:* ${x.Runtime}
*Genre:* ${x.Genre}
*Director:* ${x.Director}
*Writer:* ${x.Writer}
*Actors:* ${x.Actors}
*Plot:* ${x.Plot}
*Language:* ${x.Language}
*Country:* ${x.Country}
*Awards:* ${x.Awards}
`
await conn.sendMessage(m.chat, caption, wm, x.Poster, m)
}

if (command == 'lmaker') {
if (!args[0]) return m.reply(`Logo Maker List
Usage: .lmaker master|3|Haloo
1 - 11 : calligraphy
1 - 2 : beast
1 - 6 : pubg
1 - 6 : rrr
1 - 2 : free fire
1 - 2 : india
1 - 3 : avengers
1 - 2 : pushpa
1 - 3 : master
1 - 7 : ipl
1      : dhoni
1      : vijay
1 - 6 : kgf`)
  
  let urut = text.split`|`
  let thm = urut[0]
  let text1 = urut[1]
  let text2 = urut[2]
  
        let images = `https://raganork-network.vercel.app/api/logo/${thm}?style=${text1}&text=${text2}`
  let caption = `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
}

if (command == 'quotes') {
let x = await Quotes()
let caption = `${x.quotes}
let emojis = 🤖
🤠 ${x.author}`
await conn.sendButton(m.chat, caption, packname + ' - ' + author, null, [[emojis + ' Next ' + emojis, usedPrefix + command]], m)
            if (args[0] == 'islami') {
            let ai = await(await fetch(global.API('lolhuman', '/quotes/islami', {}, 'apikey'))).json()
            let caption = `${ai.result}

🤠 ${author}`
await conn.sendButton(m.chat, caption, packname + ' - ' + author, null, [[emojis + ' Next ' + emojis, usedPrefix + command]], m)
            }
}

if (command == 'jtmeme') {
let x = await JalanTikusMeme()
await conn.sendButton(m.chat, '[ JALANTIKUS ]', packname + ' - ' + author, x, [[emojis + ' Next ' + emojis, usedPrefix + command]], m)
}

if (command == 'wallhaven') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} naru`
var ure
try {
ure = "https://wallhaven.cc/api/v1/search?apikey=V9TPKgxBdGOIrJcnlPzg5OdiL62913o5&q=" + text
} catch (e) {
ure = "https://wallhaven.cc/api/v1/search?q=" + text
}
let f = await fetch(ure)
let x = await f.json()
let caption = `ID: ${x.data[0].id}
Views: ${x.data[0].views}
Category: ${x.data[0].category}
Upload: ${x.data[0].created_at}`
await conn.sendButton(m.chat, caption, wm, x.data[0].path, [
                ['Next', `${usedPrefix + command}`]
            ], m)
}

}
handler.command = handler.help = ['exchange', 'ipcountry', 'emojimix', 'mvsearch', 'mvsearch2', 'lmaker', 'quotes', 'jtmeme', 'wallhaven', 'gqr']
handler.tags = ['tools']

export default handler

const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options)
.then(response => response.json())
.then(json => {
resolve(json)
})
.catch((err) => {
reject(err)
})})
