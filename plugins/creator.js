let { MessageType } = (await import('@adiwajshing/baileys')).default
import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

 let tag = `@${m.sender.split('@')[0]}`
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;MangDTech⸙;;;\nFN:MangDTech⸙\nORG:MangDTech⸙\nTITLE:\nitem1.TEL;waid=6285658019360:+62 856-5801-9360\nitem1.X-ABLabel:MangDTech⸙\nX-WA-BIZ-DESCRIPTION:${htjava} Tᴀᴋ ᴍᴇɴᴇʀɪᴍᴀ sᴀᴠᴇ ᴋᴏɴᴛᴀᴋ!!\nX-WA-BIZ-NAME:MangDTech⸙\nEND:VCARD`
//------- NOMOR
 const pp = fs.readFileSync('./media/own.jpg')
  let nowner1 = `${nomorown1.split`@`[0]}@s.whatsapp.net`
let teksnomor = (
`╳ ── ◸ *Mʏ Oᴡɴᴇʀ* ◹ ── ╳
⟣⟮ *${nameown1}* ⟯⟢
⟬ @${nomorown1.split`@`[0]} ⟭
┆`
)
//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown1 + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1])
let teksbio = `┆⫹⫺ 💌 Nama : MangDTech
┆⫹⫺ ✉️ Nama RL : MangDTech
┆⫹⫺ ♂️ Gender : Pria
┆⫹⫺ ⏰ Tanggal lahir : 24 - 02 - 2003
┆⫹⫺ 🎨 Umur : 20
┆⫹⫺ 🧩 Hobby : 𝙼𝚘𝚍𝚒𝚏𝚒𝚔𝚊𝚜𝚒 𝚙𝚎𝚛𝚊𝚗𝚐𝚔𝚊𝚝 𝚕𝚞𝚗𝚊𝚔
┆⫹⫺ 💬 Sifat : ASIK,BAIK,RAMAH
┆⫹⫺ 🗺️ Tinggal : Indonesia, Sumatera Barat
└––––––––––––·•
`

  let tek = `⟣⟞⟚⟝ 〨⎣ *Nᴏᴛᴇ* ⎤〨 ⟞⟚⟝⟢
┆
𐚀 Oᴡɴᴇʀ Tɪᴅᴀᴋ Rᴇsᴘᴏɴᴅ Cʜᴀᴛ Aɴᴇʜ
𐚀 Oᴡɴᴇʀ Bᴇʀʜᴀᴋ Bʟᴏᴄᴋ Sɪᴀᴘᴀ Sᴀᴊᴀ
𐚀 Gᴀᴋ Rᴇsᴘᴏɴᴅ Kᴀʟᴏ Mɪɴᴛᴀ Sᴄ
𐚀 Eᴛɪᴋᴀɴʏᴀ Dɪᴘᴀᴋᴇ
𐚀 Cʜᴇᴛ Aɴᴇʜ Gᴀᴋ Jᴇʟᴀs Bᴀɴ/Bʟᴏᴄᴋ
𐚀 Cᴀʟʟ Bʟᴏᴄᴋ\n⫹ Kᴇᴛɪ *.rules* Uɴᴛᴜᴋ Mᴇʟɪʜᴀᴛ Rᴜʟᴇs Sᴇʟᴇɴɢᴋᴀᴘɴʏᴀ ⫺`
const sections = 
[{
title: `⫹⫺ Oᴛʜᴇʀ ⫹⫺`,
rows: [
{title: "⸙ Kontak", rowId: ".owner kontak"},
{title: "⸙ Nomor", rowId: ".owner nomor"},
{title: "⸙ Biodata MangDTech", rowId: ".owner bio"},
]}, {
title: `⬔ Sᴜᴘᴘᴏʀᴛ Mᴇ ⬔`,
rows: [
{title: "〠 Donasi", rowId: ".owner nomor"},
{title: "〠 Sewa", rowId: ".sewa"},
{title: "〠 Buy Premium", rowId: ".premium"},
]},]
const listMessage = {
  text: tek,
  footer: wm,
  title: null,
  buttonText: "Cʟɪᴄᴋ",
  sections
}
  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {


        case 'kontak': 
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: m })
        break
          case 'nomor':
         /* conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nomorown1] }})*/
 /*  conn.sendButton(m.chat, teksnomor, null, pp, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m, { contextInfo: { mentionedJid: [nomorown1] }})*/
 conn.send2ButtonImg(m.chat, fs.readFileSync('./media/own.jpg').buffer, teksnomor, `Halo ${tag}\nIᴛᴜ Oᴡɴᴇʀ Kᴜ⫺⫰⫹\n` + botdate, `Sewa Bot`, `.sewa`, 'Menu', `.menu`, m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://google.com',
    mediaType: 2, 
    description: sgc,
    title: "Join Sini Juga Cuy!",
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sgc
     }}
  })
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

   conn.sendButton(m.chat, '┍┈༺ *Biodata MangDTech* ༻', teksbio, ppown, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break                      
            
          default:
           return conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i
export default handler
