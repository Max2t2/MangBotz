import hmtai from 'hmtai'
let handler = async(m, { conn }) => {
let img = await hmtai.nsfw.zettaiRyouiki()
await conn.sendFile(m.chat, img, '', '', m)}
handler.help = ['zy']
handler.tags = ['nsfw']
handler.command = /^(zy)$/i
export default handler
