import hmtai from 'hmtai'
let handler = async(m, { conn }) => {
let img = await hmtai.nsfw.blowjob()
await conn.sendFile(m.chat, img, '', '', m)
}
handler.help = ['blowjob']
handler.tags = ['nsfw']
handler.command = /^(blowjob)$/i
export default handler