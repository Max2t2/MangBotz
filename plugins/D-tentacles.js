import hmtai from 'hmtai'
let handler = async(m, { conn }) => {
let img = await hmtai.nsfw.tentacles()
await conn.sendFile(m.chat, img, '', '', m)}
handler.help = ['tentacles']
handler.tags = ['nsfw']
handler.command = /^(tentacles)$/i
export default handler
