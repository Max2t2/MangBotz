import hmtai from 'hmtai'
let handler = async(m, { conn }) => {
let img = await hmtai.nsfw.masturbation()
await conn.sendFile(m.chat, img, '', '', m)}
handler.help = ['masturbation']
handler.tags = ['nsfw']
handler.command = /^(masturbation)$/i
export default handler
