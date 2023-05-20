import hmtai from 'hmtai'
let handler = async(m, { conn }) => {
let img = await hmtai.nsfw.pantsu()
await conn.sendFile(m.chat, img, '', '', m)}
handler.help = ['panties']
handler.tags = ['nsfw']
handler.command = /^(panties)$/i
export default handler
