import hmtai from 'hmtai'
let handler = async(m, { conn }) => {
let img = await hmtai.nsfw.ahegao()
await conn.sendFile(m.chat, img, '', '', m)}
handler.help = ['ahegao']
handler.tags = ['nsfw']
handler.command = /^(ahegao)$/i
export default handler
