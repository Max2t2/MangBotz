import hmtai from 'hmtai'
let handler = async(m, { conn }) => {
let img = await hmtai.nsfw.cuckold()
await conn.sendFile(m.chat, img, '', '', m)}
handler.help = ['cuckold']
handler.tags = ['nsfw']
handler.command = /^(cuckold)$/i
export default handler
