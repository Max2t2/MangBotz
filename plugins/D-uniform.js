import hmtai from 'hmtai'
let handler = async(m, { conn }) => {
let img = await hmtai.nsfw.uniform()
await conn.sendFile(m.chat, img, '', '', m)}
handler.help = ['uniform']
handler.tags = ['nsfw']
handler.command = /^(uniform)$/i
export default handler
