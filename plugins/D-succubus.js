import fetch from 'akaneko'
let handler  = async (m, { conn, args }) => {
let url = await fetch.nsfw.succubus()
     conn.sendFile(m.chat, url, 'succubus.jpg', 'Nih Kak', m, false)
}
handler.help = ['succubus']
handler.tags = ['nsfw']
handler.command = /^succubus$/i
export default handler
