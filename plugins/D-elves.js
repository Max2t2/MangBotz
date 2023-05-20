import hmtai from 'hmtai'
let handler = async(m, { conn }) => {
let img = await hmtai.nsfw.elves()
await conn.sendFile(m.chat, img, '', '', m)}
handler.help = ['elves']
handler.tags = ['nsfw']
handler.command = /^(elves)$/i
export default handler
