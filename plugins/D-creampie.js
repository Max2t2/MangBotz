import hmtai from 'hmtai'
let handler = async(m, { conn }) => {
let img = await hmtai.nsfw.creampie()
await conn.sendFile(m.chat, img, '', '', m)}
handler.help = ['creampie']
handler.tags = ['nsfw']
handler.command = /^(creampie)$/i
export default handler
