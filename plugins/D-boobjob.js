import hmtai from 'hmtai'
let handler = async(m, { conn }) => {
let img = await hmtai.nsfw.boobjob()
await conn.sendFile(m.chat, img, '', '', m)}
handler.help = ['boobjob']
handler.tags = ['nsfw']
handler.command = /^(boobjob)$/i
export default handler
