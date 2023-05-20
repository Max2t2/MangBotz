import hmtai from 'hmtai'
let handler = async(m, { conn }) => {
let img = await hmtai.nsfw.thighs()
await conn.sendFile(m.chat, img, '', '', m)}
handler.help = ['thighs']
handler.tags = ['nsfw']
handler.command = /^(thighs)$/i
export default handler
