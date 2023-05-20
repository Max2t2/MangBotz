import hmtai from 'hmtai'
let handler = async(m, { conn }) => {
let img = await hmtai.nsfw.vagina()
await conn.sendFile(m.chat, img, '', '', m)}
handler.help = ['vagina']
handler.tags = ['nsfw']
handler.command = /^(vagina)$/i
export default handler
