import hmtai from 'hmtai'
let handler = async(m, { conn }) => {
let img = await hmtai.nsfw.yuri()
await conn.sendFile(m.chat, img, '', '', m)}
handler.help = ['yuri']
handler.tags = ['nsfw']
handler.command = /^(yuri)$/i
export default handler
