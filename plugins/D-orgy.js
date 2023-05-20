import hmtai from 'hmtai'
let handler = async(m, { conn }) => {
let img = await hmtai.nsfw.orgy()
await conn.sendFile(m.chat, img, '', '', m)}
handler.help = ['orgy']
handler.tags = ['nsfw']
handler.command = /^(orgy)$/i
export default handler
